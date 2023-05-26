module.exports = (sequelize, Sequelize) => {
	const Ticket = sequelize.define("Tickets", {
		Tickets: Sequelize.STRING,
	});
	return Ticket;
};
