const Discord = require('discord.js')

exports.run = (client, args, message, gameData, p1, p2, p3, p4) => {
	if(!message.member.roles.has('553308822169583653')) return message.channel.send("Tu n'as pas le rôle <@553308822169583653>")
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
     }
}