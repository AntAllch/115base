const kebab = function (string) {
	return String(string)
		.normalize('NFKD').replace(/[\u0300-\u036F]/g, '')
		.replace(/[?!&.’]/g, '')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();
};

module.exports = kebab;
