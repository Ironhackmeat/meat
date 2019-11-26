const express = require('express');
const router  = express.Router();

const Event = require('../models/Event.model');




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


router.post('/create', (req, res) => {

	// const newEventsInputs = document.querySelectorAll('#form-container input')


// const glutenfree = req.body.specs.glutenfree

// const specs = {glutenfree, dairyfree, veg, vegan, shellfish, nuts} = req.body
	
	const { name, description, type, glutenfree, dairyfree, veg, vegan, shellfish, nuts, date, time, address, forks } = req.body

Event.create({ name, description, type, specs: {glutenfree, dairyfree, veg, vegan, shellfish, nuts}, date, time, address, forks })
		.then(x => {
			res.redirect('/events/show')
			console.log(req.body)
		}
			)
		.catch(err => console.log(err))

})





// POST => Crear un nuevo evento y guardarlo en la base de datos

// router.post('/', (req, res, next) => {

// 	const newPlace = new Place({
// 		name: req.body.name,
// 		type: req.body.type,
// 		location
// 	});

// 	newPlace.save((error) => {
// 		if (error) {
// 			next(error);
// 		} else {
// 			res.redirect('/places');
// 		}
//   })
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



// router.get('/api', (req, res, next) => {
// 	Place.find()
// 		.then(allPlacesFromDB => res.status(200).json({ places: allPlacesFromDB }))
// 		.catch(err => next(err))
// });

// router.get('/api/:id', (req, res, next) => {
// 	let placeId = req.params.id;
// 	Place.findOne({ _id: placeId }, (error, onePlaceFromDB) => {
// 		if (error) {
// 			next(error)
// 		} else {
// 			res.status(200).json({ place: onePlaceFromDB });
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

module.exports = router;




