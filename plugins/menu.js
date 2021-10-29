let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
Hai, %name!
Homepage: https://sonycovery.com
%readmore`.trimStart(),
  header: '┌─ %category',
  body: '├ %cmd',
  footer: '└────\n',
  after: `
*%npmname@*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'stiker','quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools','anime', 'fun', 'database', 'audio','info','owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': '𝐌𝐚𝐢𝐧',
    'game': '𝐆𝐚𝐦𝐞',
    'xp': '𝐄𝐱𝐩 & 𝐋𝐢𝐦𝐢𝐭',
    'anime': '𝐀𝐧𝐢𝐦𝐞',
    'sticker': '𝐒𝐭𝐢𝐤𝐞𝐫',
    'shell': '𝐌𝐚𝐠𝐢𝐜 𝐒𝐡𝐞𝐥𝐥𝐬',
    'quotes': '𝐐𝐮𝐨𝐭𝐞𝐬',
    'admin': `𝐀𝐝𝐦𝐢𝐧 ${global.opts['restrict'] ? '' : '(Disabled)'}`,
    'group': '𝐆𝐫𝐮𝐩',
    'premium': '𝐏𝐫𝐞𝐦𝐢𝐮𝐦',
    'internet': '𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭',
    'anonymous': '𝐀𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬 𝐂𝐡𝐚𝐭',
    'nulis': '𝐌𝐚𝐠𝐞𝐫𝐍𝐮𝐥𝐢𝐬 & 𝐋𝐨𝐠𝐨',
    'downloader': '𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫',
    'tools': '𝐓𝐨𝐨𝐥𝐬',
    'fun': '𝐅𝐮𝐧',
    'database': '𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞',
    'vote': '𝐕𝐨𝐭𝐢𝐧𝐠',
    'audio': '𝐕𝐨𝐢𝐜𝐞 𝐂𝐡𝐚𝐧𝐠𝐞𝐫',
    'info': '𝐈𝐧𝐟𝐨',
    '': 'No Category',
  }
  if (teks == 'game') tags = {
    'game': '𝐆𝐚𝐦𝐞'
  }
  if (teks == 'xp') tags = {
    'xp': '𝐄𝐱𝐩 & 𝐋𝐢𝐦𝐢𝐭'
  }
  if (teks == 'stiker') tags = {
    'sticker': '𝐒𝐭𝐢𝐤𝐞𝐫'
  }
  if (teks == 'shell') tags = {
    'shell': '𝐌𝐚𝐠𝐢𝐜 𝐒𝐡𝐞𝐥𝐥𝐬'
  }
  if (teks == 'quotes') tags = {
    'quotes': '𝐐𝐮𝐨𝐭𝐞𝐬'
  }
  if (teks == 'admin') tags = {
    'admin': `𝐀𝐝𝐦𝐢𝐧 ${global.opts['restrict'] ? '' : '(Disabled)'}`
  }
  if (teks == 'grup') tags = {
    'group': '𝐆𝐫𝐮𝐩'
  }
  if (teks == 'premium') tags = {
    'premium': '𝐏𝐫𝐞𝐦𝐢𝐮𝐦'
  }
  if (teks == 'internet') tags = {
    'internet': '𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': '𝐀𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬 𝐂𝐡𝐚𝐭'
  }
  if (teks == 'nulis') tags = {
    'nulis': '𝐌𝐚𝐠𝐞𝐫𝐍𝐮𝐥𝐢𝐬 & 𝐋𝐨𝐠𝐨'
  }
  if (teks == 'downloader') tags = {
    'downloader': '𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫'
  }
  if (teks == 'tools') tags = {
    'tools': '𝐓𝐨𝐨𝐥𝐬'
  }
  if (teks == 'fun') tags = {
    'fun': '𝐅𝐮𝐧'
  }
  if (teks == 'anime') tags = {
    'anime': '𝐀𝐧𝐢𝐦𝐞'
  }
  if (teks == 'database') tags = {
    'database': '𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞'
  }
  if (teks == 'audio') tags = {
    'audio': '𝐕𝐨𝐢𝐜𝐞 𝐂𝐡𝐚𝐧𝐠𝐞𝐫'
  }
  if (teks == 'vote') tags = {
    'vote': '𝐕𝐨𝐭𝐢𝐧𝐠',
    'absen': 'Absen'
  }
  if (teks == 'owner') tags = {
    'owner': '𝐎𝐰𝐧𝐞𝐫',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `${ucapan()}, ${name}`.trim(),
          "description": "𝐒𝐨𝐧𝐲 𝐂𝐨𝐯𝐞𝐫𝐲 🎮",
          "buttonText": "𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": `𝐀𝐥𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬`,
                  "description": "Show all features",
                  "rowId": ".? all"
                }, {
                  "title": "𝐆𝐚𝐦𝐞",
                  "description": "Game features",
                  "rowId": ".? game"

                }, {
                  "title": "𝐗𝐏",
                  "description": "Features level & usage limit",
                  "rowId": ".? xp"

                }, {
                  "title": "𝐒𝐭𝐢𝐤𝐞𝐫",
                  "description": "Features for making stickers",
                  "rowId": ".? stiker"
                }, { 
                "title": "𝐀𝐧𝐢𝐦𝐞",
                "description": "Anime Related Plugin",
                "rowId": ".? anime"
              },  {
                  "title": "𝐐𝐮𝐨𝐭𝐞𝐬",
                  "description": "Gives You Random Quotes..",
                  "rowId": ".? quotes"
                }, {
                  "title": "𝐀𝐝𝐦𝐢𝐧",
                  "description": "Group Admin Commands",
                  "rowId": ".? admin"
                }, {
                  "title": "𝐆𝐫𝐨𝐮𝐩",
                  "description": "Group Related Commands",
                  "rowId": ".? grup"
                }, {
                  "title": "𝐏𝐫𝐞𝐦𝐢𝐮𝐦",
                  "description": "Premium Users Plugins",
                  "rowId": ".? premium"
                }, {
                  "title": "𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭",
                  "description": "Commands Related To Internet",
                  "rowId": ".? internet"
                }, {
                  "title": "𝐀𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬",
                  "description": "To Start Anonymous Chatting",
                  "rowId": ".? anonymous"
                }, {
                  "title": "𝐌𝐚𝐠𝐢𝐜 𝐒𝐡𝐞𝐥𝐥",
                  "description": "Random answer feature",
                  "rowId": `.? magicshell`
                }, {
                  "title": "𝐍𝐮𝐥𝐢𝐬 & 𝐋𝐨𝐠𝐨",
                  "description": "Text Maker Coammnds",
                  "rowId": ".? nulis"
                }, {
                  "title": "𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫",
                  "description": "Downloading Commnds",
                  "rowId": ".? downloader"
                }, {
                  "title": "𝐓𝐨𝐨𝐥𝐬",
                  "description": "Tool features",
                  "rowId": ".? tools"
                }, {
                  "title": "𝐕𝐨𝐢𝐜𝐞 𝐂𝐡𝐚𝐧𝐠𝐞𝐫",
                  "description": "To change the voice",
                  "rowId": `.? audio`
                }, {
                  "title": "𝐅𝐮𝐧",
                  "description": "Just for fun",
                  "rowId": ".? fun"
                }, {
                  "title": "𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞",
                  "description": "User database",
                  "rowId": ".? database"
                }, {
                  "title": "𝐈𝐧𝐟𝐨",
                  "description": "To find out BOT info",
                  "rowId": ".? info"
                }, {
                  "title": "𝐎𝐰𝐧𝐞𝐫",
                  "description": "Owner's special features",
                  "rowId": ".? owner"
                }
              ]
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
    }
    // use this if you use business whatsapp
    //   throw `
    // ┌〔 LIST MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Presented by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Ready for *${_p}levelup*` : `${max - exp} More XP for levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://i.imgur.com/SiMhQ9z.jpg")).buffer(), text.trim(), '𝐒𝐨𝐧𝐲 𝐂𝐨𝐯𝐞𝐫𝐲 🎮', '𝐎𝐰𝐧𝐞𝐫 𝐁𝐨𝐭', ',owner', '𝐀𝐥𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬', '.? all', m)
  } catch (e) {
    conn.reply(m.chat, 'Sorry, Try Again', m)
    throw e
  }
}
handler.help = ['menu', 'help','list','bot', '?']
handler.tags = ['main']
handler.command = /^(menu|help|bot|list|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Kolkata').format('HH')
  res = "Good Morning 🌄"
  if (time >= 4) {
    res = "Good Morning 🌞"
  }
  if (time > 10) {
    res = "Good Afternoon 🌅"
  }
  if (time >= 15) {
    res = "Good Evening 🌆"
  }
  if (time >= 18) {
    res = "Good Night 🌌"
  }
  return res
}
