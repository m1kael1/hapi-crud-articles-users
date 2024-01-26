const Joi = require("joi");
const {
	deleteUser,
	getUser,
	getAllUsers,
} = require("../controller/users.controller");

const usersRoutes = [
	{
		method: "GET",
		path: "/users",
		handler: getAllUsers,
	},
	{
		method: "GET",
		path: "/users/{uid}",
		handler: getUser,
		options: {
			validate: {
				params: Joi.object({
					uid: Joi.number().integer(),
				}),
			},
		},
	},
	{
		method: "DELETE",
		path: "/users/{uid}",
		handler: deleteUser,
		options: {
			validate: {
				params: Joi.object({
					uid: Joi.number().integer(),
				}),
			},
		},
	},
];
module.exports = { usersRoutes };
