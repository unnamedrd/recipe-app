const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const bodyParser = require('body-parser')
const multer = require('multer')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const ingredientRoutes = require('./routes/ingredient')
const recipeRoutes = require('./routes/recipe')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
 //bodyParser middleware 
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/recipes', recipeRoutes)
app.use('/ingredients', ingredientRoutes)

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({storage:storage})
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    