const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    client.user.setGame('I CAN DO ANYTHING')
    client.user.setStatus('dnd')
})

client.login(process.env.TOKEN)
