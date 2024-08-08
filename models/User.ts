import { Schema, model, models } from "mongoose";

/*
  User Model
  - email: String, required, unique
  - username: String, required
  - image: String
  - bookmarks: Array of ObjectId, ref: Property

*/

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: [true, "Email already exists"],
    },
    username: {
      type: String,
      required: [true, "Please provide a username"],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
