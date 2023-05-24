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

// 오류는 없는데 실행이 안됨, get이랑 post 해서 되는지 먼저 확인 해야할듯//
