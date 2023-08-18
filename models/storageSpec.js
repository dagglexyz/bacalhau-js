class StorageSpec {
	constructor({
		cid,
		metadata = {},
		name,
		repo,
		s3,
		source_path,
		storage_source,
		url,
		path,
	} = {}) {
		this.cid = cid;
		this.metadata = metadata;
		this.name = name;
		this.repo = repo;
		this.s3 = s3;
		this.source_path = source_path;
		this.storage_source = storage_source;
		this.url = url;
		this.path = path;
	}

	get toJson() {
		return {
			cid: this.cid,
			metadata: this.metadata,
			name: this.name,
			repo: this.repo,
			s3: this.s3,
			source_path: this.source_path,
			storage_source: this.storage_source,
			url: this.url,
			path: this.path,
		};
	}
}

module.exports = { StorageSpec };
