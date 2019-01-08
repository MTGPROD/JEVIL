const Discord = require('discord.js')

exports.run = (client, message, args) => {
    var name = client.channels.get('526348347506819095').fetchMessage('532115649556905994')
    
    message.channel.send(name.content)
