// node bin/seeds.js

const mongoose = require("../configs/mongoose.config");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");

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