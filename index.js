const express = require("express");
const cors = require("cors");
const { UserModel, LoginModelCollecton } = require("./mongoDB");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/adduser", (req, res) => {
  const user = new UserModel({ name: "John", age: 30 });
  console.log(user);
  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "An error occurred while adding user" });
    });
});
app.get("/getusers", (req, res) => {
  UserModel.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "An error occurred while fetching users" });
    });
});

app.post("/api/user/login", async (req, res) => {
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
});
app.post("/api/user/signup", async (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
