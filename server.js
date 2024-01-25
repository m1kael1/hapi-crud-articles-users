"use strict";

const Hapi = require("@hapi/hapi");
const { authRoutes } = require("./routes/auth.routes");
const { articlesRoutes } = require("./routes/articles.routes");
const { usersRoutes } = require("./routes/users.routes");

const init = async () => {
	const server = Hapi.server({
		port: 8000,
		host: "localhost",
	});

	server.route(authRoutes);
	server.route(usersRoutes);
	server.route(articlesRoutes);

	await server.start();
	console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
	console.log(err);
	process.exit(1);
});

init();
