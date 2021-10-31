const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Hmmm..cari apa ngab?\n\nContoh:\n${usedPrefix + command} Only`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Content Not found'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\ntry another server...'}`)
    }
  }
  if (yt === false) throw 'Semua server sedang gangguan'
  if (yt2 === false) throw 'Semua server sedang gangguan'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
*Title:* ${title}
*Audio File Size:* ${filesizeF}
*Video File Size:* ${yt2.filesizeF}
*Server y2mate:* ${usedServer}
`.trim(), watermark, '𝐀𝐮𝐝𝐢𝐨🎵', `.yta ${vid.url}`, '𝐕𝐢𝐝𝐞𝐨🎬', `.yt ${vid.url}`)
}
handler.help = ['song','play','?'].map(v => v + ' <query>')
handler.tags = ['downloader']
handler.limit = true
handler.command = /^(play|song)$/i

handler.exp = 0

module.exports = handler

