const { submit } = require("./src/sdk/api");
const {
	initializeSDK,
	getClientPublicKey,
	signForClient,
	getClientId,
} = require("./src/sdk/config");

module.exports = {
	submit,
	initializeSDK,
	getClientPublicKey,
	getClientId,
	signForClient,
};
