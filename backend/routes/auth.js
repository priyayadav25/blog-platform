const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// =========================
// Register User
// =========================
router.post("/register", async (req, res) => {

    try {

        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({
            email
        });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            message: "User Registered Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

// =========================
// Login User
// =========================
router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const user = await User.findOne({
            email
        });

        if (!user) {
            return res.status(400).json({
                message: "User Not Found"
            });
        }

        const validPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            message: "Login Successful",
            token,
            username: user.username,
            email: user.email
        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

module.exports = router;
