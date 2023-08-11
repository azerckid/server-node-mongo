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
  name: String,
  age: Number,
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

module.exports = { UserModel, LoginModelCollecton };
