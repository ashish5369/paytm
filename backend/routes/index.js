const express = require('express');
const cors = require("cors");

const router = express.Router();
const app = express();
app.use(express.json());
app.use(cors());

const userRouter = require("./user.js");
router.use("/user", userRouter);


const accountRouter = require("./account.js");
router.use("/account", accountRouter);

module.exports = router;