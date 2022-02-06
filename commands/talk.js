const Discord = require('discord.js'),
    replies = ['Awawa >w<', 'Akuma est heureuse de t aider ! OwO', 'Tu savais que si on traduisait mon prénom, je m appellerais démon ? è-é', 'Akuma a envie d un huuuug !']
 
module.exports = {
    run: (message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send('Mais... tu ne m as rien dit QwQ')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(question)
            .setDescription(replies[Math.floor(Math.random() * replies.length)]))
    },
    name: 'talk',
    help: {
        description: 'Et si on papotait un peu ? >w<',
        syntax: '[un petit mot gentil]'
    }
}