const Discord = require('discord.js')
const cards = require('./cards.json')

exports.run = (client, message, args) => {
    var name = cards.name
    var id = message.author.id
    
    
    const cardEmbed = new Discord.RichEmbed()
         .setTitle('ID card')
         .addField('Name', cards.id.name)
    message.channel.send(cardEmbed)
