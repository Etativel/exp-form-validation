const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function findUsername(req, res) {
  const { user } = req.query;
  const searchedUser = await db.findUsername(user);

  if (searchedUser.length < 1) {
    console.log(searchedUser);
    return res.send("No user found");
  }
  res.send(
    "Usernames: " + searchedUser.map((user) => user.username).join(", ")
  );
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  findUsername,
};
