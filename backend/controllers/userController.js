const User = require("../models/user");
const bcrypt = require('bcrypt');
const userController = {
    get: (req, res) => {
        res.status(200).json({ message: "get All process is running" });
    },
    login: (req, res) => {
        res.status(200).json({ message: "login process is running" });
    },
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const user = await User.register(name, email, password);
            const responseUser = user.toObject();
            delete responseUser.password;
            res.status(201).json(responseUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = userController