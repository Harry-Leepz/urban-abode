import mongoose from "mongoose";

let connected = false;

const connectDb = async () => {
  // configure Mongoose to use strict mode for queries
  // Mongoose will throw an error if you try to query a field that is not defined in the schema
  mongoose.set("strictQuery", true);

  // if database connected, don't connect again
  if (connected) {
    console.log("Database is connected");
    return;
  }

  // connect to the Mongo database
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      connected = true;
    } else {
      throw new Error("MONGODB_URI is not defined");
    }
  } catch (err) {
    console.error(err);
  }
};

export default connectDb;
