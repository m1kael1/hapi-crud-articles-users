const Joi = require("joi");
const { createUser } = require("../controller/auth.controller");

const authRoutes = [
	{
		method: "GET",
		path: "/",
		handler: (reques, h) => {
			return "Api ready";
		},
	},
	{
		method: "POST",
		path: "/users",
		handler: createUser,
		options: {
			validate: {
				payload: Joi.object({
					username: Joi.string().alphanum().min(3).max(30).required(),
					email: Joi.string().email(),
					password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}/),
				}),
			},
		},
	},
];
module.exports = { authRoutes };
