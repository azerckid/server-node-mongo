const { LoginModelCollecton, ExcelModel } = require("../database/mongoDB");

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
  importExcel: async (req, res) => {
    try {
      const data = req.body;
      console.log(data.length);
      for (let i = 0; i < data.length; i++) {
        const newExcel = new ExcelModel({
          Id: data[i].Id,
          FirstName: data[i].FirstName,
          LastName: data[i].LastName,
          Gender: data[i].Gender,
          Country: data[i].Country,
          Age: data[i].Age,
          Date: data[i].Date,
        });
        newExcel.save();
      }
      res.json({ message: "Excel import success" });
    } catch (err) {
      res.send(new Error(400, err.message));
    }
  },
};

module.exports = controlPost;
