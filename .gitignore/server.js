const Discord = require('discord.js')
const client = new Discord.client

client.on('ready', () => {
    client.user.setGame('I CAN DO ANYTHING')
    client.user.setStatus('dnd')
}

client.login(process.evn.TOKEN)
