const router = require("express").Router();
const bookModel = require("../models/booksModel");

const bookController = require("../controller/BooksController");
//Post request for add books
router.post("/add", bookController.add);

//Get request for fetch all books
router.get("/getBooks", bookController.getBooks);

//get request by id for fetch book;
router.get("/getBooks/:id", bookController.getBooksById);

//update book by id
router.put("/updateBook/:id", bookController.updateBook);

// delete book by id
router.delete("/deleteBook/:id", bookController.deleteBook);

module.exports = router;
