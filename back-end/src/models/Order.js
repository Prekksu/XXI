module.exports = (sequelize, Sequelize) => {
	const Order = sequelize.define("Orders", {
		Orders: Sequelize.STRING,
	});
	return Order;
};
