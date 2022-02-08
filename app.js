const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const path = require("path");
const ejs = require("ejs");

const Blog = require("./models/Blog");

dotenv.config({ path: ".env" });
const app = express();
connectDB();
app.use(express.json());

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

app.get("/new-post", (req, res) => {
  res.render("new-post");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.post("/new-post", async (req, res) => {
  console.log(req.body);
  await Blog.create(req.body)
    .then((blog) => console.log(blog))
    .catch((err) => console.log({ error: err.message }));
  res.status(200).redirect("/new-post")
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is runing port ${port}`);
});

function connectDB() {
  mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
