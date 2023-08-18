const { default: axios } = require("axios");

class JobApi {
	constructor(config) {
		this.config = config;
	}

	async submit(body) {
		return axios.post(this.config.base_url + "/requester/submit", body);
	}

	async list(body) {
		return axios.post(this.config.base_url + "/requester/list", body);
	}
}

module.exports = { JobApi };
