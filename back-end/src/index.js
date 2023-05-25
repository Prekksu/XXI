const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
const db = require("./models");
// const router = require("./routes");
// db.sequelize.sync({ alter: true });

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
