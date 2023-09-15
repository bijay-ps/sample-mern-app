const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const PORT = 8000;

app.post("/addCity", (req, res) => {
  console.log(req);
  res.json({
    msg: "City Added",
    status: 200,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
