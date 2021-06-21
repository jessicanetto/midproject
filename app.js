const express = require("express");
const cors = require("cors");

const app = express();
const bodyParser = require("body-parser");

const transactionsController = require("./Controllers/transactionsController.js");
const budgetController = require("./Controllers/budgetController.js");
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// this allows any app/site from anywhere access your API. This is a great way to start to get things up and running. Later, add restrictions, as needed.
app.use(cors());
// const corsOptions ={
//   origin:'http://localhost:3000',
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the budgeting app");
});

app.use("/transactions", transactionsController);
app.use("/budget", budgetController);

app.get("*", (req, res) => {
  res.status(404).send("PAGE NOT FOUND");
});

module.exports = app;
