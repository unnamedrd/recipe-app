const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')


 exports.getLogin = (req, res) => {
    if (req.user) {
      return res.redirect('/recipes')
    }
    res.render('login', {
      title: 'Login'
    })
  }


  
  exports.postLogin = (req, res, next) => {
    const validationErrors = []
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
    if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'Password cannot be blank.' })
  
    if (validationErrors.length) {
      req.flash('errors', validationErrors)
      return res.redirect('/login')
    }
    req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })
  
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err) }
      if (!user) {
        req.flash('errors', info)
        return res.redirect('/login')
      } 
      req.logIn(user, (err) => {
        if (err) { return next(err) }
        req.flash('success', { msg: 'Success! You are logged in.' })
        res.redirect(req.session.returnTo || '/recipes')
      }) 
   
      
    })(req, res, next)
  
  }

 
  
  exports.logout = (req, res) => {
    req.logout(() => {
      console.log('User has logged out.')
    })
    req.session.destroy((err) => {
      if (err) console.log('Error : Failed to destroy the session during logout.', err)
      req.user = null
      res.redirect('/')
    })
  }
  
  exports.getSignup = (req, res) => {
    if (req.user) {
      return res.redirect('/recipes')
    }
    res.render('signup', {
      title: 'Create Account'
    })
  }
  
  exports.postSignup = (req, res, next) => {
    const validationErrors = []
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
    if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' })
    if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })
  
    if (validationErrors.length) {
      req.flash('errors', validationErrors)
      return res.redirect('../signup')
    }
    req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })
  
    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    })
  
    User.findOne({$or: [
      {email: req.body.email},
      {userName: req.body.userName}
    ]}, (err, existingUser) => {
      if (err) { return next(err) }
      if (existingUser) {
        req.flash('errors', { msg: 'Account with that email address or username already exists.' })
        return res.redirect('../signup')
      }
      user.save((err) => {
        if (err) { return next(err) }
        req.logIn(user, (err) => {
          if (err) {
            return next(err)
          }
          res.redirect('/recipes')
        })
      })
    })
  }

  // exports.getGuestLogin = (req, res) => {
  //   if (req.user) {
  //     return res.redirect('guest/recipes')
  //   }
  //   res.render('index', {
  //     title: 'Login'
  //   })
  // }
  exports.postGuestLogin = async (req,res) => {
  
try {

  const user = new User({
    userName: 'Guest'
  })
  user.save((err) => {
    if (err) { return next(err) }
    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }
      res.redirect('/recipes')
    })
  })

  console.log("Successfully logged in!");
  // return user;
} catch (err) {
  console.error(err);
}
}

  // exports.getGuestLogin = 
  //   passport.authenticate('anonymous', {session: false}, (req,res) => {
  //     console.log('hey')
  //     res.json({ anonymous: true })
  //   })
  

  // exports.postGuestLogin = (req, res, next) => {
  //   passport.authenticate('local', (err, user, info) => {
  //     if (err) { return next(err) }
  //     if (!user) {
  //       req.flash('errors', info)
  //       return res.redirect('/login')
  //     } 
  //     req.logIn(user, (err) => {
  //       if (err) { return next(err) }
  //       req.flash('success', { msg: 'Success! You are logged in.' })
  //       res.redirect(req.session.returnTo || 'guest/recipes')
  //     })
  //   })(req, res, next)
  // }
// exports.postGuestLogin = 

//   passport.authenticate(('anonymous'),async (req, res) => {
//     try {

//       const guestInfo = await User.create({userName: 'Guest', session: req.session, guest: true})
//       console.log('heya')
//       res.json({ name: 'anonymous' })
     
//     }  catch(err) {
//       console.error(err)
//     }
//   })
  // passport.authenticate(['basic', 'anonymous'], { session: false }),
  // function(req, res) {
  //   if (req.user) {
  //     res.json({ name: req.user.username });
  //   } else {
  //     res.json({ name: 'anonymous' });
  //   }
  // });

  


  
  // exports.getGuest = (req,res) => {
   
  //     res.render('guest-recipe.ejs')
  // }
 
  
  // exports.postGuest = (req,res) => {
  //   passport.authenticate('anonymous', { session: false })
  //   if (req.user) {
  //     res.json({ username: req.user.username, email: req.user.email });
  //   } else {
  //     res.json({ anonymous: true });
  //   }
  
  // }
  
  
  


    // passport.authenticate('anonymous', { session: false }),
    // function(req, res){
    //   if (req.user) {
    //     res.json({ username: req.user.username, email: req.user.email });
    //   } else {
    //     res.json({ anonymous: true });
    //   }
    // });
  