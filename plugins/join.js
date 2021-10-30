let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link GC-nya mana ngab?'
    let res = await conn.acceptInvite(code)
    m.reply(`Successfully joined the group ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 3
        var now = new Date() * 1
        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari
        else global.db.data.chats[res.gid].expired = now + jumlahHari
    })
    conn.sendButton(res.gid, `
*${conn.user.name}* adalah bot whatsapp yang dibuat menggunakan Nodejs, *${conn.user.name}* diundang oleh @${m.sender.split`@`[0]}
    
ketik *${usedPrefix}menu* untuk melihat seluruh perintah`.trim(), watermark, 'Menu', `${usedPrefix}?`, 0, { contextInfo: { mentionedJid: [m.sender] } })
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['group']

handler.command = /^join$/i

handler.premium = false

handler.owner = true

module.exports = handler
