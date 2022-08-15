let form = document.getElementById("form");
let titleInput = document.getElementById("titleInput");
let pagesInput = document.getElementById("pagesInput");
let authorInput = document.getElementById("authorInput");
let readInput = document.getElementById("readInput");
let titleMsg = document.getElementById("titleMsg");
let authorMsg = document.getElementById("authorMsg");
let pagesMsg = document.getElementById("pagesMsg");
let books = document.getElementById("books");
let add = document.getElementById("add");
let changeRead = document.querySelector(".changeRead");

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

let myLibrary = [];

let acceptData = () => {
  checkReadStatus();
  myLibrary.push({
    title: titleInput.value,
    author: authorInput.value,
    pages: pagesInput.value,
    read: readInput.value,
  });

  function checkReadStatus() {
    if (readInput.checked == true) {
      readInput.value = "Read";
    } else {
      readInput.value = " Not Read";
    }
  }

  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  console.log(myLibrary);
  createBook();
};

let createBook = () => {
  books.innerHTML = "";
  myLibrary.map((x, y) => {
    return (books.innerHTML += ` <div id = ${y}>
    <span class="fw-bold">${x.title}</span>
    <span >${x.author}</span>
    <span>${x.pages}</span>
    <span>${x.read}</span>

    <span class="options">
   
      <i onClick = "editBook(this)"   data-bs-toggle="modal"
      data-bs-target="#form"class="fa-solid fa-pen-to-square"></i>
      <i onClick = "deleteBook(this); createBook()" class="fa-solid fa-trash"></i>
    </span>
  </div>`);
  });

  form.reset();
};

let deleteBook = (e) => {
  e.parentElement.parentElement.remove();
  console.log(e.parentElement.parentElement.id);
  myLibrary.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
};

let editBook = (e) => {
  let selectedBook = e.parentElement.parentElement;
  titleInput.value = selectedBook.children[0].innerHTML;
  authorInput.value = selectedBook.children[1].innerHTML;
  pagesInput.value = selectedBook.children[2].innerHTML;

  deleteBook(e);
};

(() => {
  myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
  createBook();
})();
