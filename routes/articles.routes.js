const Joi = require("joi");
const {
	createArticle,
	getAllArticles,
	deleteArticle,
	getArticle,
} = require("../controller/articles.controller");

const articlesRoutes = [
	{
		method: "POST",
		path: "/articles",
		handler: createArticle,
		options: {
			validate: {
				payload: Joi.object({
					uid: Joi.number().integer(),
					article: Joi.string().min(1).required(),
				}),
			},
		},
	},
	{
		method: "GET",
		path: "/articles",
		handler: getAllArticles,
	},
	{
		method: "GET",
		path: "/articles/{aid}",
		handler: getArticle,
		options: {
			validate: {
				params: Joi.object({
					aid: Joi.number().integer(),
				}),
			},
		},
	},
	{
		method: "DELETE",
		path: "/articles/{uid}/{aid}",
		handler: deleteArticle,
		options: {
			validate: {
				params: Joi.object({
					uid: Joi.number().integer(),
					aid: Joi.number().integer(),
				}),
			},
		},
	},
];

module.exports = { articlesRoutes };
