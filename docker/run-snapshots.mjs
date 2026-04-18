import { spawn, spawnSync } from 'node:child_process'

const APPEAR_TIMEOUT = 300 // seconds to wait for container to be created (includes image build time on first run)
const STARTUP_TIMEOUT = 30 // seconds to wait for container to leave 'created'

// Docker Compose v2 ships as `docker compose` (plugin); v1 as `docker-compose` (standalone).
// GitHub Actions runners only have v2. Try v2 first, fall back to v1.
function resolveComposeCommand() {
  const result = spawnSync('docker', ['compose', 'version'], { encoding: 'utf8', shell: true })
  return result.status === 0 ? ['docker', ['compose', 'run', '--rm', 'snapshots']] : ['docker-compose', ['run', '--rm', 'snapshots']]
}

const [composeExe, composeArgs] = resolveComposeCommand()
const compose = spawn(composeExe, composeArgs, {
  stdio: 'inherit',
  shell: true,
})

const getContainerId = () => {
  const result = spawnSync(
    'docker',
    ['ps', '-aq', '--filter', 'label=com.docker.compose.service=snapshots'],
    { encoding: 'utf8', shell: true },
  )
  return result.stdout.trim().split('\n')[0].trim()
}

const getStatus = (id) => {
  const result = spawnSync('docker', ['inspect', '--format', '{{.State.Status}}', id], {
    encoding: 'utf8',
    shell: true,
  })
  // Empty output means the container was removed (--rm deletes it on exit)
  return result.stdout.trim() || 'gone'
}

// Phase 1: wait for the container to appear
let containerId = ''
for (let i = 0; i < APPEAR_TIMEOUT; i++) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  containerId = getContainerId()
  if (containerId) break
}

if (!containerId) {
  compose.kill()
  console.error('\nERROR: Snapshot container did not appear within 30 seconds.')
  console.error('       Run "docker compose build snapshots" to check for build errors.')
  process.exit(1)
}

// Phase 2: wait for the container to leave 'created' (i.e. actually start)
let status = 'created'
for (let i = 0; i < STARTUP_TIMEOUT; i++) {
  status = getStatus(containerId)
  if (status !== 'created') break
  await new Promise((resolve) => setTimeout(resolve, 1000))
}

if (status === 'created') {
  spawnSync('docker', ['rm', '-f', containerId], { shell: true })
  compose.kill()
  console.error('\nERROR: Snapshot container is stuck in "created" — it failed to start.')
  console.error('       Check docker-compose.yml / compose.yml (shm_size, volumes, etc.).')
  process.exit(1)
}

// Phase 3: block until the container exits and relay its exit code.
// `docker wait` outputs the exit code the moment the container stops — before
// --rm deletes it, so we never race against the deletion cleanup.
const waitResult = spawnSync('docker', ['wait', containerId], { encoding: 'utf8', shell: true })
const exitCode = parseInt(waitResult.stdout.trim(), 10) || 0

// Kill the compose process (WSL2 network/volume teardown can hang 30+ s).
compose.kill()
process.exit(exitCode)
