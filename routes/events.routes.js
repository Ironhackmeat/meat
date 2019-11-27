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

router.get('/email/:id',  (req, res) => {

	Event.findById(req.params.id)
	.populate("host")
	.then(theEvent => {
		let token = "popino"

		mailer.sendMail({
					from: '"M\'EAT 👻" request@meat-app.com',
					to: `${theEvent.host.email}`, //El email del Host que va a celebrar el event
					subject: "New request for your event!!!",
					text: `http://localhost:3000/events/confirm?host=${theEvent._id}&guestID=${req.user._id}`,
					html: `<b>http://localhost:3000/events/confirm?host=${theEvent._id}&guestID=${req.user._id}</b>`
				})
			})
		})


router.get(`/confirm`, (req, res) => {
	console.log('I did enter bitches')
	let eventId = req.query.host

// findOneAndUpdate(conditions, update, options, (error, doc) => {
	console.log(eventId)
	Event.findOne({_id: eventId})
		.then( elm => {
			let newArr = elm.guests

			newArr.includes(req.user._id) ? null : newArr.push(req.user._id)
			console.log(newArr)
			Event.update({_id: eventId} , {guests: newArr})
			.then(info => {
				console.log(info)

				Event.findById(eventId).then(e => console.log(e))
			})
			.catch(err => console.log(err))			

			})

	.catch(err => console.log(err));
	
})
	

	// router.get('/route', (req, res, next) => {

	// 	if(event.guests.includes(req.user)) => show message ("already accepted")
	// 	else push to an array in mongoose


	// });

	/*

comprobar si el user esta ya en el evento (user, events.guest)
				si está redirigir a OK
				si no
						guardar en evento, el guest.
				
*/


	



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

	




module.exports = router;