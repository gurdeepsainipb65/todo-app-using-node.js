const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app = express();

const uri = "mongodb://127.0.0.1:27017/ecommerce";
mongoose.connect(uri);
console.log("database connected");

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
app.get("/login",async(req,resp)=>{
  resp.render('login')
}

)

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
  const todo=await Todo.findById(id);
  todo.is_complete = !todo.is_complete
  await todo.save()
  resp.redirect("/");
});