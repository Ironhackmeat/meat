const mongoose = require('../configs/mongoose.config');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  imgPath: {
    type: String,
    default: "https://res.cloudinary.com/darzjo72b/image/upload/v1574854446/meat/default-profile-icon-24_a6zics.jpg"
  },
  imgName: {type: String, default: "Profile Image"},
  bio: String,
  specs: {
    vegan: Boolean,
    dairyFree: Boolean,
    veg: Boolean,
    glutenFree: Boolean,
    shellFishAllergy: Boolean,
    nutAllergy: Boolean,
  },
  Rating: {
    type: Number,
    min: 0,
    max: 10
  },
  favoriteRecipes: [],
  events: [{
    type: Schema.Types.ObjectId,
    ref: "Event"
  }]
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;