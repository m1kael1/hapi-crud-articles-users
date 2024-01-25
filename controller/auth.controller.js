const { createNewUser } = require("../service/auth.service");
const { getUserByEmail, getUserById } = require("../service/users.service");
const { response } = require("../utils/response.utils");

const createUser = async (request, h) => {
	const { username, email, password } = request.payload;
	const user = await getUserByEmail(email);
	if (!user.length) {
		const results = await createNewUser(username, email, password);
		const userData = await getUserById(results.insertId);
		return response(201, "User created", userData[0], h);
	}
	return response(400, "Email already exist", user[0], h);
};

module.exports = { createUser };
