let fs = require('fs')
let handler = async (m, { conn, isOwner }) => {
  let mods = global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `┌〔 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐨𝐫 𝐋𝐢𝐬𝐭 〕` + `\n` + mods.map(v => isOwner ? '├ @' + v.replace(/@.+/, '') : '│ ' + conn.getName(v)).join`\n` + '\n└────', m, { contextInfo: { mentionedJid: mods } })
}
handler.help = ['moderator']
handler.tags = ['info']
handler.command = /^moderator$/i

module.exports = handler
