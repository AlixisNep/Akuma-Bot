const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('EVENT')
            .setDescription('Y a aucun event pour le moment ! Mais n hésite pas à regarder dans le channel #annonces pour voir si un event est prévu ou en cours !')
            .setColor('#CC6699')
            .setImage('https://media.discordapp.net/attachments/855505226999529502/855505282263154748/gj.png')
            .setFooter('serveurs dispo : Blossom Rp, Larelyos, x')
        )
    },
    name: 'event',
    help: {
        description: 'Pour savoir si un event est en cours ou bien est prévu ! Grace à cette commade, tu auras un recap rapide de toutes les info necessaire dessus ! >w<',
    }
}