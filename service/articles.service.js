const { Connection } = require("../config/db");

const createNewArticle = async (articleData) => {
	const { article, uid } = articleData;
	const newArticle = await new Promise((resolve, reject) => {
		Connection.query(
			"INSERT INTO articles (article, uid_fk) VALUES(?,?)",
			[article, uid],
			(err, results) => {
				if (err) throw Error(err.message);
				resolve(results);
			}
		);
	});
	return newArticle;
};

const getAllArticlesData = async () => {
	const articles = await new Promise((resolve, reject) => {
		Connection.query("SELECT * FROM articles", (err, results) => {
			if (err) throw Error(err.message);
			resolve(results);
		});
	});

	return articles;
};

const getArticleByArticleId = async (aid) => {
	const article = await new Promise((resolve, reject) => {
		Connection.query(
			"SELECT * FROM articles WHERE aid = ?",
			[aid],
			(err, results) => {
				if (err) throw Error(err.message);
				if (!results[0]) reject("Article not found");
				resolve(results[0]);
			}
		);
	});
	return article;
};

const getArticleByUserId = async (uid) => {
	const article = await new Promise((resolve, reject) => {
		Connection.query(
			"SELECT * FROM articles WHERE uid_fk = ?",
			[uid],
			(err, results) => {
				if (err) throw Error(err.message);
				if (!results[0]) reject("Article not found");
				resolve(results[0]);
			}
		);
	});
	return article;
};

const deleteArticleData = async (uid, aid) => {
	await getArticleByUserId(uid);
	await getArticleByArticleId(aid);

	const articleDeleted = await new Promise((resolve, reject) => {
		Connection.query(
			"DELETE FROM articles WHERE uid_fk = ? AND aid = ?",
			[uid, aid],
			(err, results) => {
				if (err) throw Error(err.message);
				if (!results.affectedRows) reject("Failed to delete article");
				resolve(results);
			}
		);
	});

	return articleDeleted;
};

const deletedArticleByUserId = async (uid) => {
	const articleDeleted = await new Promise((resolve, reject) => {
		Connection.query(
			"DELETE FROM articles WHERE uid_fk = ? ",
			[uid],
			(err, results) => {
				if (err) throw Error(err.message);
				resolve(results);
			}
		);
	});
	return articleDeleted;
};

module.exports = {
	createNewArticle,
	getAllArticlesData,
	getArticleByArticleId,
	getArticleByUserId,
	deleteArticleData,
	deletedArticleByUserId,
};
