const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
// Load input validation
const validateMenuItemInput = require("../validation/menuItem");
// Load User model
const MenuItem = require("../models/menu.model");

router.post("/add", (req, res) => {
  // console.log(req.body);
  const { errors, isValid } = validateMenuItemInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  MenuItem.findOne({ name: req.body.name }).then((menuItem) => {
    if (menuItem) {
      console.log(menuItem)
      return res.status(400).json({ menuItem: "MenuItem already exists" });
    } else {
      const newMenuItem = new MenuItem({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        price: req.body.price,
        options: req.body.options
      });
      newMenuItem
        .save()
        .then((menuItem) => res.json(menuItem))
        .catch((err) => console.log(err));
    }
  });
});

router.get("/menuItems", (req, res) => {
  const cursor = MenuItem.find()
    .then((items) => {
      res.send(items);
    })
    .catch((err) => console.log(err));
});

router.get("/menuItems/:id", (req, res) => {
  MenuItem.findById(req.params.id)
    .then((item) => {
      res.json(item);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
