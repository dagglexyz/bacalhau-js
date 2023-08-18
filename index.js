const { submit, list } = require("./src/sdk/api");
const {
	initializeSDK,
	getClientPublicKey,
	signForClient,
	getClientId,
} = require("./src/sdk/config");

module.exports = {
	submit,
	list,
	initializeSDK,
	getClientPublicKey,
	getClientId,
	signForClient,
};
