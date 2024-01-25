const response = (code, message, data, h) => {
	return h
		.response(message && data ? { message, data } : data || message)
		.code(code);
};

module.exports = { response };
