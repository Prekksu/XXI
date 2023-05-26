module.exports = (sequelize, Sequelize) => {
	const Schedule = sequelize.define("Schedules", {
		Schedules: Sequelize.STRING,
	});
	return Schedule;
};
