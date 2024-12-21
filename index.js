const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");
const path = require("path");
const assetPath = path.join(__dirname, "public");

app.use(express.static(assetPath));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
