import mongoose from "mongoose";

// An interface descibe the properties that are
// reqired to create a new user

interface userAttr {
  email: string;
  password: string;
}

// An interface that descibes the properties
//  that are User Model has

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: userAttr): UserDoc;
}

// An interface that describe the properties
// thst a User Document has

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: userAttr) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
