const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const Cart = require("../models/cart.model");

router.post("/add", (req, res) => {
  console.log(req.body);

  Cart.findOne({ _id: req.body._id }).then((cart) => {
    if (cart) {
      return res.status(400).json({ cart: "Cart already exists" });
    } else {
      const newCart = new Cart({
        customer: req.body.customer,
        items: req.body.items,
        active: req.body.active,
      });
      newCart
        .save()
        .then((cart) => res.json(cart))
        .catch((err) => console.log(err));
    }
  });
});

router.get("/", (req, res) => {
  const cursor = Cart.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Cart.findById(req.params.id)
    .then((item) => {
        if(item.active === true)
{      res.json(item);
}  else {
    res.json({})
}
  })
    .catch((err) => console.log(err));
});

router.post("/update", (req, res) => {
  //   console.log(req.body);
  const query = req.body._id ? { _id: req.body._id } : { _id: new ObjectId() };
  console.log(query);
  try {
    Cart.findOneAndUpdate(
      query,
      {
        $addToSet: { items: req.body.items },
        $set: { active: req.body.active, customer: req.body.customer },
      },
      { upsert: true, new: true },
      function (err, doc) {
        if (err) {
          throw err;
        } else {
          res.json(doc);
          console.log("updated");
        }
      }
    );
    // res.send(cart);
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;
