const mysql = require('mysql')
const Database = new mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Pheonix Bot"
})

Database.connect(function(err) {

    if (err) throw err;

    console.log("Database Chargée !")
})

module.exports = Database;
