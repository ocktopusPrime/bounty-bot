const { hunterRole, wantedRole } = require('../config.json');

exports.verifyServerRoles = (guild) => {
	const hasHunterRole = !!guild.roles.cache.find((role) => role.name === hunterRole);
	const hasWantedRole = !!guild.roles.cache.find((role) => role.name === wantedRole);

	if (!hasHunterRole) {
		guild.roles
			.create({
				data: {
					name: 'Bounty Hunter',
					color: 'RED',
				},
				reason: 'Hunter Role',
			})
			.then(console.log)
			.catch(console.error);
	}

	if (!hasWantedRole) {
		guild.roles
			.create({
				data: {
					name: 'WANTED FOR BOUNTY',
					color: 'GOLD',
				},
				reason: 'Wanted role',
			})
			.then(console.log)
			.catch(console.error);
	}
};
