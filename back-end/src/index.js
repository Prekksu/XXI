const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT;
const db = require("./models");
app.use(cors());
app.use(express.json());
const router = require("./routes");
// db.sequelize.sync({ alter: true });

app.use("/users", router.userRouter);
app.use("/avatar", express.static(`${__dirname}/public/avatar`));

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
