const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const items = ["Do Exercise", "Do Work", "Eat Food"];
const workitems = [];

app.get("/", function (req, res) {
 
  let day=date();

  res.render("list", { listTitle: day, newlistitems: items });
});

app.post("/", function (req, res) {
  item = req.body.newitem;
  // console.log(item);
  items.push(item);
  res.redirect("/");
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newlistitems: workitems });
});

app.post("/work", function (req, res) {
  let item = req.body.newitem;
  if (req.body.list === "work") {
    workitems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
