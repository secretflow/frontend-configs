import { getConfigPath, spawn } from './util.js'

spawn('lint-staged', [
  '--config',
  getConfigPath('@secretflow/lint-staged-config'),
])
