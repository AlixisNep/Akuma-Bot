const config = require('../config.json')
 
module.exports = {
    run: (message, args) => {
        {
            const result = Math.floor((Math.random() * 100) + 1)
            message.reply("Tu veux un chiffre ? En voila un ! Et ce sera...." + result, "è-é")
        }
    },
    name: 'roll',
    guildOnly: true,
    help: {
        description: 'Besoins de dé pour RP ? UwU',
    }
    }
