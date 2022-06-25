const Discord = require('discord.js')
const fs = require("fs")
const intents = new Discord.Intents(32767)
const Command = require('./Command')
const Event = require('./Event')

class Client extends Discord.Client {

    constructor(options) {

        super({intents})

        /**
         * @type {Discord.Collection<string, Command>}
        */

        this.commands = new Discord.Collection()
        this.color = "#FFA500"
    }

    start(token) {

        fs.readdirSync('./Commandes').filter(file => file.endsWith(".js")).forEach(async f => {

            /**
             * @type {Command}
            */

            let props = require(`../Commandes/${f}`)
            console.log(`Commande: ${f} Chargée`)
            this.commands.set(props.name, props)
        })

        fs.readdirSync(`./Events/`).forEach(dirs => {

            fs.readdirSync(`./Events/${dirs}/`).filter(files => files.endsWith(".js")).forEach(async evt => {

                const event = require(`../Events/${dirs}/${evt}`);
                console.log(`Event: ${event.event}.js Chargé"`)
                this.on(event.event, event.run.bind(null, this));
            })
        })

        this.login(token)
    }
}

module.exports = Client;
