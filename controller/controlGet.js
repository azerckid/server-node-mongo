const { UserModel } = require("../database/mongoDB");

const controlGet = {
  adduser: (req, res) => {
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
  },
  getusers: (req, res) => {
    UserModel.find({})
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .json({ error: "An error occurred while fetching users" });
      });
  },
};

module.exports = controlGet;
