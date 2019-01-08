const Discord = require('discord.js')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setTitle('HELP')
        .setDescription('I have one command actually CHAOS CHAOS')
    message.channel.send(embed)
}
