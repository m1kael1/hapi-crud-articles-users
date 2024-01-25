const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const Connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DB_NAME,
});

Connection.connect((err) => {
	if (err) throw err;
	console.log("db connected");
});

module.exports = { Connection };
