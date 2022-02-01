const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();
// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about-me", (req, res) => {
  res.render("about");
});

app.get("/contact-me", (req, res) => {
  res.render("contact");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is runing port ${port}`);
});
