class StorageSpec {
	constructor({
		cid,
		metadata = {},
		name,
		repo,
		s3,
		StorageSource,
		storage_source,
		url,
		path,
	} = {}) {
		this.cid = cid;
		this.metadata = metadata;
		this.name = name;
		this.repo = repo;
		this.s3 = s3;
		this.StorageSource = StorageSource;
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
			StorageSource: this.StorageSource,
			storage_source: this.storage_source,
			url: this.url,
			path: this.path,
		};
	}
}

module.exports = { StorageSpec };
