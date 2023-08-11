const { LoginModelCollecton } = require("../database/mongoDB");

const controlPost = {
  login: async (req, res) => {
    const { id, pw, email } = req.body;
    console.log(id, pw, email);
    try {
      const user = await LoginModelCollecton.findOne({
        id: id,
        password: pw,
      });
      if (user) {
        res.json({ message: "Login Success" });
      } else {
        res.json({ message: "Login Failed" });
      }
    } catch (err) {
      console.log(err);
    }
  },
  signup: async (req, res) => {
    const { id, pw, email } = req.body;
    console.log(id, pw, email);
    try {
      const user = await LoginModelCollecton.findOne({
        id: id,
        password: pw,
      });
      if (user) {
        res.json({ message: "User already exists" });
      } else {
        const newUser = new LoginModelCollecton({
          id: id,
          password: pw,
          email: email,
        });
        newUser.save();
        res.json({ message: "User created" });
      }
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = controlPost;
