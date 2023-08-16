const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://admin:1234@svc.sel3.cloudtype.app:31947/?authMechanism=DEFAULT",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
});
const UserModel = mongoose.model("users", UserSchema);

const LoginSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const LoginModelCollecton = mongoose.model("signup", LoginSchema);

const ExcelSchema = new mongoose.Schema({
  Id: {
    type: String,
  },
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Gender: {
    type: String,
  },
  Country: {
    type: String,
  },
  Age: {
    type: Number,
  },
  Date: {
    type: String,
  },
});
const ExcelModel = mongoose.model("excel", ExcelSchema);

module.exports = { UserModel, LoginModelCollecton, ExcelModel };
