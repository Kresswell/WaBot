let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Dont Tag My Master..
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6281293836868/i
handler.command = new RegExp

module.exports = handler
