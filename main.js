const Discord = require("discord.js")
const fs = require("fs")
const intents = new Discord.Intents(32767)
const bot = new Discord.Client({intents})

bot.on("messageCreate", async message => {

    if(message.content === "!ping") return await message.reply(`Ping: ${bot.ws.ping} ms`)
});

bot.login(token)
