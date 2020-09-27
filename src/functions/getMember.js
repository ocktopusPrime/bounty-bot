exports.getMember = (cache, id) => {
	const foundMember = cache.get(id);
	if (foundMember) return foundMember;
	return undefined;
};
