const express = require("express");
const transactions = express.Router();
const transArr = require("../Models/transactions.js");

const mid = (req, res, next) => {
  next();
};

const validateBody = (req, res, next) => {
  const { name, date, type, amount, from } = req.body;
  if (!name || !date || !amount || !from) {
    res.status(400).send();
  }
  return next();
};

transactions.get("/", (req, res) => {
  res.status(200).json(transArr);
});

transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  if (transArr[id]) {
    res.status(200).json(transArr[id]);
  } else {
    res.redirect("/404");
  }
});

transactions.post("/", validateBody, (req, res) => {
  console.log(req.body.amount);

  req.body.type = "debit";
  transArr.push(req.body);

  res.json(transArr[transArr.length - 1]);
  //res.redirect("/");
});

// Delete a transaction
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (transArr[id]) {
    const deleted = transArr.splice(id, 1);
    res.json(deleted[0]);
  } else {
    res.redirect("/404");
  }
});

// Update a transaction
transactions.put("/:id", validateBody, (req, res) => {
  const { id } = req.params;
  if (transArr[id]) {
    transArr[id] = req.body;
    res.json(transArr[id]);
  } else {
    res.redirect("/404");
  }
});

module.exports = transactions;
