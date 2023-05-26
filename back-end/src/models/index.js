"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 &&
			file !== basename &&
			file.slice(-3) === ".js" &&
			file.indexOf(".test.js") === -1
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		// console.log(model);

		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Token = require("./Token")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);

db.Movie = require("./Movie")(sequelize, Sequelize);
db.City = require("./City")(sequelize, Sequelize);
db.Theater = require("./Theater")(sequelize, Sequelize);
db.Schedule = require("./Schedule")(sequelize, Sequelize);
db.Ticket = require("./Ticket")(sequelize, Sequelize);
db.OrderItem = require("./OrderItem")(sequelize, Sequelize);
db.Order = require("./Order")(sequelize, Sequelize);

db.Theater.belongsTo(db.City, {
	foreignKey: "cityId",
});

db.Schedule.belongsTo(db.City, {
	foreignKey: "theaterId",
});

db.Schedule.belongsTo(db.Movie, {
	foreignKey: "movieId",
});

db.Ticket.belongsTo(db.Schedule, {
	foreignKey: "scheduleId",
});

db.OrderItem.belongsTo(db.Order, {
	foreignKey: "orderId",
});

db.Ticket.hasOne(db.OrderItem, {
	foreignKey: "tiketId",
});

db.Order.belongsTo(db.User, {
	foreignKey: "userId",
});

module.exports = db;
