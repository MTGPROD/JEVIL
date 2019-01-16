const Discord = require('discord.js')

exports.run = (client, message, args) => {
     var randome = ['🤣', '😋', '😅', '😙', '😎']
     var gift = randome[Math.Floor(Math.Random * randome.length)]
     
     

     
     const embed = new Discord.RichEmbed()
           .setTitle('Gift')
           .setDescription(`${gift}`)
     message.channel.send(embed).then(msg => {
          setInterval(function() {
               embed.setDescription(`${gift}`)
               msg.edit(embed)
          }, 900)
          
          
     })
}
