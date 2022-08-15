let form = document.getElementById("form");
let titleInput = document.getElementById("titleInput");
let pagesInput = document.getElementById("pagesInput");
let authorInput = document.getElementById("authorInput");
let titleMsg = document.getElementById("titleMsg");
let authorMsg = document.getElementById("authorMsg");
let pagesMsg = document.getElementById("pagesMsg");
let books = document.getElementById("books");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (titleInput.value === "") {
    console.log("fail");
    titleMsg.innerHTML = "Please fill out the title.";
  } else {
    console.log("success");
    titleMsg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", " ");
    })();
  }
};

let myLibrary = {};

let acceptData = () => {
  myLibrary["title"] = titleInput.value;
  myLibrary["author"] = authorInput.value;
  myLibrary["pages"] = pagesInput.value;

  createBook();
};

let createBook = () => {
  books.innerHTML += ` <div>
  <span class="fw-bold">Title: ${myLibrary.title}</span>
  <span >Author: ${myLibrary.author}</span>
  <span>Number of Pages: ${myLibrary.pages}</span>
  <span class="options">
    <i class="fa-solid fa-pen-to-square"></i>
    <i class="fa-solid fa-trash"></i>
  </span>
</div>`;
  form.reset();
};

let resetForm = () => {
  textIn;
};
