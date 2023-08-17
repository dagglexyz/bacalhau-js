const { default: axios } = require("axios");

class JobApi {
	constructor(config) {
		this.config = config;
	}

	async submit(body) {
		const response = await axios.post(
			this.config.base_url + "/requester/submit",
			body
		);

		return response;
	}
}

module.exports = { JobApi };
