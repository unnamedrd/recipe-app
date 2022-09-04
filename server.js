const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const ingredientRoutes = require('./routes/ingredient')
const recipeRoutes = require('./routes/recipe')
<<<<<<< HEAD
const multer = require('multer') //multer allows uploading  files for the img
=======
const guestRoutes = require('./routes/guest')

>>>>>>> 609104ff7e9dfb02c6aeccc2ed615889abc64173

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
 
// multer middleware
app.use(multer({dest:'./routes/recipe'}).single()) //adding destination for file uploading not sure if this will work, but leaving it here for now

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/recipes', recipeRoutes)
app.use('/ingredients', ingredientRoutes)
app.use('/guest', guestRoutes)


 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    