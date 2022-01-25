const express = require("express");
const router = express.Router();
const path = require("path");

const {
  getUsers,
  createUser,
  updateUserPut,
  updateUserPatch,
  deleteUser,
  getSingleUser,
} = require("../controllers/usersController");

router.get("/", getUsers);

//GET Request with params
router.get("/:id", getSingleUser);

//POST Request
router.post("/", createUser);

//PUT   Request
router.put("/:id", updateUserPut);

//PATCH Request

router.patch("/:id", updateUserPatch);

//DELETE Request
router.delete("/:id", deleteUser);

module.exports = router;
