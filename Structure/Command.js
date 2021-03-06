/** @format */

const Client = require('./Client')
const mysql = require("mysql")
const Discord = require("discord.js")

/**
 * @param {Client} bot 
 * @param {Discord.Message | Discord.Interaction} message 
 * @param {string[]} args
 * @param {mysql.Connection} db 
*/

function RunFunction(bot, message, args, db) {}

class Command {

    /** 
     * @typedef {(name: string, description: string, utilisation: string, permission: string, category: string, run: RunFunction)}
     * @param {CommandOptions} options 
    */

    constructor(options) {

        this.name = options.name;
        this.description = options.description;
        this.utilisation = options.utilisation;
        this.permission = options.permission;
        this.category = options.category;
        this.run = options.run;
    }
}

module.exports = Command;
