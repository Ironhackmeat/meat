const mongoose = require('../configs/mongoose.config')
const Schema = mongoose.Schema
// Aquí el esquema
const eventSchema = new Schema({
    name: String,
    description: String,
    host: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    specs: {
      glutenfree: Boolean,
      dairyfree: Boolean,
      veg: Boolean,
      vegan: Boolean,
      shellfish: Boolean,
      nuts: Boolean,
    },
    type: {
      type: String,
      enum: ["breakfast", "brunch", "lunch", "dinner"]
    },
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    date: Date,
    time: String,
    recipeName: String,
    recipePath: String,
    imgName: String,
    imgPath: String,
    address: String,
    forks: Number,
    guests: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  }, {
    timestamps: true
  },

)
module.exports = mongoose.model('Event', eventSchema)