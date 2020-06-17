const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const request = require('request');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @Route GET /api/profile/me
// @Desc Get current users profile
// @Acces Private

router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id }).populate(
			'user',
			['name', 'avatar'],
		);

		if (!profile) {
			return res.status(400).json({ msg: 'There is no profile for this user' });
		}
		console.log(profile);

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @Route POST /api/profile
// @Desc Create or update user profile
// @Acces Private

router.post(
	'/',
	[
		auth,
		[
			check('status', 'Status is required')
				.not()
				.isEmpty(),
			check('skills', 'Skills is required')
				.not()
				.isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			company,
			website,
			location,
			bio,
			status,
			githubusername,
			skills,
			youtube,
			facebook,
			twitter,
			instagram,
			whatsapp,
			school,
			carrer,
		} = req.body;

		// Build profile object
		const profileFields = {};
		profileFields.user = req.user.id;
		if (company) profileFields.company = company;
		if (website) profileFields.website = website;
		if (location) profileFields.location = location;
		if (bio) profileFields.bio = bio;
		if (status) profileFields.status = status;
		if (githubusername) profileFields.githubusername = githubusername;
		if (school) profileFields.school = school;
		if (carrer) profileFields.carrer = carrer;
		if (skills) {
			profileFields.skills = skills.split(',').map((skill) => skill.trim());
		}

		// Build social object
		profileFields.social = {};

		if (youtube) profileFields.social.youtube = youtube;
		if (facebook) profileFields.social.facebook = facebook;
		if (twitter) profileFields.social.twitter = twitter;
		if (instagram) profileFields.social.instagram = instagram;
		if (whatsapp) profileFields.social.whatsapp = whatsapp;

		try {
			let profile = await Profile.findOne({ user: req.user.id });

			if (profile) {
				profile = await Profile.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: profileFields },
					{ new: true },
				);
				return res.json(profile);
			}

			profile = new Profile(profileFields);

			await profile.save();
			res.json(profile);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	},
);

// @Route GET /api/profile/me
// @Desc Get all profiles
// @Acces Public

router.get('/', async (req, res) => {
	try {
		const profiles = await Profile.find().populate('user', ['name', 'avatar']);
		res.json(profiles);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @Route GET /api/profile/user/:user_id
// @Desc Get profile by userID
// @Acces Public

router.get('/user/:user_id', async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.params.user_id,
		}).populate('user', ['name', 'avatar']);

		if (!profile) return res.status(400).json({ msg: 'Profile not found' });

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		if (err.kind == 'ObjectId') {
			return res.status(400).json({ msg: 'Profile not found' });
		}
		res.status(500).send('Server Error');
	}
});

// @Route DELETE /api/profile
// @Desc  Delete profile, user & posts
// @Acces Private

router.delete('/', auth, async (req, res) => {
	try {
		// Remove profile
		await Profile.findOneAndRemove({ user: req.user.id });
		// Remove user
		await User.findOneAndRemove({ _id: req.user.id });
		res.json({ msg: 'User deleted' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @Route PUT /api/profile/experience
// @Desc  Add profile expirience
// @Acces Private
router.put(
	'/experience',
	[
		auth,
		[
			check('title', 'Title is required')
				.not()
				.isEmpty(),
			check('company', 'Company is required')
				.not()
				.isEmpty(),
			check('from', 'From is required')
				.not()
				.isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, company, location, from, to, current, description } = req.body;

		const newExp = {
			title,
			company,
			location,
			from,
			to,
			current,
			description,
		};

		try {
			const profile = await Profile.findOne({ user: req.user.id });

			profile.experience.unshift(newExp);

			await profile.save();

			res.json(profile);
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server Error');
		}
	},
);

// @Route DELETE /api/profile/experience/:exp_id
// @Desc  Delete experience from profile
// @Acces Private

router.delete('/experience/:exp_id', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });

		// Get remove index
		const removeIndex = profile.experience
			.map((item) => item.id)
			.indexOf(req.params.exp_id);

		profile.experience.splice(removeIndex, 1);

		await profile.save();

		res.json(profile);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

// @Route PUT /api/profile/services
// @Desc  Add profile services
// @Acces Private
router.put(
	'/services',
	[
		auth,
		[
			check('title', 'Title is required')
				.not()
				.isEmpty(),
			check('description', 'Description is required')
				.not()
				.isEmpty(),
			check('available', 'Field is required')
				.not()
				.isEmpty(),
			check('price', 'Price is required')
				.not()
				.isEmpty()
				.matches(/\d/)
				.withMessage('must contain a number'),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, description, available, price } = req.body;

		const newService = {
			title,
			description,
			available,
			price,
		};

		try {
			const profile = await Profile.findOne({ user: req.user.id });

			profile.services.unshift(newService);

			await profile.save();

			res.json(profile);
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server Error');
		}
	},
);

// @Route DELETE /api/profile/services/:service_id
// @Desc  Delete services from profile
// @Acces Private

router.delete('/services/:service_id', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });

		// Get remove index
		const removeIndex = profile.services
			.map((item) => item.id)
			.indexOf(req.params.service_id);

		profile.services.splice(removeIndex, 1);

		await profile.save();

		res.json(profile);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

// @Route GET /api/profile/github/:usernmae
// @Desc  Get repos from GitHub
// @Acces Public

router.get('/github/:username', auth, async (req, res) => {
	try {
		const options = {
			uri: `https://api.github.com/users/${
				req.params.username
			}/repos?per_page=5&sort=created:asc&client_id=${config.get(
				'githubClientId',
			)}&client_secret=${config.get('githubClientSecret')}`,
			method: 'GET',
			headers: { 'user-agent': 'node.js' },
		};

		request(options, (error, response, body) => {
			if (error) console.error(error);

			if (response.statusCode !== 200) {
				res.statusCode(400).json({ msg: 'No GitHub profile found' });
			}

			res.json(JSON.parse(body));
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
