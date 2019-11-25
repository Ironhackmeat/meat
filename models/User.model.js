const mongoose = require('../configs/mongoose.config');
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
    dairyFree: Boolean,
    veg: Boolean,
    glutenFree: Boolean,
    ShellFishAllergy: Boolean,
    nutAllergy: Boolean,
  },
  Rating: {
    type: Number,
    min: 0,
    max: 10
  },
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