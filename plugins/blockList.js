let handler = async (m, { conn }) => {
    let blocked = conn.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
    conn.reply(m.chat, `
┌〔 𝐁𝐥𝐨𝐜𝐤𝐞𝐝 𝐋𝐢𝐬𝐭 〕
├ Total : ${blocked.length} User
${blocked.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join`\n`}
└───────`.trim(), m, { contextInfo: { mentionedJid: blocked } })
}
handler.help = ['blocklist']
handler.tags = ['owner']
handler.command = /^listbloc?k|bloc?klist|daftarbloc?k|blocks$/i
handler.owner = true

module.exports = handler