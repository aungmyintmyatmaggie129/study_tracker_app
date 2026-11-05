const User = require("../models/user");
const createToken = require("../token/createToken");
const cookieOptions = {
    maxAge: 5 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    secure: process.env.NODE_ENV === 'production',
};

const userController = {
    get:  async(req, res) => {
        // res.status(200).json({ message: "get All process is running" });
        let users = await User.find();
        res.status(200).json({"users": users});
    },
    me: (req, res) => {
        const user = req.user.toObject();
        delete user.password;
        return res.status(200).json({ user });
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.login(email, password);
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password.' });
            }

            const token = createToken(user._id);
            res.cookie('jwt', token, cookieOptions);
            const responseUser = user.toObject();
            delete responseUser.password;
            return res.status(200).json({ user: responseUser });
        } catch (error) {
            return res.status(500).json({ message: 'Unable to log in right now.' });
        }
    },
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const user = await User.register(name, email, password);
            const responseUser = user.toObject();
            delete responseUser.password;
            const token = createToken(user._id);
            res.cookie('jwt', token, cookieOptions);
            res.status(200).json({ responseUser, token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = userController