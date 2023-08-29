class JobSpecDocker {
	constructor({
		entrypoint = [],
		environment_variables = [],
		image,
		WorkingDirectory,
	} = {}) {
		this.entrypoint = entrypoint;
		this.environment_variables = environment_variables;
		this.image = image;
		this.WorkingDirectory = WorkingDirectory;
	}

	get toJson() {
		return {
			entrypoint: this.entrypoint,
			environment_variables: this.environment_variables,
			image: this.image,
			WorkingDirectory: this.WorkingDirectory,
		};
	}
}

module.exports = { JobSpecDocker };
