const express = require("express");
const session = require("express-session");
const connectStore = require("connect-mongo")
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const usersRoutes = require("./routes/userRouter");
const ordersRoutes = require("./routes/orderRouter");
const cartRoutes = require("./routes/cartRouter")
const menuRoutes = require("./routes/menuRouter");
const sessionRoutes = require("./routes/sessionRouter")
import {
  PORT, NODE_ENV, MONGO_URI, SESS_NAME, SESS_SECRET, SESS_LIFETIME
} from "./config/config";
const MongoStore = connectStore(session);
// const PORT = 4001;
// const uri =
//   "mongodb+srv://bgdbAdmin:l2XuYqeNZjBjlsMEGt3o@burger-clu0.ghcup.mongodb.net/burger?retryWrites=true&w=majority";

// console.log("session: " + SESS_SECRET)

mongoose.connect(MONGO_URI, { useNewUrlParser: true });
const connection = mongoose.connection;
    app.use('/images', express.static('Images'))
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(passport.initialize());
    require("./config/passport")(passport)
    app.use(session({
      name: SESS_NAME,
      secret: SESS_SECRET,
      saveUninitialized: false,
      resave: false,
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        collection: 'session',
        ttl: parseInt(SESS_LIFETIME) / 1000
      }),
      cookie: {
        sameSite: true,
        secure: NODE_ENV === 'production',
        maxAge: parseInt(SESS_LIFETIME)
      }
    }));
// Routes
app.use("/users", usersRoutes)
app.use("/menu", menuRoutes)
app.use("/orders", ordersRoutes)
app.use("/session", sessionRoutes)
app.use("/cart", cartRoutes)
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
  });

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
