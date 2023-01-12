const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user/:id", (req, res) => {
  // const q = req.params;
  // console.log(q);

  const q = req.query;
  console.log(q);
});

app.get("/dog", (req, res) => {
  res.send({ sound: "멍멍" });
});

app.get("/cat", (req, res) => {
  res.send({ sound: "야옹" });
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;
  if (name === "dog") {
    res.send({ sound: "멍멍" });
  } else if (name === "cat") {
    res.send({ sound: "야옹" });
  } else {
    res.json({ sound: "알 수 없음" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
