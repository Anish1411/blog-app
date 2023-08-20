const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");  // consist variable like __dirname

dotenv.config()  //search on internet
app.use(express.json());  //mi
app.use("/images", express.static(path.join(__dirname, "/images")))  //express.static search


// console.log(process.env.MONGO_URL);

// connected to mongo 
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,           // depricted warning
}).then(console.log("connected to mongo "))    //return promise
  .catch((err)=> console.log(err));

  const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
      cb(null, "images");                       // search for multer 25- 37
    },
    filename: (req, file, cb)=>{
      cb(null, req.body.name);
    }
  });

  const upload = multer ({ storage: storage});

  app.post("/api/upload", upload.single("file"), (req, res) =>{
    res.status(200).json("File has been uploaded");
  });
  
app.use("/api/auth", authRoute);   //middleware app.use
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
// app.use("/", (req, res) =>{
//     console.log("Backend is running");
// })

app.listen("5000", () =>{
    console.log("Backend");
});