const bookModel = require("../models/booksModel");

module.exports.add = async (req, res) => {
  try {
    const data = req.body;
    const newBook = new bookModel(data);
    await newBook.save().then(() => {
      res.status(200).json({ message: "book added successfully" });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getBooks = async (req, res) => {
  let books;
  try {
    books = await bookModel.find();
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getBooksById = async (req, res) => {
  let book;
  const id = req.params.id;
  try {
    book = await bookModel.findById(id);
    res.status(200).json({ book });
  } catch (error) {
    console.log(error);
  }
};
module.exports.updateBook = async (req, res) => {
  const id = req.params.id;
  const { bookname, description, author, image, price } = req.body;
  let book;
  try {
    book = await bookModel.findByIdAndUpdate(id, {
      bookname,
      description,
      author,
      image,
      price,
    });
    await book
      .save()
      .then(() => res.json({ message: "Data updated successfully", book }));
  } catch (error) {
    console.log(error);
  }
};
module.exports.deleteBook =  async (req, res) => {
    const id = req.params.id;
    try {
      await bookModel
        .findByIdAndDelete(id)
        .then(() =>
          res.status(201).json({ message: "Book deleted successfully" })
        );
    } catch (error) {
      console.log(error);
    }
  }