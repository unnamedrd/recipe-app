
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("express-flash");
const logger = require("morgan");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const ingredientRoutes = require("./routes/ingredient");
const recipeRoutes = require("./routes/recipe");
const guestRoutes = require("./routes/guest");





require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
// next 2 lines enable us to look at different parts of the request coming through. Pull info from forms, etc
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));


// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
 

// multer middleware
app.use(multer({dest:'./routes/recipe'}).single()) //adding destination for file uploading not sure if this will work, but leaving it here for now



//bodyParser middleware



//bodyParser middleware


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use("/", mainRoutes);
app.use("/recipes", recipeRoutes);
app.use("/ingredients", ingredientRoutes);
app.use("/guest", guestRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
