const db = require("../models");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");
const moment = require("moment");
const sharp = require("sharp");
const private_key = process.env.private_key;
const url = process.env.url;
const url_image = process.env.URL_IMAGE;

const userController = {
	register: async (req, res) => {
		try {
			const { name, address, email, password } = req.body;
			const hashPassword = await bcrypt.hash(password, 10);

			await db.User.create({
				name,
				address,
				email,
				password: hashPassword,
			});
			return await db.User.findAll().then((result) => {
				res.send(result);
			});
		} catch (err) {
			return res.status(500).send({
				message: err.message,
			});
		}
	},
	login: async (req, res) => {
		try {
			const { emna, password } = req.body;
			const user = await db.User.findOne({
				where: {
					[Op.or]: [
						{
							email: emna,
						},
						{
							name: emna,
						},
					],
				},
			});
			if (user) {
				const match = await bcrypt.compare(
					password,
					user.dataValues.password
				);
				if (match) {
					const payload = {
						id: user.dataValues.id,
					};
					const token = await db.Token.create({
						expired: moment().add(1, "days").format(),
						token: nanoid(),
						payload: JSON.stringify(payload),
						valid: true,
					});
					return res.send({
						message: "login berhasil",
						value: user,
						token: token.dataValues.token,
					});
				} else {
					throw new Error("login gagal");
				}
			} else {
				return res.send({
					message: err.message,
				});
			}
		} catch (err) {
			return res.status(500).send({
				message: err.message,
			});
		}
	},
	getByToken: async (req, res, next) => {
		try {
			let token = req.headers.authorization;
			token = token.split(" ")[1];
			let p = await db.Token.findOne({
				where: {
					[Op.and]: [
						{
							token,
						},
						{
							expired: {
								[Op.gt]: moment(
									"00:00:00",
									"hh:mm:ss"
								).format(),
								[Op.lte]: moment().add(1, "d").format(),
							},
						},
					],
				},
			});
			if (!p) {
				throw new Error("token has expired");
			}
			user = await db.User.findOne({
				where: {
					id: JSON.parse(p?.dataValues?.payload).id,
				},
			});
			delete user.dataValues.password;
			req.user = user;
			next();
		} catch (error) {
			res.status(500).send({
				message: err.message,
			});
		}
	},
	getUserByToken: async (req, res) => {
		res.send(req.user);
	},
};

module.exports = userController;
