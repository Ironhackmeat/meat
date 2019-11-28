

const express = require('express');
const router = express.Router();
const Event = require('../models/Event.model');
const User = require('../models/User.model');
const mailer = require('../configs/nodemailer.config')
const {
    ensureLoggedIn
} = require('connect-ensure-login');
// Check if we are using it
router.get('/search', (req, res) => res.render('events/search'))
router.get('/show', (req, res) => res.render('events/show'))
// Creat an event => Get the view. You can only creat an event if you are logged in
router.get('/create', ensureLoggedIn("/auth/login"), (req, res) => res.render('events/create'))
// Send the data to the DB 
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
// Send email to accept the request.
router.get('/email/:id', (req, res) => {
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
            .then(x => res.render("events/requested"))
            .catch(err => console.log(err))
        })
})
// We need to push the guest to the event and the event to the guest, checking if they have been alread pushed.
router.get(`/lala`, (req, res) => res.render("events/confirm"))
        
router.get(`/confirm`, (req, res) => {
    let eventId = req.query.host
    //Primera promesa, os la estudiais mamones. La guardas en una variable
    let firstFind =
    
    User.findOneAndUpdate({
            $and: [{
                _id: req.user._id
            }, {
                events: {
                    $nin: eventId
                }
            }]
        }, {
            $push: {
                events: eventId
            }
        })
        .then(userUpdated => console.log(userUpdated))
        .catch(err => console.log('seguro que la he cagao', err))
    // findOneAndUpdate(conditions, update, options, (error, doc) => {
    console.log(eventId)
    
    //Lo mismo. Las dos en un array, estudiad el promise all.
    let secondFind =
    Event.findOne({
            _id: eventId
        })
        .then(elm => {
            let newArr = elm.guests
            newArr.includes(req.user._id) ? null : newArr.push(req.user._id)
            console.log(newArr)
            Event.update({
                    _id: eventId
                }, {
                    guests: newArr
                })
                .then(info => {
                    console.log(info)
                    Event.findById(eventId).then(e => console.log(e))
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
        Promise.all([firstFind, secondFind])
   .then( x => res.render('events/confirm'), {user:req.user})
   .catch(err => console.log(err))
})
// The data we'll use for the Map 
router.get('/api', (req, res, next) => {
    Event.find()
        .then(allEventsFromDB => res.status(200).json({
            events: allEventsFromDB
        }))
        .catch(err => next(err))
});
router.get('/api/:id', (req, res, next) => {
    let eventId = req.params.id;
    console.log(eventId)
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
// You have to be logged in to see the details of the event
router.get("/:id", ensureLoggedIn("/auth/login"), (req, res) => {
    Event.findById(req.params.id)
        .populate("host")
        .populate('guests')
        .then(theEvent => {
            res.render("events/details", {
                event: theEvent
            });
        })
        .catch(err => console.log(err));
});
// // DELETE => remove the restaurant from the DB
// router.get('/:place_id/delete', (req, res, next) => {
//  Place.remove({ _id: req.params.place_id }, function (error, place) {
//      if (error) {
//          next(error);
//      } else {
//          res.redirect('/places');
//      }
//  });
// });
module.exports = router 