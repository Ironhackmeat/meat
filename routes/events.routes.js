const express = require('express');
const router = express.Router();
const Event = require('../models/Event.model');
const User = require('../models/User.model');
const mailer = require('../configs/nodemailer.config')
const {
	ensureLoggedIn
} = require('connect-ensure-login');



router.get('/search', (req, res) => res.render('events/search'))

router.get('/show', (req, res) => res.render('events/show'))

router.get('/create', ensureLoggedIn("/auth/login"), (req, res) => res.render('events/create'))



router.get('/api', (req, res, next) => {
	Event.find()
		.then(allEventsFromDB => res.status(200).json({
			events: allEventsFromDB
		}))
		.catch(err => next(err))
});

router.get('/api/:id', (req, res, next) => {
	let eventId = req.params.id;
	Event.findOne({
		_id: eventId
	}, (error, oneEventFromDB) => {
		if (error) {
			next(error)
		} else {
			res.status(200).json({
				event: oneEventFromDB
			});
		}
	});
});



// const newEventsInputs = document.querySelectorAll('#form-container input')

router.get("/:id", ensureLoggedIn("/auth/login"), (req, res) => {
	Event.findById(req.params.id)
		.populate("host")
		.then(theEvent => {
			res.render("events/details", {
				event: theEvent
			});
		})
		.catch(err => console.log(err));
});

router.post("/create", (req, res) => {
	const {
		name,
		description,
		type,
		glutenfree,
		dairyfree,
		veg,
		vegan,
		shellfish,
		nuts,
		date,
		time,
		address,
		forks
	} = req.body;

	const host = req.user

	Event.create({
			host,
			name,
			description,
			type,
			specs: {
				glutenfree,
				dairyfree,
				veg,
				vegan,
				shellfish,
				nuts
			},
			date,
			time,
			address,
			forks
		})
		.then(x => {
			res.redirect("/events/show");
			console.log(req.body);
		})
		.catch(err => console.log(err));
});


// // DELETE => remove the restaurant from the DB
// router.get('/:place_id/delete', (req, res, next) => {
// 	Place.remove({ _id: req.params.place_id }, function (error, place) {
// 		if (error) {
// 			next(error);
// 		} else {
// 			res.redirect('/places');
// 		}
// 	});
// });

	


// router.post('/details', (req, res, next) => {

// mailer.sendMail({
// 	from: '"M\'EAT 👻" request@meat-app.com',
// 	to: 'teikvk@gmail.com', //El email del Host que va a celebrar el event
//   subject: "New request for your event!!!",
//   text: `Hola`,
// 	html: `<p>Hola</p>`
// 	// text: `http://localhost:3000/auth/confirm/${confirmationCode}`,
// 	// html: `<b>http://localhost:3000/auth/confirm/${confirmationCode}</b>`
// })
// .then ( x => res.redirect("/events/show"))
// // .then(info => res.render('email-sent', { email, subject, message, info }))
// .catch(error => console.log(error));

// })


module.exports = router;