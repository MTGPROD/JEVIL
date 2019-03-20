const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '+';

var gameData = {
     active: false,
     smashBall: false,
     turn: 0,
     arenaEvent: false,
     p1active: false,
     p2active: false,
     p3active: false,
     p4active: false,
     time: 0
} 

var p1 = {
	    active: false,
		name: false,
		tag: false,
		id: false,
		avatar: false,
		character: false,
        percentage: 0,
        chances: 0,
        mj: false
}
    
var p2 = {
	    active: false,
		name: false,
		tag: false,
		id: false,
		avatar: false,
		character: false,
        percentage: 0,
        chances: 0,
        mj: false
}
    
var p3 = {
	    active: false,
		name: false,
		tag: false,
		id: false,
		avatar: false,
		character: false,
        percentage: 0,
        chances: 0, 
        mj: false
}
    
var p4 = {
	    active: false,
		name: false,
		tag: false,
		id: false,
		avatar: false,
		character: false,
        percentage: 0,
        chances: 0,
        mj: false
    }

client.on('ready', () => {
    client.user.setGame('Veuillez vous inscrire avant Avril | +register')
    client.user.setStatus('dnd')
	console.log('Yes my body was ready.')
	
})

client.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    try {
        delete require.cache[require.resolve(`./cmds/${cmd}.js`)]
        let commandFile = require(`./cmds/${cmd}.js`)
        commandFile.run(client, message, args, gameData, p1, p2, p3, p4);
    } catch (e) {
        console.log(e.stack)
    }
});

client.login(process.env.TOKEN) 
