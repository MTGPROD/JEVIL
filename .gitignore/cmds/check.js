const Discord = require('discord.js')

exports.run = (client, message, args, gameData, p1, p2) => {
	
	if(message.author.id != '234234723314958339') return message.channel.send("Tu n'est pas un développeur :gear:")
	
	const mainEmbed = new Discord.RichEmbed()
	     .setTitle("Trackeur d'anomalies")
	     .addField('Données de jeu',`**Partie en cours** ${gameData.active}`)
	message.channel.send(mainEmbed)
}