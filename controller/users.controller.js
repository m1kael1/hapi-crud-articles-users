const {
	getAllUsersData,
	getUserById,
	deleteUserById,
} = require("../service/users.service");
const { response } = require("../utils/response.utils");

const getAllUsers = async (request, h) => {
	const users = await getAllUsersData();
	return response(200, "", users, h);
};

const getUser = async (request, h) => {
	try {
		const { uid } = request.params;
		const user = await getUserById(uid);
		return user;
	} catch (err) {
		return response(404, err, "", h);
	}
};

const deleteUser = async (request, h) => {
	try {
		const { uid } = request.params;
		await deleteUserById(uid);
		return response(200, "User Deleted", "", h);
	} catch (err) {
		return response(400, err, "", h);
	}
};
module.exports = { getAllUsers, getUser, deleteUser };
