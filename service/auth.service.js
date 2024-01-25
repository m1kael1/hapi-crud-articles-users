const Bcrypt = require("bcrypt");
const { Connection } = require("../config/db");

const createNewUser = async (username, email, password) => {
	const salt = Bcrypt.genSaltSync();
	var encryptedPassword = Bcrypt.hashSync(password, salt);
	// var orgPassword = Bcrypt.compareSync(password, encryptedPassword);

	const user = await new Promise((resolve, reject) => {
		Connection.query(
			"INSERT INTO users (username, email , password) VALUES (?, ?, ?)",
			[username, email, encryptedPassword],
			(err, results) => {
				if (err) throw Error(err.message);
				resolve(results);
			}
		);
	});
	return user;
};
module.exports = { createNewUser };
