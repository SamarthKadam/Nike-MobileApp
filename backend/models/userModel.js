const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  shippingAddress: {
    type: String,
  },
  favourites: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Shoe" }],
  },
  cartItems: {
    type: [{shoe:{ type: mongoose.Schema.Types.ObjectId, ref: "Shoe"},count:{type:Number,default:1},size:{type:Number}}],
  }
});

userSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      this.password = await bcrypt.hash(this.password, 12);
    } catch (error) {
      return next(error);
    }
  }
  next();
});

userSchema.methods.correctPassword = async function (
  passwordDB,
  typedPassword
) {
  return await bcrypt.compare(typedPassword, passwordDB);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
