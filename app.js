const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app = express();

const uri =
  "mongodb+srv://gurdeepsainig2001:1uIX4u1TFnHq05fU@cluster0.owdx5.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,      // Use new MongoDB connection string parser
    useUnifiedTopology: true,   // Use new topology engine
    serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if the server is unreachable
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit the process with failure
  });


const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  is_complete: {
    type: Boolean,
    default: false,
  },
});
const Todo = mongoose.model("Todo", TodoSchema);

app.set("view engine", "ejs");

app.set("views", "./views");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, resp) => {
  const todos = await Todo.find();
  resp.render("index", { todos });
});

app.post("/add", async (req, resp) => {
  const { title } = req.body;
  Todo.create({ title });
  resp.redirect("/");
});
app.get("/login", async (req, resp) => {
  resp.render("login");
});

app.post("/delete/:id", async (req, resp) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  resp.redirect("/");
});

app.listen(5000, () => {
  console.log("your server run at http://localhost:5000");
});

app.post("/complete/:id", async (req, resp) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  todo.is_complete = !todo.is_complete;
  await todo.save();
  resp.redirect("/");
});

module.exports = app;
