const Discord = require('discord.js')

exports.run = (client, message, args) => {
	        const noEmbed = new Discord.RichEmbed() 
              .setColor('#e02c2c')
             .setDescription(`Oops! il n'y a plus de places disponibles.`)
        const NdP = message.guild.roles.find("name", "Participants")
        if(NdP.members.size === 12) return message.channel.send(noEmbed) 
        
        message.member.setRoles(['553282040011816960'])
           const registerEmbed = new Discord.RichEmbed()
                 .setColor('#e02c2c')
                 .setDescription(`Vous êtes désormais enregistré pour la bêta. 📝 ${NdP.members.size + 1}/12\n\n<#553281783093919762>, <#553281826437726219>, <#553281915621343260>.`)
           message.channel.send(registerEmbed) 
}
