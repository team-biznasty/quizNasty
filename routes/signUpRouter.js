const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, passwordCheck } = req.body;

    if (!email || !password || !passwordCheck)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields" });

    if (password.length < 6)
      return res.status(400).json({
        errorMessage: "Please enter a password with min. 6 characters",
      });

    if (password !== passwordCheck)
      return res.status(400).json({
        errorMessage: "Please enter the same password twice",
      });

    if (name.length > 15)
      return res.status(400).json({
        errorMessage: "Please enter a username with max 15 characters",
      });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        errorMessage: "Email already exists",
      });

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
      name,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
