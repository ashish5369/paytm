const mongopose = require("mongoose");
mongoose.connect("mongodb+srv://ashish:admin@cluster0.3a8r8.mongodb.net/paytm")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
}) 

const User = mongoose.model("User", userSchema);

module.exports = {
    User
}