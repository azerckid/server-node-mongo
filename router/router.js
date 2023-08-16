const express = require("express");
const route = express.Router();

const controlGet = require("../controller/controlGet");
const controlPost = require("../controller/controlPost");

route.get("/", (req, res) => {
  res.send("Hello World!");
});
route.get("/adduser", (req, res) => {
  controlGet.adduser(req, res);
});
route.get("/getusers", (req, res) => {
  controlGet.getusers(req, res);
});
route.get("/importExcel", async (req, res) => {
  controlGet.importExcel(req, res);
});

route.post("/api/user/login", async (req, res) => {
  controlPost.login(req, res);
});
route.post("/api/user/signup", async (req, res) => {
  controlPost.signup(req, res);
});
route.post("/importExcel", async (req, res) => {
  controlPost.importExcel(req, res);
});

module.exports = route;
