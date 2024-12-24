const db = require("../db/queries");
const { main } = require("../db/populatedb");

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

async function deleteAllUsernamesHandler(req, res) {
  try {
    await db.deleteAllUsernames();
    res.send("All users deleted");
  } catch (error) {
    console.error("Error deleting usernames:", error);
    res.status(500).send("Failed to delete users");
  }
}

async function populateDb(req, res) {
  try {
    await main();
    res.send("Database populated");
  } catch (error) {
    res.status(500).send("Failed to populate database");
  }
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  findUsername,
  deleteAllUsernamesHandler,
  populateDb,
};
