import fs from "fs";

const fileData = {
  "user.models.js": `import mongoose from "mongoose";
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
  `,

  "DatabaseConnection.js": `import mongoose from "mongoose";
  
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
  
 `,
};

function Main() {
  const DirectoryName = [
    { name: "controllers", file: "user.controllers.js" },
    { name: "middleware", file: "user.middleware.js" },
    { name: "routes", file: "user.routes.js" },
    { name: "models", file: "user.models.js" },
    { name: "database", file: "user.database.js" },
    { name: "utils", file: "DatabaseConnection.js" },
  ];

  fs.mkdirSync(`src/`, { recursive: true }, (error) => {
    if (error) {
      console.log("");
      return;
    }
  });

  DirectoryName.forEach((fileDir) => {
    const { name, file } = fileDir;

    fs.access(name, () => {
      fs.mkdirSync(`src/${name}`, { recursive: true }, (error) => {
        try {
          if (!error) {
            console.log(`${name} created successfully`);
          } else {
            console.log(`${name} creation failed`);
          }
        } catch (error) {
          console.log(`${name} creation failed`);
        }
      });

      const filePath = `src/${name}/${file}`;
      const content = fileData[file] || "";

      fs.writeFile(filePath, content, function (error, file) {
        if (!error) {
          console.log(`${filePath} has been created`);
        } else {
          console.log("There is some error while creating the file");
        }
      });
    });
  });
}

export default Main;
