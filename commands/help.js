const Discord = require('discord.js'),
    config = require('../config.json')
 
module.exports = {
    run: (message, args, client) => {
        if (args[0]) {
            const command = client.commands.get(args[0].toLowerCase())
            if (!command || !command.help) return message.channel.send('Oupsi cette commande n\'existe pas !')
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`**Commande : ${command.name}**\n\n${command.help.description}\n\nSyntaxe : \`${config.prefix}${command.name}${command.help.syntax ? ` ${command.help.syntax}` : ''}\``))
        }
        else {
            message.channel.send(new Discord.MessageEmbed()
                .setColor("#CC6699")
                .setTitle('Un peu d aide ? UwU')
                .setDescription(`${client.commands.filter(command => command.help).map(command => `\`${config.prefix}${command.name}\``).join(' ')}\n\n Si tu as besoins d'info sur une commande \`${config.prefix}help [nom de la commande]\``))
        }
    },
    name: 'help',
    help: {
        description: 'Si tu veux un peu d aide fait cette commande !',
        syntax: '[nom de la commande]'
    }
}