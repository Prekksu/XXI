module.exports = (sequelize, Sequelize) => {
	const Movie = sequelize.define("Movies", {
		title: Sequelize.STRING,
		genre: Sequelize.STRING,
		duration: Sequelize.STRING,
		synopsis: Sequelize.STRING,
		producer: Sequelize.STRING,
		director: Sequelize.STRING,
		writer: Sequelize.STRING,
		cast: Sequelize.STRING,
		distributor: Sequelize.STRING,
	});
	return Movie;
};
