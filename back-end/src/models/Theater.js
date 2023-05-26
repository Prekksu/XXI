module.exports = (sequelize, Sequelize) => {
	const Theater = sequelize.define("Theaters", {
		Theaters: Sequelize.STRING,
	});
	return Theater;
};
