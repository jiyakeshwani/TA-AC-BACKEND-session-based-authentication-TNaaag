var express = require("express");

const User = require("../models/user");
var router = express.Router();

/* GET users listing. */
router.get("/register", function (req, res, next) {
  res.render("users");
});

router.post("/register", (res, req) => {
  User.create(req.body, (err, user) => {
    console.log(err, user);
  });
});

module.exports = router;
