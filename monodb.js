// const http = require("http")
// const server =http.createServer((request,response)=>{
//     response.writeHead(200,{"content-type":"text/html"})
//     response.end("<h1>hello world!!!<h1/>")

// })
// server.listen(5000,()=>{ console.log("your server is running at http://localhost:5000")})

// const express=require("express")
// const app =express()
// app.get("/",(request,response)=>{
//     response.send("<h1>your app is runningh")
// })

// app.listen(4000,()=>{
//     console.log("your server is runningh at http://localhost:4000")
// })

// const express = require("express");
// const app = express();

// app.use(express.static("public"))

// app.listen(4000,()=>{
//     console.log("Server is running at http://localhost:4000")
// })

// const express = require("express");
// const app = express();

// app.set("view engine", "ejs");
// app.set("views", "./views");

// app.get("/", (req, resp) => {
//   resp.render("index", { user: "John" });
// });

// app.get("/about", (req, resp) => {
//     resp.render("about");
//   });

// app.listen(4000, () => {
//   console.log("Server is running at http://localhost:4000");
// });

// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017")
// .then(()=>{
//     console.log("Database connected succesfully")
// })
// .catch(err=>{
//     console.log(err)
// })

// const { name } = require("ejs");
// const { MongoClient } = require("mongodb");

// // Connection URI and database name
// const uri = "mongodb://127.0.0.1:27017";
// const dbName = "db";

// async function connectToDB() {
//   const client = new MongoClient(uri);

//   try {
//     // Connect to the MongoDB cluster
//     await client.connect();
//     console.log("Connected to MongoDB");

//     // Access the database
//     const db = client.db(dbName);
//     return db;
//   } catch (err) {
//     console.error("Failed to connect to MongoDB", err);
//   }
// }

// async function insertdata(){
//   const db = await connectToDB()
//   const collection = db.collection("users")

//   const newUser = {
//     name: "John Doe",
//     age: 21,
//     is_student: true
//   }

//   const result = await collection.insertOne(newUser)

//   console.log("Data inserted: "+ result.insertedId)
// }

// async function findDocuments() {
//   const db = await connectToDB();
//   const collection = db.collection("users");

//   const users = await collection.find({}).toArray();
//   console.log("Found Users:", users);
// }

// findDocuments();

// async function insertdata2(){
//   const db = await connectToDB()
//   const collection = db.collection("users")
//   const newUser={
//     name:"preet",
//     age:39,
//     is_student:true,
//   }
//   const result=await collection.insertOne(newUser)
//   console.log("Data inserted: "+ result.insertedId)
// }

// // insertdata2()