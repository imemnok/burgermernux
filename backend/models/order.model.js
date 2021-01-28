const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
  cart: {
    type:   mongoose.Schema.Types.ObjectId, ref: "cart",

  },
  number: {
    type: String,
  },
  subtotal: {
    type: String,
    required: true,
  },
  tax: {
    type: String
  }, 
  total: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default:  Date.now
  }
});

module.exports = Order = mongoose.model("Order", OrderSchema);
