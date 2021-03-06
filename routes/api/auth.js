const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route GET api/auth
// @desc Test route
// @access Public

router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (error) {
		res.status(500).send('Server error!');
	}
});

// @route POST api/auth
// @desc Authenticate user & get token
// @access Public

router.post(
	'/',
	[
		check('email', 'Ingresa un email valido').isEmail(),
		check('password', 'La contraseña es requerida').exists(),
	],
	async (req, res) => {
		const msg = validationResult(req);
		if (!msg.isEmpty()) {
			return res.status(400).json({ errors: msg.array() });
		}

		const { email, password } = req.body;

		try {
			// See if user exists
			let user = await User.findOne({ email });

			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'El usuario no esta registrado' }] });
			}

			// Veirfy that users and password matches
			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'Credenciales invalidas' }] });
			}

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
