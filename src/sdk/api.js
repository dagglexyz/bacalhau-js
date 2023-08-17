const { JobApi } = require("../api/job");
const {
	getClientPublicKey,
	signForClient,
	initializeSDK,
} = require("./config");

const config = initializeSDK();
const jobApi = new JobApi(config);

async function submit(data) {
	try {
		const clientPublicKey = getClientPublicKey(),
			signature = signForClient(data);

		let body = {
			payload: data,
			signature: signature,
			client_public_key: clientPublicKey,
		};

		const response = await jobApi.submit(body);
		console.log(response);

		if (response.status === 200) {
			console.log(response.data);
		} else {
			console.log("error: " + response.data);
			console.log("response.statusCode: " + response.statusCode);
			console.log("response.statusText: " + response.statusText);
		}
	} catch (error) {
		if (error.response) {
			console.log(error.response.data);
		} else {
			console.log(error);
		}
	}
}

module.exports = { submit };
