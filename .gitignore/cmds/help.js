const Discord = require('discord.js')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setTitle('SSE - Help')
        .setDescription('Arrivera plus tard.')
    message.channel.send(embed)
}
