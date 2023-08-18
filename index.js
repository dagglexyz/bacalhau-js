const { submit, list, results } = require("./src/sdk/api");
const {
	initializeSDK,
	getClientPublicKey,
	signForClient,
	getClientId,
} = require("./src/sdk/config");

module.exports = {
	submit,
	list,
	results,
	initializeSDK,
	getClientPublicKey,
	getClientId,
	signForClient,
};
