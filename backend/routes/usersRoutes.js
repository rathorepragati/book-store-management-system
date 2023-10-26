const router = require("express").Router();
const usersModel = require("../models/usersModel");

const usersController = require("../controller/UsersController")

//Post request for register user
router.post("/register",usersController.register );


//get request by id for fetch user;
router.get("/getUsers/:id",usersController.getUsersById);

//get request by fetch all users;
router.get("/getUsers",usersController.getUsers);
  
module.exports = router;