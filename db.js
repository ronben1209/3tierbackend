const mysql = require("mysql2");

const connection = mysql.createConnection({
    // UPDATE ALL THESE THINGS
    // HOST ==> MYSQL Endpoints
    host: "threetierdarabase.cp8cs448ijwp.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "Jesuscares1209$",
   // database: "taskdb"
});

connection.connect();

module.exports = connection;
