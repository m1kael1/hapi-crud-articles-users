const { Connection } = require("../config/db");
const { deletedArticleByUserId } = require("./articles.service");

const getAllUsersData = async () => {
	const users = await new Promise((resolve, reject) => {
		Connection.query(
			"SELECT uid, username, email FROM users",
			(err, results) => {
				if (err) throw Error(err.message);
				resolve(results);
			}
		);
	});
	return users;
};

const getUserByEmail = async (email) => {
	const user = await new Promise((resolve, reject) => {
		Connection.query(
			"SELECT uid, username,email FROM users WHERE email = ?",
			[email],
			(err, results) => {
				if (err) throw Error(err.message);
				resolve(results);
			}
		);
	});
	return user;
};

const getUserById = async (uid) => {
	const user = await new Promise((resolve, reject) => {
		Connection.query(
			"SELECT uid, username, email FROM users WHERE uid = ?",
			[uid],
			(err, results) => {
				if (err) throw Error(err.message);
				if (!results[0]) reject("User not Found");
				resolve(results[0]);
			}
		);
	});
	return user;
};

const deleteUserById = async (uid) => {
	await getUserById(uid);
	const userDeleted = await new Promise((resolve, reject) => {
		Connection.query(
			"DELETE FROM users WHERE uid = ?",
			[uid],
			(err, results) => {
				if (err) throw Error(err);
				resolve(results);
			}
		);
	});
	await deletedArticleByUserId(uid);
	return userDeleted;
};

module.exports = {
	getUserByEmail,
	getAllUsersData,
	deleteUserById,
	getUserById,
};
