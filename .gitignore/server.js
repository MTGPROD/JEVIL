const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = 'j!';

client.on('ready', () => {
    client.user.setGame('I CAN DO ANYTHING')
    client.user.setStatus('dnd')
})

client.on('guildMemberRemove', member => {
     member.createDM().then(channel =>{
         channel.send('You are banned from Chiaki NC for leaving. There is currently no ban appeal')
     }).catch(console.error) 
     member.ban('Auto ban')
})

client.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    try {
        delete require.cache[require.resolve(`./cmds/${cmd}.js`)]
        let commandFile = require(`./cmds/${cmd}.js`)
        commandFile.run(client, message, args);
    } catch (e) {
        console.log(e.stack)
    }
});

client.login(process.env.TOKEN)
