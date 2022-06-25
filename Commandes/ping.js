const Discord = require("discord.js")
const Command = require("../Structure/Command")

module.exports = new Command({

    name: "ping",
    description: "Commande pour Connaître le Ping du Bot",
    utilisation: "!ping",
    permission: "Aucune",
    category: "Information",

    async run(bot, message, args) {
        
        const startTime = Date.now()

        await message.reply(`🔄 En Cours de Chargement...`).then(async msg => {

            const endTime = Date.now()

            await msg.edit(`**Latence du Bot:** \`${endTime - startTime} ms\`\n **Latence de l'API de Discord:** \`${bot.ws.ping} ms\``)
        })
    }
})
