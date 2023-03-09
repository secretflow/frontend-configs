import { getConfigPath, spawn } from './util.js'

spawn('commitlint', [
  '--edit',
  process.argv[2],
  '--config',
  getConfigPath('@secretflow/commitlint-config'),
])
