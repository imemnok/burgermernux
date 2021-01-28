const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");

router.post("/order", (req, res) => {
  console.log(req.body);

  Order.findOne({ _id: req.body._id }).then((order) => {
    if (order) {
      return res.status(400).json({ menuItem: "Order already exists" });
    } else {
      const newOrder = new Order({
        cart: req.body.cart,
        number: req.body.number,
        subtotal: req.body.subtotal,
        tax: req.body.tax,
        total: req.body.total,
      });
      newOrder
        .save()
        .then((order) => res.json(order))
        .catch((err) => console.log(err));
    }
  });
});

router.get("/", (req, res) => {
  const cursor = Order.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => console.log(err));
});

router.get("/orders/:id", (req, res) => {
  Order.findById(req.params.id)
    .then((item) => {
      res.json(item);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
