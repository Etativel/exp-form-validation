// routes/usersRouter.js
const { Router } = require("express");
const usersController = require("../controllers/usersController");
const dbController = require("../controllers/dbController");
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);
usersRouter.get("/create", usersController.usersCreateGet);
usersRouter.post("/create", usersController.usersCreatePost);
usersRouter.get("/search", usersController.usersSearch);
usersRouter.get("/:id/update", usersController.usersUpdateGet);
usersRouter.post("/:id/update", usersController.usersUpdatePost);
usersRouter.post("/:id/delete", usersController.userDeletePost);
usersRouter.get("/db/user", dbController.getUsernames);
module.exports = usersRouter;
