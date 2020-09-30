exports.getRole = (cache, role) => {
	const foundRole = cache.find((r) => r.name === role);
	if (foundRole) return foundRole;
	return undefined;
};
