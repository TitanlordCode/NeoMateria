import { runScript } from './utils/script-helper'

async function main() {
  // CSS generation
  runScript('ts-node scripts/generate-colors.ts')
  // other css generation scripts
  runScript('ts-node scripts/generate-globals.ts')

  // MDX generation
  runScript('ts-node scripts/generate-docs.ts')
}

main()
