const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['burger', 'sandwich', 'sides', "drinks"],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    price: {
        type: String,
        required: true
    },
    options: {
        protein: {
            type: String,
            enum: ["burger", "chicken", "veggie"],
            default: "burger",
          },
        cheese: {
          type: String,
          enum: ["swiss", "cheddar", "pepperjack", "american", "blue"],
        },
        adds: {
          type: [String],
          enum: ["bacon", "avacado"]
        },
        veg: {
          enum: [
            "onions",
            "tomato",
            "lettuce",
            "mushrooms",
            "grilledonions",
            "pickles",
          ],
          type: [String],
        },
        sauce: {
          type: [String],
          enum: ["mayo", "ketchup", "mustard", "special", "bbq"],
        },
      },
})


module.exports = MenuItem = mongoose.model('menuItems', MenuSchema)