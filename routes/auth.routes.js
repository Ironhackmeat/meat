const express = require("express");
const passport = require('passport');
const router = express.Router();
const multer = require('multer')
const uploadCloud = require('../configs/cloudinary.config');
const {
  ensureLoggedIn,

} = require('connect-ensure-login');
const User = require("../models/User.model");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

//---LOGIN---//
router.get("/login", (req, res, next) => {
  res.render("auth/login", {
    "message": req.flash("error")
  });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

//---SIGNUP---//
router.get("/signup", (req, res, next) => res.render("auth/signup"))

router.post("/signup", uploadCloud.single('imgFile'), (req, res, next) => {
  console.log(req.body)
  const {
    username,
    email,
    password,
    vegan,
    dairyFree,
    veg,
    glutenFree,
    shellFishAllergy,
    nutAllergy,
  } = req.body

  let imgPath
  let imgName
  if (req.file) {
    imgPath = req.file.url
    imgName = req.file.originalname
  }

  if (username === "" || password === "") {
    res.render("auth/signup", {
      message: "Indicate username and password"
    });
    return;
  }

  User.findOne({
    username
  }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", {
        message: "The username already exists"
      });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      email,
      imgPath,
      imgName,
      specs: {
        vegan,
        dairyFree,
        veg,
        glutenFree,
        shellFishAllergy,
        nutAllergy,
      }
    });

    newUser.save()
      .then(() => {
        passport.authenticate("local", {
          successRedirect: "/",
          failureRedirect: "/auth/login",
          failureFlash: true,
          passReqToCallback: true
        })
        res.redirect("/");
      })

      .catch(err => {
        res.render("auth/signup", {
          message: "Something went wrong"
        });
      })
  });
});

//---PROFILE---//
router.get('/profile', ensureLoggedIn('/auth/login'), (req, res) => {
  res.render('auth/profile', {
    user: req.user
  });
});

//---PROFILE EDIT RENDER FORM---//
router.get('/profile/edit', ensureLoggedIn('/login'), (req, res) => {
  res.render('auth/edit-profile', {
    user: req.user
  })
})

//---PROFILE EDIT SEND FORM---//
router.post('/profile/edit', uploadCloud.single('imgFile'), (req, res) => {
  const {
    email,
    bio,
    vegan,
    dairyFree,
    veg,
    glutenFree,
    shellFishAllergy,
    nutAllergy
  } = req.body

  let imgPath
  let imgName
  if (req.file) {
    imgPath = req.file.url
    imgName = req.file.originalname
  }

  User.findByIdAndUpdate(req.user._id, {
      email,
      bio,
      imgPath,
      imgName,
      specs: {
        vegan,
        dairyFree,
        veg,
        glutenFree,
        shellFishAllergy,
        nutAllergy
      },
    })
    .then(x => {
      res.redirect('/auth/profile')
      console.log(req.body)
    })
    .catch(err => console.log(err))

})

//---LOGOUT---//
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;