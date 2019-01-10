const Discord = require('discord.js')

exports.run = (client, message, args) => {
     var c1 = '🤣'
     var c2 = '🙂'
     var c3 = '🤔'
     var c4 = '😀'
     var c5 = '😅'
     
     const embed = new Discord.RichEmbed()
           .setTitle('Gift')
           .setDescription(`[===============]\n${c1} | ${c2} | ${c3} | ${c4} | ${c5}\n[=======^======]`)
     message.channel.send(embed)
}
