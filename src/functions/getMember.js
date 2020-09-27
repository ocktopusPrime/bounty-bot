exports.getMember = (cache, id) => {
	const member = cache.get(id);
	return member;
};
