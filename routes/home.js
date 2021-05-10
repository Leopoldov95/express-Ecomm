const express = require("express");
const router = express.Router();
const homeView = require("../views/home");
const contactView = require("../views/contact");
// remember that I need to always include (req,res)
router.get("/", (req, res) => {
  // views files need to be invoked
  res.send(homeView());
});

router.get("/contact", (req, res) => {
  res.send(contactView());
});

module.exports = router;
