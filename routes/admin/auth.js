const express = require("express");
const router = express.Router();
const viewLogin = require("../../views/admin/auth/login");
const viewSignup = require("../../views/admin/auth/signup");
const { createUser, getSingleUser } = require("../../controllers/users");
const { comparePassword } = require("./validators");
//testing
const { body, validationResult } = require("express-validator");
router.post(
  "/login",
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 4 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    // test password comparison
    comparePassword(req.body);
    const user = await getSingleUser(req.body.email);
    req.session.userId = user.id;
    //console.log(req.body);
    res.redirect("/admin/products");
  }
);
router.get("/login", (req, res) => {
  res.send(viewLogin());
});
router.get("/signup", (req, res) => {
  res.send(viewSignup());
});

router.post("/signup", async (req, res) => {
  // post the req.body to users.json
  //console.log(req.body);
  createUser(req.body);
  const user = await getSingleUser(req.body.email);
  req.session.userId = user.id;
  res.redirect("/admin/products");
});

router.get("/signout", (req, res) => {
  req.session = null; // will take the current sessoin and forget it
  res.redirect("/login");
});
module.exports = router;
