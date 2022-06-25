const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("messageCreate", async (bot, message) => {

    const db = bot.db

    const prefix = "!"

    let messageArray = message.content.split(" ");
    let command = messageArray[0]
    let args = messageArray.slice(1);
    let commandFile = bot.commands.get(command.slice(prefix.length))

    if(!message.content.startsWith("!")) return;
    if(!commandFile) return message.reply(`⚠️ Cette Commande n'existe pas ! ⚠️`)

    commandFile.run(bot, message, args, db)
})
