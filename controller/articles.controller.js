const {
	createNewArticle,
	getAllArticlesData,
	getArticleByArticleId,
	deleteArticleData,
} = require("../service/articles.service");
const { getUserById } = require("../service/users.service");

const { response } = require("../utils/response.utils");

const createArticle = async (request, h) => {
	try {
		const articleData = request.payload;
		await getUserById(articleData.uid);
		const article = await createNewArticle(articleData);
		return response(201, "Article created", article, h);
	} catch (err) {
		return response(400, "Can't post article : " + err, "", h);
	}
};

const getAllArticles = async (request, h) => {
	const articles = await getAllArticlesData();
	return response(200, "", articles, h);
};

const getArticle = async (request, h) => {
	try {
		const { aid } = request.params;
		const article = await getArticleByArticleId(aid);
		return article;
	} catch (err) {
		return response(400, err, "", h);
	}
};

const deleteArticle = async (request, h) => {
	try {
		const { uid, aid } = request.params;
		await deleteArticleData(uid, aid);
		return response(200, "Article deleted", "", h);
	} catch (err) {
		return response(400, "Can't delete " + err, "", h);
	}
};

module.exports = {
	createArticle,
	getAllArticles,
	deleteArticle,
	getArticle,
};
