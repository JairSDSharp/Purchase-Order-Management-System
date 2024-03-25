// Class to represent a book in the library.
class Book {
  // Constructor to initialize a book with title, author, and number of pages.
  constructor(title, author, numPages) {
    this.title = title; // Title of the book.
    this.author = author; // Author of the book.
    this.numPages = numPages; // Number of pages of the book.
  }

  // Method to get the book information in string format.
  getInfo() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.numPages}`;
  }
}

// Class to represent a collection of books in the library.
class Library {
  // Constructor to initialize a library without books.
  constructor() {
    this.booksList = [];
  }

  // Method to add a book to the library.
  addBook(book) {
    this.booksList.push(book);
  }

  // Method to search for books by author in the library.
  searchBooksByAuthor(author) {
    const booksByAuthor = [];
    for (const book of this.booksList) {
      if (book.author === author) {
        booksByAuthor.push(book);
      }
    }
    return booksByAuthor;
  }

  // Method to display the list of books in the library.
  displayBooks() {
    console.log("List of books in the library:");
    for (const book of this.booksList) {
      console.log(book.getInfo());
    }
  }
}

// Main function to test the library management system.
function main() {
  // Create an instance of the Library class to represent the library.
  const mainLibrary = new Library();

  // Add some books to the library.
  mainLibrary.addBook(
    new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 432)
  );
  mainLibrary.addBook(
    new Book("The Little Prince", "Antoine de Saint-Exupéry", 96)
  );
  mainLibrary.addBook(new Book("1984", "George Orwell", 328));
  mainLibrary.addBook(new Book("Don Quixote", "Miguel de Cervantes", 863));

  // Display the list of books in the library.
  mainLibrary.displayBooks();

  // Search for books by author.
  const author = "Gabriel García Márquez";
  const booksByAuthorFound = mainLibrary.searchBooksByAuthor(author);
  // Display the books by the found author.
  console.log(`Books written by ${author}:`);
  for (const book of booksByAuthorFound) {
    console.log(book.getInfo());
  }
}

main();
