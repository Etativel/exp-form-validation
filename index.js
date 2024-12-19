const express = require("express");
const app = express();
const PORT = "3000";

app.get("/", (req, res) => {
  res.send("Form Page");
});

app.listen(PORT, (req, res) => {
  console.log("App listen to port ", PORT);
});
