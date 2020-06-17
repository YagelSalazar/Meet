const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route POST api/users
// @desc Register user
// @access Public

router.post(
	'/',
	[
		check('name', 'Name is required')
			.not()
			.notEmpty(),
		check('email', 'Por favor igresa un email valido').isEmail(),
		check('password', 'La contraseña debe tener 8 caracteres o más').isLength({
			min: 8,
		}),
	],
	async (req, res) => {
		const msg = validationResult(req);
		if (!msg.isEmpty()) {
			return res.status(400).json({ errors: msg.array() });
		}

		const { name, email, password } = req.body;

		try {
			// See if user exists
			let user = await User.findOne({ email });

			if (user) {
				return res.status(400).json({
					errors: [{ msg: 'El correo que intentas usar ya esta registrado' }],
				});
			}
			// Get users gravatar
			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm',
			});
			// Encrypt password
			user = new User({
				name,
				email,
				avatar,
				password,
			});

			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			await user.save();

			// Return jsonwebtoken
			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: 360000 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				},
			);
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server error');
		}
	},
);

module.exports = router;
