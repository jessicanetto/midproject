const express = require("express");
const budget = express.Router();
const budgets = require("../Models/budget.js");
const bodyParser = require("body-parser");

const mid = (req, res, next) => {
  next();
};

const jsonParser = bodyParser.json();

budget.get("/", (req, res) => {
  res.status(200).json(budgets);
});

budget.put("/", jsonParser, (req, res) => {
  console.log(budgets);
  console.log(req.body);
  budgets[0] = req.body;
  res.json(budgets);
  console.log(budgets);
});

module.exports = budget;
