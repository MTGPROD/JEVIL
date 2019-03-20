const Discord = require('discord.js')

exports.run = (client, args, message, gameData, p1, p2, p3, p4) => {
	if(message.author.id === p1.id) {
		if(p1.mj === false) return message.channel.send("Tu n'est pas MJ.")
    } else {
    	return message.channel.send("Tu n'est pas dans la partie.")
    }
    
    if(message.author.id === p2.id) {
		if(p2.mj === false) return message.channel.send("Tu n'est pas MJ.")
    } else {
    	return message.channel.send("Tu n'est pas dans la partie.")
    }
    
    if(message.author.id === p3.id) {
		if(p3.mj === false) return message.channel.send("Tu n'est pas MJ.")
    } else {
    	return message.channel.send("Tu n'est pas dans la partie.")
    }
    
    if(message.author.id === p4.id) {
		if(p4.mj === false) return message.channel.send("Tu n'est pas MJ.")
    } else {
    	return message.channel.send("Tu n'est pas dans la partie.")
    }
	gameData.smashBall = true
	message.channel.send('Le premier qui dit `SMASH` pourra utiliser son pourvoir Smash.')
	const filter = m => m.content.includes('SMASH') && message.author.id != '497101514079469569'
    const collector = channel.createMessageCollector(filter, { time: 15000 });
    collector.on('collect', m => {
    	    if(m.author.id === p1.id) {
    	           p1.smashPower = true
    	    } else {
    	        p1.smashPower = false
                p1.smashPowerChance++
    	    }
    
            if(m.author.id === p2.id) {
    	           p2.smashPower = true
    	    } else {
    	        p2.smashPower = false
                p2.smashPowerChance++
    	    }
    
            if(m.author.id === p3.id) {
    	           p3.smashPower = true
    	    } else {
    	        p3.smashPower = false
                p3.smashPowerChance++
    	    }
    
            if(m.author.id === p4.id) {
    	           p4.smashPower = true
    	    } else {
    	        p4.smashPower = false 
                p4.smashPowerChance++
    	    }
            message.channel.send(`${m.author} A récupérer la boule smash. Il peut utiliser son pouvoir.`);
     })
    collector.on('end', collected => {
    	    if(collected.size === 0) {
    	           message.channel.send('Temps écoulé, personne n\'as eu la balle smash.')
    	    }
           gameData.smashBall = false
     })
}