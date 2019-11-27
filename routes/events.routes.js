const express = require('express');
const router  = express.Router();
const {ensureLoggedIn} = require('connect-ensure-login');

const Event = require('../models/Event.model');
const User = require('../models/User.model');
const mailer = require('../configs/nodemailer.config')





// router.get('/', (req, res, next) => {
// 	Event.find({}, (error, eventsFromDB) => {
// 		if (error) {
// 			next(error);
// 		} else {
// 			res.render('event/index', { events: eventsFromDB });
// 		}
// 	});
// });

router.get('/search', (req, res, next) => res.render('events/search'))

router.get('/show', (req, res, next) => res.render('events/show') )
router.get('/create', (req, res, next) => res.render('events/create') )



router.get('/api', (req, res, next) => {
	Event.find()
		.then(allEventsFromDB => res.status(200).json({ events: allEventsFromDB }))
		.catch(err => next(err))
});

router.get('/api/:id', (req, res, next) => {
	let eventId = req.params.id;
	Event.findOne({ _id: eventId }, (error, oneEventFromDB) => {
		if (error) {
			next(error)
		} else {
			res.status(200).json({ event: oneEventFromDB });
		}
	});
});


router.post("/create", ensureLoggedIn("/login"), (req, res) => {
  // const newEventsInputs = document.querySelectorAll('#form-container input')

  router.get("/:id", (req, res) => {
    Event.findById(req.params.id)
      .populate("User")
      .then(theEvent => {
        res.render("events/details", { event: theEvent });
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

    Event.create({
      name,
      description,
      type,
      specs: { glutenfree, dairyfree, veg, vegan, shellfish, nuts },
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

  // function getToken() {
  // 	const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // 	let token = '';
  // 	for (let i = 0; i < 25; i++) {
  // 			token += characters[Math.floor(Math.random() * characters.length )];
  // 	}
  // 	return token
  // }

  // const confirmationCode = getToken()

  // document.getElementById("sendMail").addEventListener(click, function () {

  // mailer.sendMail({
  // 	from: '"M\'EAT 👻" request@meat-app.com',
  // 	to: User.email, //El email del Host que va a celebrar el event
  // 	subject: "New request for your event!!!",
  // 	text: `http://localhost:3000/auth/confirm/${confirmationCode}`,
  // 	html: `<b>http://localhost:3000/auth/confirm/${confirmationCode}</b>`
  // })
  // .then ( x => res.redirect("/events/show"))
  // // .then(info => res.render('email-sent', { email, subject, message, info }))
  // .catch(error => console.log(error));

  // })

  // // GET => Editamos los places

  // router.get('/:place_id/update', (req, res, next) => {
  // 	Place.findById(req.params.place_id, (error, place) => {
  // 		if (error) {
  // 			next(error);
  // 		} else {
  // 			res.render('places/update', { place });
  // 		}
  // 	});
  // });

  // // POST => save updates in the database
  // router.post('/:place_id', (req, res, next) => {
  // 	Place.findById(req.params.place_id, (error, place) => {
  // 		if (error) {
  // 			next(error);
  // 		} else {
  // 			place.name = req.body.name;
  // 			place.type = req.body.type;
  // 			place.save(error => {
  // 				if (error) {
  // 					next(error);
  // 				} else {
  // 					res.redirect(`/places`);
  // 				}
  // 			});
  // 		}
  // 	});
  // });

  // // router.get('/:place_id/update', (req, res) => {
  // //   const place = req.query.place
  // //   Place.findById(place)
  // //     .then(thePlace => res.render('places/update', thePlace))
  // //     .catch(err => console.log('error!!', err))
  // // })

  // // router.post('/:place_id', (req, res) => {
  // //   const { name, type, location } = req.body
  // //   const place = req.query.place

  // //   Place.findByIdAndUpdate(place, { name, type, location })
  // //     .then(res.redirect('/places'))
  // //     .catch(err => console.log('error!!', err))

  // // })

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

  // // GET => get the details of one restaurant
  // router.get('/:place_id', (req, res, next) => {
  // 	Place.findById(req.params.place_id, (error, place) => {
  // 		if (error) {
  // 			next(error);
  // 		} else {
  // 			res.render('places/show', { place: place });
  // 		}
  // 	});
  // });
});

module.exports = router;




