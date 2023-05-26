const db = require("../models");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");
const moment = require("moment");
const sharp = require("sharp");
const url = process.env.url;
const url_image = process.env.URL_IMAGE;

const userController = {
	register: async (req, res) => {
		try {
			const { phoneNumber, name, email, address, password } = req.body;
			const hashPassword = await bcrypt.hash(password, 10);

			await db.User.create({
				phoneNumber,
				name,
				email,
				address,
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
			const { phoneMail, password } = req.query;
			const user = await db.User.findOne({
				where: {
					[Op.or]: [
						{
							phoneNumber: phoneMail,
						},
						{
							email: phoneMail,
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
					message: "login gagal",
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
	forgetPass: async (req, res) => {
		try {
			const { phoneMail } = req.query;
			const user = await db.User.findOne({
				where: {
					phoneNumber: phoneMail,
				},
			});
			if (user.dataValues) {
				await db.Token.update(
					{
						valid: false,
					},
					{
						where: {
							payload: JSON.stringify({ id: user.dataValues.id }),
							status: "FORGOT-PASSWORD",
						},
					}
				);
				const payload = {
					id: user.dataValues.id,
				};
				const generateToken = nanoid();
				const token = await db.Token.create({
					expired: moment().add(1, "d").format(),
					token: generateToken,
					payload: JSON.stringify(payload),
					status: "FORGOT-PASSWORD",
				});
				await mailer({
					subject: "hello",
					to: "",
					text: url + generateToken,
				});
				return res.send({
					message: "Please check your email",
				});
			}
		} catch (err) {
			res.status(500).send({
				message: err.message,
			});
		}
	},
	changePass: async (req, res) => {
		try {
			const { token } = req.query;
			const { password } = req.body;
			const { id } = req.user;
			const hashPassword = await bcrypt.hash(password, 10);
			await db.User.update(
				{
					password: hashPassword,
				},
				{
					where: {
						id,
					},
				}
			);
			await db.Token.update(
				{
					valid: false,
				},
				{
					where: {
						token,
					},
				}
			);
			await db.User.findOne({
				where: {
					id,
				},
			}).then((result) => {
				res.send(result);
			});
		} catch (err) {
			es.status(500).send({
				message: err.message,
			});
		}
	},
	uploadAvatar: async (req, res) => {
		const { filename } = req.file;
		await db.User.update(
			{
				avatar_url: url_image + filename,
			},
			{
				where: {
					id: req.params.id,
				},
			}
		);
		await db.User.findOne({
			where: {
				id: req.params.id,
			},
		}).then((result) => res.send(result));
	},
	uploadAvatar2: async (req, res) => {
		const buffer = await sharp(req.file.buffer)
			.resize(250, 250)
			.png()
			.toBuffer();

		var fulUrl =
			req.protocol +
			"://" +
			req.get("host") +
			"/Users/image/render/" +
			req.params.id;

		await db.User.update(
			{
				avatar_url: fulUrl,
				avatar_blob: buffer,
			},
			{
				where: {
					id: req.params.id,
				},
			}
		);
		res.send("uploaded");
	},
	renderAvatar: async (req, res) => {
		try {
			await db.User.findOne({
				where: {
					id: req.params.id,
				},
			}).then((result) => {
				res.set("Content-type", "image/png");
				res.send(result.dataValues.avatar_blob);
			});
		} catch (err) {
			return res.send({
				message: err.message,
			});
		}
	},
};

module.exports = userController;
