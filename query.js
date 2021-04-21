const db = require("./db");
const Publisher = require("./models/publisher");
const Book = require("./models/book");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const findAll = async () => {
  const books = await Book.find();
  const publishers = await Publisher.find();
  console.log("All Books and Publishers!", books, publishers);
};

const findBook = async () => {
  const book = await Book.find({ title: "The Alchemist" });
  console.log("Book Found!", book);
};

const createBook = async () => {
  const penguinBooks = await Publisher.find({ name: "Penguin Books" });
  const book = [
    {
      title: "High Fidelity",
      author: "Nick Hornby",
      published_date: "2020",
      publisher_id: penguinBooks[0]._id,
    },
  ];
  await Book.insertMany(book);
  console.log("Book Added!", book);
};

const updateBook = async () => {
  const book = await Book.updateOne(
    { title: "The Power of Now" },
    { $set: { published_date: "2004" } }
  );
  console.log("Book Added!", book);
};

const deleteBook = async () => {
  const book = await Book.deleteOne({
    title: "Zen and the Art of Motorcycle Maintenance",
  });
  console.log("Book Added!", book);
};

const run = async () => {
  await findAll();
  // await findBook();
  // await createBook();
  // await updateBook();
  // await deleteBook();
  process.exit();
};

run();
