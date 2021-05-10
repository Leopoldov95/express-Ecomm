const fs = require("fs");
const { body, validationResult } = require("express-validator");

const comparePassword = (req) => {
  const rawData = fs.readFileSync("users.json");
  const data = JSON.parse(rawData);

  return compareData(data, req);
};
//comparePassword();

const compareData = (data, req) => {
  console.log(data);

  for (let key in data) {
    // userEmails.push(data[key].email);
    if (data[key].email === req.email && data[key].password === req.password) {
      console.log("Found a match  -email!!!");
    }
  }
};

module.exports = { comparePassword };

/* 
 requireAuth(req, res, next) {
    if (!req.session.userId) {
      return res.redirect("/signin");
    }

    next();
  },
*/
