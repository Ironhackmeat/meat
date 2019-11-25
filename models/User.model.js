const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  imgPath: String,
  imgName: String,
  bio: String,
  specs: {
    vegan: Boolean,
    veg: Boolean,
    glutenFree: Boolean,
    ShellFishAllergy: Boolean,
    nutAllergy: Boolean,
  },
  Rating: Number,
  favoriteRecipes: [],
  Events: {
    type: Schema.Types.ObjectId,
    ref: "Event"
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;