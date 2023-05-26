module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("Users", {
		phoneNumber: Sequelize.STRING,
		name: Sequelize.STRING,
		email: Sequelize.STRING,
		address: Sequelize.STRING,
		password: Sequelize.STRING,
		avatar_url: Sequelize.STRING,
		avatar_blob: {
			type: Sequelize.BLOB("long"),
		},
	});
	return User;
};
