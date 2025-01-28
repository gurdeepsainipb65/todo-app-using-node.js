// const { name } = require("ejs");
// const { MongoClient } = require("mongodb");
// const db = ConnectToDB();
// const collection = db.collection("users");

// function ConnectToDB() {
//   const client = new MongoClient("mongodb://127.0.0.1:27017/");
//   client.connect();
//   console.log("DataBase connected");
//   const db = client.db("ecommerce");
//   return db;
// }

// function insertintodb() {
//   const user = [
//     {
//       name: "harjeet",
//       age: 57,
//       work: "docter",
//     },
//     {
//       name: "preet",
//       age: 28,
//       work: "painter",
//     },
//     {
//       name: "ram",
//       age: 21,
//       work: "coding",
//     },
//   ];

//   const result = collection.insertMany(user);
// }

// async function readfromdb() {
//   const result = await collection.find({ age: 21 }).toArray();
//   console.log(result);
// }

// readfromdb();
