const User = require("../models/user");
const bcrypt = require('bcrypt');
const userController = {
    get: async (req, res) => {
        // res.status(200).json({ message: "get All process is running" });
        let users = await User.find();
        res.status(200).json({"users": users});
    },
    login: (req, res) => {
        res.status(200).json({ message: "login process is running" });
    },
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const user = await User.register(name, email, password);
            const responseUser = user.toObject();
            console.log("before delete:" + responseUser.password);
            delete responseUser.password;
            console.log("after delete:" + responseUser.password);
            res.status(200).json(responseUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = userController