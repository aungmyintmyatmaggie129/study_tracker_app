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
            let user = await User.register( name, email, password )
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }
}

module.exports = userController