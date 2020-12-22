const express = require("express");
const { route } = require(".");
const books = require("../models/books");
const router = express.Router();
const Books = require("../models/books");

router.get("/", (req, res) => {
  Books.find({}, (err, books) => {
    if (err) next(err);
    res.status(200).json(books);
  });
});

router.post("/new", (req, res) => {
  let bookInfo = {
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    category: req.body.category,
  };
  console.log("Nice");
  Books.create(bookInfo, (err, book) => {
    if (err) next(err);
    res.status(201).send("Done");
  });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  Books.findById(id, (err, book) => {
    if (err) next(err);
    res.status(200).json(book);
  });
});

module.exports = router;
