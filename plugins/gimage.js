let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let fetch = require('node-fetch')

let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw `hmm...apa yang dicari ngab?\n\nContoh:\n${usedPrefix + command} Mobil`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '404 Not Found'
  conn.sendFile(m.chat, url, 'img', '', m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['gimage <search>', 'image <search>','img <search>']
handler.tags = ['internet']
handler.command = /^(g?image|img)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random(5) * arr.length)]
}
