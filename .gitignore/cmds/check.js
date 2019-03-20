const Discord = require('discord.js')

exports.run = (client, message, args, gameData, p1, p2, p3, p4) => {
	
	if(message.author.id != '234234723314958339') return message.channel.send("Tu n'est pas un développeur :gear:")
	
	const mainEmbed = new Discord.RichEmbed()
	     .setTitle("Trackeur d'anomalies")
	     .addField('Données de jeu',`**Partie en cours** \`${gameData.active}\`\n**Balle smash sur le terrain** \`${gameData.smashBall}\`\n**Manche** \`${gameData.turn}\`\n**Évènement d'arène \`${gameData.arenaEvent}\`**\n**Joueur1 connecté** \`${p1.active}\`\n**Joueur2 connecté** \`${p2.active}\`\n**Joueur3 connecté** \`${p3.active}\`\n**Joueur4 connecté** \`${p4.active}\``)
	     .addField('Données du joueur N°1', `**Connecter a la partie** \`${p1.active}\`\n**Pseudo**\`${p1.name}\`\n**Discriminator** \`${p1.tag}\`\n**ID** \`${p1.id}\`\n**Avatar** [Cliquez-ici](${p1.avatar})\n**Personage jouer** \`${p1.character}\`\n**Pourcentage** \`${p1.percentage}%\`\n**Chances de se faire éjecter un prochain tour** \`${p1.chances}\`\n**Maitre joueur** \`${p1.mj}\``)
	     .addField('Données du joueur N°2', `Connecter a la partie** \`${p2.active}\`\n**Pseudo**\`${p2.name}\`\n**Discriminator** \`${p2.tag}\`\n**ID** \`${p2.id}\`\n**Avatar** [Cliquez-ici](${p2.avatar})\n**Personage joué** \`${p2.character}\`\n**Pourcentage** \`${p2.percentage}%\`\n**Chances de se faire éjecter un prochain tour** \`${p2.chances}\`\n**Maitre joueur** \`${p2.mj}\``)
	     .addField('Données du joueur N°3', `Connecter a la partie** \`${p3.active}\`\n**Pseudo**\`${p3.name}\`\n**Discriminator** \`${p3.tag}\`\n**ID** \`${p3.id}\`\n**Avatar** [Cliquez-ici](${p3.avatar})\n**Personage joué** \`${p3.character}\`\n**Pourcentage** \`${p3.percentage}%\`\n**Chances de se faire éjecter un prochain tour** \`${p3.chances}\`\n**Maitre joueur** \`${p3.mj}\``)
	     .addField('Données du joueur N°4', `Connecter a la partie** \`${p4.active}\`\n**Pseudo**\`${p4.name}\`\n**Discriminator** \`${p4.tag}\`\n**ID** \`${p4.id}\`\n**Avatar** [Cliquez-ici](${p4.avatar})\n**Personage joué** \`${p4.character}\`\n**Pourcentage** \`${p4.percentage}%\`\n**Chances de se faire éjecter un prochain tour** \`${p4.chances}\`\n**Maitre joueur** \`${p4.mj}\``)
	     .setFooter('Si un bug/crash de la partie survient veuillez contacter MTG#8211 avec de ce message (au moment ou l\'erreur a eu lieu)')
	message.channel.send(mainEmbed)
}