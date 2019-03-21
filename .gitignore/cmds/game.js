const Discord = require('discord.js')

exports.run = (client, message, args, gameData, p1, p2, p3, p4) => {
	
	if(args[0] === 'reset') {
		gameDate.active = false
		gameData.smashBall = false 
		gameData.turn = 0
		gameData.arenaEvent = false
		gameData.p1active = false
		gameData.p2active = false
		gameData.p3active = false
		gameData.p4active = false
		gameData.time = 0
		p1.active = false
		p1name = false
		p1.tag = false
	    p1.identity = false
		p1.avatar = false
		p1.character = false
        p1.percentage = 0
        p1.chances = 0
        p1.smashPower = false
        p1.smashPowerChance = 0
        p1.mj = false 
        p2.active = false
		p2.name = false
		p2.tag = false
	    p2.identity = false
		p2.avatar = false
		p2.character = false
        p2.percentage = 0
        p2.chances = 0
        p2.smashPower = false
        p2.smashPowerChance = 0
        p2.mj = false 
        p3.active = false
		p3name = false
		p3.tag = false
	    p3.identity = false
		p3.avatar = false
		p3.character = false
        p3.percentage = 0
        p3.chances = 0
        p3.smashPower = false
        p3.smashPowerChance = 0
        p3.mj = false 
        p4.active = false
		p4.name = false
		p4.tag = false
	    p4.identity = false
		p4.avatar = false
		p4.character = false
        p4.percentage = 0
        p4.chances = 0
        p4.smashPower = false
        p4.smashPowerChance = 0
        p4.mj = false 
        message.channel.send("La base de données a été remise a zéro.")
    }
	
	if(args[0] === 'create') {
		if(gameData.active === true) return message.channel.send("Une partie est déjà en cours, Bientôt vous pourrez démarrer plus parties a la fois mais ce n'est pas possible actuellement.")
		gameData = true
		p1.name = message.author.username
		p1.tag = message.author.discriminator 
		p1.id = message.author.id
		p1.avatar = message.author.avatarURL
		p1.active = true
		message.channel.send("La partie a été créée, les autres joueurs faîtes `+join` pour rejoindre la partie.")
     }

	
	if(args[0] === 'join') {
		if(message.author.id === p1.identity) return message.channel.send('Tu est déjà dans la partie')
		if(message.author.id === p2.identity) return message.channel.send('Tu est déjà dans la partie')
		if(message.author.id === p3.identity) return message.channel.send('Tu est déjà dans la partie')
		if(message.author.id === p4.identity) return message.channel.send('Tu est déjà dans la partie')
		 
	   if(p2.active === false) {
		     p2.name = message.author.username
		     p2.tag = message.author.discriminator
		     p2.identity = message.author.id
		     p2.avatar = message.author.avatarURL
		     p2.active = true
	   } else if (p3.active === false) {
		      p3.name = message.author.username
		     p3.tag = message.author.discriminator
		     p3.identity = message.author.id
		     p3.avatar = message.author.avatarURL
		     p3.active = true
	   } else if {
		    p4.name = message.author.username
		     p4.tag = message.author.discriminator
		     p4.identity = message.author.id
		     p4.avatar = message.author.avatarURL
		     p4.active = true
	   } else {
		    return message.channel.send("Il n'y a plus de places, désolé")
	   }
    }
}