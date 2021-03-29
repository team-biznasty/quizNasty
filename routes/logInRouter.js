const routerLogIn = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

routerLogIn.post("/login", async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;

  User.findOne({ email }, async (err, user) => {
    if (err) {
      res.status(500).json(err);
    } else if (!user) {
      res.status(404).json({ msg: "You're not from us!" });
    } else {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        res.status(200).json({ msg: "Logged in", username: user.email, name: user.name });
      } else {
        res.status(403).json({ msg: "Invalid password" });
      }
    }
  });
});

module.exports = routerLogIn;
