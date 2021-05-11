const { validationResults } = require("express-validator");

// needed in orer to check if a user is currently logged in
const requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/login");
  }

  next();
};

const handleErrors = (template, cb) => {
  return async (req, res, next) => {
    // so errors will check the validation of req
    const errors = validationResults(req);
    if (!errors.isEmpty()) {
      let data = {}; // so if no errors are present, this will initiate an empty object, in which our successful data will be passed onto.
      if (cb) {
        data = await res.send(template({ errors, ...data }));
      }
      next();
    }
  };
};

module.exports = { requireAuth };