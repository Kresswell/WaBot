let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? 'Bot is not active' : banned ? 'you are banned' : 'Bot here',
                '𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢 𝙼𝙳 𝚑𝚎𝚛𝚎',
                isBanned ? 'Unban' : banned ? 'Bot Owner' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Support',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.owner', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Open this link')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `┌〔 𝐈𝐧𝐯𝐢𝐭𝐞 𝐁𝐨𝐭𝐬 𝐭𝐨 𝐆𝐫𝐨𝐮𝐩 〕
├ 
├ 
└────

https://github.com/Kresswell/INFINITY-MD
`.trim(), '𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢 𝙼𝙳', 'Bot Owner', ',owner', m)
    }


    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`𝐔𝐩𝐭𝐢𝐦𝐞 ${uptime} | 𝐌𝐨𝐝𝐞: ${global.opts['𝐒𝐞𝐥𝐟'] ? '𝐏𝐫𝐢𝐯𝐚𝐭𝐞' : setting.groupOnly ? '𝐆𝐫𝐨𝐮𝐩 𝐎𝐧𝐥𝐲' : '𝐏𝐮𝐛𝐥𝐢𝐜'} | 𝗜𝗻𝗳𝗶𝗻𝗶𝘁𝘆 𝗠𝗗`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}