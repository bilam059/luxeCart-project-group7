const express = require('express');
const { createUser, loginUserCtrl, resetPassword, getallUser, getaUser, deleteaUser, updatedUser } = require('../controller/userCtrl');
const router = express.Router();


router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getallUser);
router.get("/:id", getaUser);
router.delete("/:id", deleteaUser);
router.put("/:id", updatedUser)

// router.post("/resetPassword", resetPassword);
module.exports = router;