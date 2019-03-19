const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '+';

var gameData = { 
     game: false,
     terrain: 'Rien'
}

let p1 = {
		name: 'Rien',
		tag: 'Rien',
		id: 'Rien',
		avatar: 'Rien',
		character: 'Aucun',
		inscrit: false,
        pourcent: '0%' 
    }
    
let p2 = {
    	name: 'Rien',
        tag: 'Rien',
        id: 'Rien',
        avatar: 'Rien',
        character: 'Rien',
        inscrit: false,
        pourcent: '0%'
    }
}

client.on('ready', () => {
    client.user.setGame('Prefix +')
    client.user.setStatus('dnd')
})

client.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    try {
        delete require.cache[require.resolve(`./cmds/${cmd}.js`)]
        let commandFile = require(`./cmds/${cmd}.js`)
        commandFile.run(client, message, args, gameData, p1,p2);
    } catch (e) {
        console.log(e.stack)
    }
});

client.login(process.env.TOKEN)