let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw 'link githubnya mana ngab?'
if (!args[1]) throw 'nama filenya mana ngab?'

if(!args[0].includes('github.com')) throw 'linknya salah ngab'

let url = `${args[0]}/archive/refs/heads/main.zip`

m.reply(`*Mohon tunggu, sedang mengirim repository..*`)
conn.sendFile( m.chat, url, `${args[1]}.zip`, null, m)

}
handler.help = ['gitclone']
handler.tags = ['download']
handler.command = /gitclone/i

handler.limit = true

module.exports = handler