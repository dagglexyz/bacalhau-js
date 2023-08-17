const { getClientId } = require("./config");
const { submit } = require("./api");

let data = {
	APIVersion: "V1beta1",
	ClientID: getClientId(),
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

submit(data);
