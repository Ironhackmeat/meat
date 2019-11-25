// node bin/seeds.js

const mongoose = require("../configs/mongoose.config");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const Event = require("../models/Event.model")

const bcryptSalt = 10;

let users = [{
      username: "alice",
      password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
      email: "alice@alice.com",
      bio: "Hello, I am Alice. I love baking and drink (often at the same time)",
      specs: {
        vegan: false,
        dairyFree: false,
        veg: true,
        glutenFree: false,
         ShellFishAllergy: false,
           nutAllergy: true,
      },
      Rating: 5,
      },
      {
        username: "bob",
        password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
         email: "bob@bob.com",
           bio: "Hello, I am Bob. I enjoy long romatic walks to my fridge...",
           specs: {
             vegan: false,
             dairyFree: true,
             veg: false,
             glutenFree: false,
             ShellFishAllergy: false,
             nutAllergy: false,
           },
           Rating: 8,
      }
    ]

User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})

let events = [
  {
    name: "Dinner in Rom",
    description: "Dinner, Italian dinner!!!",
    specs: {
      glutenFree: false,
      dairyFree: false,
      veg: false,
      vegan: false, 
      shelfish: false,
      nuts: true,
    },
    type: "dinner",
    date: 12/12/2019,
    time: "21:00",
    location: {
      address: "Calle Pez",
      addressnumber: 9,
      city: "Madrid"
    },
    forks: 4
  },
  {
    name: "First lunch",
    description: "Let's eat together!!!",
    specs: {
      glutenFree: false,
      dairyFree: false,
      veg: true,
      vegan: false, 
      shelfish: false,
      nuts: true,
    },
    type: "lunch",
    date: 12/12/2019,
    time: "13:00",
    location: {
      address: "Calle Alcalá",
      addressnumber: 12,
      city: "Madrid"
    },
    forks: 6
  },
  
]


Event.deleteMany()
.then(() => {
  return Event.create(events)
})
.then(usersCreated => {
  console.log(`${eventsCreated.length} event created with the following id:`);
  console.log(eventsCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})
