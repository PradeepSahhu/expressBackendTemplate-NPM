import mongoose from "mongoose";
  
  import { DB_NAME } from "../constants.js";
  
  const connectMongooseDb = async () => {
    try {
      const connectionInstance = await mongoose.connect(URL / DB_NAME);
  
      // MongoDB connection !! DB Host : HOST
    } catch (error) {
      console.log("MongoDb connection error", error);
      process.exit(1);
    }
  };
  export default connectMongooseDb;
  
 