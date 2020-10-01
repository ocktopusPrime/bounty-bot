exports.canPlay = (cache, hunterRole) => {
	if (cache.find((r) => r.name === hunterRole)) return true;
	return false;
};
