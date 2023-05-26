module.exports = (sequelize, Sequelize) => {
	const City = sequelize.define("Cities", {
		cities: Sequelize.STRING,
	});
	return City;
};
