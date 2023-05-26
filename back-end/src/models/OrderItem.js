module.exports = (sequelize, Sequelize) => {
	const OrderItem = sequelize.define("OrderItems", {
		OrderItems: Sequelize.STRING,
	});
	return OrderItem;
};
