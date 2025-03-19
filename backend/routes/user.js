const express = require("express");
const router = express.Router();
const { User } = require("../db")
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const zod = require("zod");
const { authMiddleware } = require("../middleware")
// /api/v1/user/signup

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    password: zod.string()
})

router.post("/signup", async (req, res) => {
    const { success } = signupSchema.safeParse(req.body);
    if (!success) {
        return res.json({
            message: "Email already taken/Incoorect inputs"
        })
    }

    const existingUser = User.findOne({
        username: req.body.username
    })

    if (existingUser._id) {
        return res.json({
            message: "Email already taken/Incoorect inputs"
        })
    }

    const dbUser = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastname: req.body.body
    });
    //randomly gives a balance to the user
    await Account.create({
        userId: dbUser._id,
        balance: 1 + Math.random() * 10000
    })
    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)
    res.json({
        message: "User created successfully",
        token: token
    })
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            message: "error updating user"
        });
    }
    await User.updateOne({ _id: req.userId }, req.body);
    res.json({
        message: "update successfully"
    });
});

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";
    const users = await user.find({
        $or: [{
            fistName: {
                "$regex": filter,
            }
        }, {
            lasttName: {
                "$regex": filter,
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id,
        }))
    })
})

module.exports = router; 