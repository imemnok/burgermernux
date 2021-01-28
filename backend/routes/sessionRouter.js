import express from "express"
import Joi from "joi";
import User from "../models/user.model"
// const User = require("../models/user.model");
const  { signIn } = require("../validation/user");
const { SESS_NAME }= require("../config/config");
const { parseError, sessionizeUser } = require("../util/helpers");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    console.log(req.body)
    const { email, password } = req.body;
    const schema = {email, password}
    await signIn.validate(req.body);

    const user = await User.findOne({ email });
    if (user && user.comparePasswords(password)) {
      console.log(user)
      const sessionUser = sessionizeUser(user);

      req.session.user = sessionUser
      res.send(sessionUser);
    } else {
      throw new Error('Invalid login credentials');
    }
  } catch (err) {
    res.status(401).send(parseError(err));
  }
});

router.delete("", ({ session }, res) => {
  try {
    const user = session.user;
    if (user) {
      session.destroy(err => {
        if (err) throw (err);
        res.clearCookie(SESS_NAME);
        res.send(user);
      });
    } else {
      throw new Error('Something went wrong');
    }
  } catch (err) {
    res.status(422).send(parseError(err));
  }
});

router.get("", ({ session: { user }}, res) => {
  res.send({ user });
});

module.exports = router;
