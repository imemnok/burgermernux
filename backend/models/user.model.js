const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// import { compareSync, hashSync } from 'bcryptjs';
const { compareSync, hashSync} = require("bcryptjs")


const UserSchema = new Schema ({
    name: {
      type: String,
      validate: {
        validator: name => User.doesNotExist({ name }),
        message: "Username already exists"
      }
    },
    email: {
      type: String,
      validate: {
        validator: email => User.doesNotExist({ email }),
        message: "Email already exists"
      },
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
        type: String,
        default: "Customer",
        required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }, { timestamps: true });

  UserSchema.pre('save', function () {
    if (this.isModified('password')) {
      this.password = hashSync(this.password, 10);
    }
  });
  
  UserSchema.statics.doesNotExist = async function (field) {
    return await this.where(field).countDocuments() === 0;
  };
  
  UserSchema.methods.comparePasswords = function (password) {
    return compareSync(password, this.password);
  };


module.exports = User = mongoose.model('users', UserSchema)