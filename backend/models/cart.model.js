const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CartSchema = new Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "menuitems",
        required: true,
      },
    },
  ],
  active: {
    type: Boolean,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Order = mongoose.model("Cart", CartSchema);
