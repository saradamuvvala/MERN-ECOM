let jwt = require('jsonwebtoken')
const User = require('../models/userModel.js')
const ErrorHandler = require('../utils/errorHandler.js')

async function isAuthenticatedUser(req, res, next) {

  let { token } = req.cookies
  console.log(token)

  let decode = await jwt.verify(token, process.env.JWT_SECRET)
  console.log(decode.id)

 req.user = await User.findById(decode.id)

  next()
}

function authorizeRoles(...roles) {
  return (req, res, next) => {
    console.log('hello', req.user)
    if (!roles.includes(req.user.role)) {
      return next(new ErrorHandler(`Role is (${req.user.role}) not accessed this resources`, 403))
      // return res.status(403).json({
      //   message: 'user is not an admin'
      // })
    }
  next()
  }
}

module.exports = { isAuthenticatedUser, authorizeRoles}