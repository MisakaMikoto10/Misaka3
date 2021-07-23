global.owner = ['6285780372455'] // Put your number here
global.mods = [] // Want some help?
global.prems = ['6285780372455'] // Premium user has unlimited limit
global.player = ['6285780372455']
global.wait = "[❗]  ```Chotto Matte...```"
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '22c0b4a47404ec7b'
}

// Sticker WM
global.packname = 'Bot'
global.author = 'Megane'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
