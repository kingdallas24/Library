// An array for storing read list

let library = [];

function addSelection(book) {
  return library.push(book);
}

// Constructor function

function Book(title, author, numberOfPages) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  return addSelection(title);
}

let book1 = new Book("Kingdom", "Yasuhisa Hara", 1500);
let book2 = new Book("Berserk", "Kentaro Miura", 1700);
let book3 = new Book("Attack on Titan", "Hajime Isayama", 1400);

// A function that loops through the array and displays each book on the page

function displayBookList() {
  library.forEach((book) => {
    document.body.innerHTML += book + ", ";
  });
}

displayBookList();
