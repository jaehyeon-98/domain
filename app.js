// const express = require("express");
// const app = express();

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("URL should contain /api/..");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});

moudule.exports = app;
