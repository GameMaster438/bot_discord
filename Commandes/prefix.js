const Discord = require("discord.js")
const Command = require("../Structure/Command")

module.exports = new Command({

    name: "prefix",
    description: "Commande pour Changer le Prefix du Bot",
    utilisation: "prefix",
    permission: "Aucune",
    category: "Système",

    async run(bot, message, args, db) {

        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async (err, req) => {

            let prefix = args[0];
            if(!prefix) return message.reply("⚠️ Veuillez Indiquer un Nouveau Préfix ! ⚠️")

            const ancienPrefix = req[0].prefix;

            db.query(`UPDATE serveur SET prefix = '${prefix}' WHERE guildID = ${message.guild.id}`)

            message.reply(`Vous avez Modifié le Préfix:\n**Ancien Préfix:** \`${ancienPrefix}\`\n **Nouveau Préfix:** \`${prefix}\``)
        })
    }
})
