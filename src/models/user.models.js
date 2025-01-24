import mongoose from "mongoose";
  import jwt from "jsonwebtoken";
  
  // write your code here
  const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true, // mainly use for searching.
      },
    },
  
    { timestamps: true }
  );
  
  export const User = mongoose.model("User", userSchema);
  