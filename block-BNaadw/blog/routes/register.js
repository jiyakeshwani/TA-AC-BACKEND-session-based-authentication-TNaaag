var express = require("express");
var router = express.Router();
var User = require("../models/user");

router.get("/", (req, res, next) => {
  res.render("register");
});

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.post("/", (res, req, next) => {
  console.log(req.body);
  User.create(req.body, (err, user) => {
    if (err) return next(err);
    res.redirect("/register/login");
  });
});
module.exports = router;
