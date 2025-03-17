const express = require('express');
const cors = require("cors");
const router = express.Router();
app.use(cors());
app.use(express.json());
const userRouter = require("./user.js");
router.use("/user", userRouter);

model.exports = router;