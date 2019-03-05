const Discord = require('discord.js')

exports.run = (client, message, args) => {
     const mainEmbed = new Discord.RichEmbed()
         .setAuthor('Nouvelle technologie') 
         .setDescription('[<:yt:552290684363735041>](https://youtube.com/) | [<:fb:552290936558977044>](https://www.facebook.com)')
     message.channel.send(mainEmbed)
         
} 
