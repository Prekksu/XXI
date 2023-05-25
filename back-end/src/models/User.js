module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("Users", {
		name: Sequelize.STRING,
		address: Sequelize.STRING,
		email: Sequelize.STRING,
		password: Sequelize.STRING,
		avatar_url: Sequelize.STRING,
		avatar_blob: {
			type: Sequelize.BLOB("long"),
		},
	});
	return User;
};
