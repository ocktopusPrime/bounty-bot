exports.getRole = (cache, role) => {
	const foundRole = cache.find((r) => r.name === role);
	return foundRole;
};
