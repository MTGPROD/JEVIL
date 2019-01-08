const Discord = require('discord.js')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setTitle('PING ?!!!')
        .setDescription('I CAN DO ANYTHING')
    message.channel.send(embed)
}
