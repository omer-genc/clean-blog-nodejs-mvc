const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const blog = { id: 1, title: "Blog title", description: "Blog description" };

  res.status(200).send(blog);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is runing port ${port}`);
});
