const { default: axios } = require("axios");
const { getClientPublicKey, signForClient, getClientId } = require("./config");

let data = {
	APIVersion: "V1beta1",
	ClientID: "TBD",
	Spec: {
		Deal: {
			Concurrency: 1,
			Confidence: 0,
			MinBids: 0,
		},
		DoNotTrack: false,
		Docker: {
			Entrypoint: ["echo", "Hello World!"],
			Image: "ubuntu",
		},
		Engine: "Docker",
		Language: {},
		PublisherSpec: { Type: "Estuary" },
		Timeout: 1800,
		Verifier: "Noop",
		Outputs: [{ Name: "outputs", StorageSource: "IPFS", path: "/outputs" }],
	},
};
data.ClientID = getClientId();
let clientPublicKey = getClientPublicKey();
const signature = signForClient(data);

let body = {
	payload: data,
	signature: signature,
	client_public_key: clientPublicKey,
};
const url = "http://bootstrap.production.bacalhau.org:1234/requester/submit";

async function test() {
	try {
		const response = await axios.post(url, body);
		if (response.status === 200) {
			console.log(response.data);
		} else {
			// console.log("error: " + response.data);
			// console.log("response.statusCode: " + response.statusCode);
			// console.log("response.statusText: " + response.statusText);
		}
	} catch (error) {
		if (error.response) {
			console.log(error.response.data);
		} else {
			console.log(error);
		}
	}
}

test();
