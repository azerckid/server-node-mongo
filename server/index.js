const express = require("express");
const dotenv = require("dotenv");
const ip = require("ip");
const cors = require("cors");
const morgan = require("morgan");
const router = require("../router/router.js");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`✅ Server is running http://` + ip.address() + `:${PORT}`);
});
