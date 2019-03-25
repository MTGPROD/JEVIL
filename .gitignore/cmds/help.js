const Discord = require('discord.js')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setTitle('SSE - Help')
        .setDescription("Voici le menu d'aide pour le jeu SSE")
        .addField('Aide pour - Partie en cours', "`+game create`: Créé une partie, si ce n'est pas déjà fait.\n`+game join`: Rejoindre une partie en cours.\n`+game reset`: Arrête la partie et remet a zéro la database.")
        
                      
    message.channel.send(embed)
}
