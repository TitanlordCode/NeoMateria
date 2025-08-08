import { execSync } from 'node:child_process'

export function runScript(command: string) {
  console.log(`\n> Running: ${command}`)
  try {
    execSync(command, { stdio: 'inherit' })
  } catch (error) {
    console.error(`Error running "${command}":`, error)
    process.exit(1)
  }
}
