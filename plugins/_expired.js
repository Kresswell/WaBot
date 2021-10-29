let fs = require('fs')
let handler = m => m
handler.before = async function (m) {

    if (m.isGroup && db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= db.data.chats[m.chat].expired) {
            this.sendFile(m.chat, fs.readFileSync('./src/ex.mp4'), '', `time *${this.user.name}* the group is up, chat owner for more information. Bye`, 0, { thumbnail: Buffer.alloc(0) }).then(() => {
                this.sendContact(m.chat, owner[0], this.getName(owner[0] + '@s.whatsapp.net')).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        db.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}

module.exports = handler
