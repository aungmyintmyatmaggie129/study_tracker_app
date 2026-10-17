const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

userSchema.statics.register = async function (name, email, password) {
    // return "register process running from schema"
    // let userEmail = await this.findOne({value: email});
    let userEmail = await this.findOne({ email: email });
    if (userEmail) {
        throw new Error("Your Email is already existed! Please try to login");
    }
    //Hashing PlainText Password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashValue = bcrypt.hashSync(password, salt);

    //create
    const user = await this.create({ name: name, email: email, password: hashValue });
    return user;
}

userSchema.statics.login = async function (email, password) {
    try {
        let userEmail = await this.findOne({ email: email });
        if (userEmail) {
            return "from schema and your password" + password
        }
        return "not found: " + userEmail;
    } catch (error) {
        throw new Error(error || "Cannot reach to login service");
    }

}

const User = mongoose.model("User", userSchema);
module.exports = User;