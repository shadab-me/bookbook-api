const express = require("express");
const router = express.Router();
const Books = require("../models/Books");

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
