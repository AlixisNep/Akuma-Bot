const config = require('../config.json')
 
module.exports = {
    run: (message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Nah, toi t as pas le droit ! è-é')
        if (!args[0]) return message.channel.send('Oupsi, je ne peux rien répéter si tu ne me dit rien TuT')
        message.delete()
        message.channel.send(message.content.trim().slice(`${config.prefix}say`.length))
    },
    name: 'say',
    guildOnly: true,
    help: {
        description: 'si jamais tu souhaites me faire dire quelque chose ! Akuma à ton service ! OwO',
        syntax: '[ce que tu souhaites faire répéter]'
    }
}


