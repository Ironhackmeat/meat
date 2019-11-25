require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const session = require("express-session");
const mongoose = require('./configs/mongoose.config')
const MongoStore = require('connect-mongo')(session);
const flash = require("connect-flash");
const app = express();

require('./configs/debug.config')
require('./configs/locals.config')(app)
require('./configs/middlewares.config')(app)
require('./configs/preprocessor.config')(app)

//---HBS CONFIG---//
hbs.registerHelper('ifUndefined', (value, options) => {
  if (arguments.length < 2)
    throw new Error("Handlebars Helper ifUndefined needs 1 parameter");
  if (typeof value !== undefined) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

//---SESSION & PASSPORT CONFIG---//
app.use(session({
  secret: 'irongenerator',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}))
app.use(flash());
require('./passport')(app);


//---BASE URL---//
app.use('/', require('./routes/index.routes'));
app.use('/auth', require('./routes/auth.routes'));


module.exports = app;