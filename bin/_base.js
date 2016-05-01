#!/usr/bin/env node
var currentPath = process.cwd()
var appPath = currentPath + '/src/main'

require('babel-core/register')

try {
  require(appPath)
} catch (e) {
  console.log('app started with error and exited', e)
  process.exit(1)
}

// console.log('app started in development mode')