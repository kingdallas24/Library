"use strict";

let container = document.querySelector(".container");
let form = document.getElementById("form-id");
let button = document.querySelector(".addBtn");

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Create book and add to library

function createBook(title, author, pages) {
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  let newBook = new Book(title, author, pages);

  myLibrary.push(newBook);
}

// Display books

function displayBook() {
  let newBook = document.createElement("div");
  let edit = document.createElement("button");
  let remove = document.createElement("button");
  let btnContainer = document.createElement("div");
  edit.textContent = "Edit";
  remove.textContent = "Remove";
  btnContainer.appendChild(edit);
  btnContainer.appendChild(remove);

  newBook.innerHTML = `Title: ${
    myLibrary[myLibrary.length - 1].title
  } </br> Author: ${myLibrary[myLibrary.length - 1].author} </br> Pages: ${
    myLibrary[myLibrary.length - 1].pages
  }`;

  newBook.appendChild(btnContainer);

  container.appendChild(newBook);

  remove.addEventListener("click", (e) => {
    myLibrary.pop();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createBook();
  displayBook();
  form.reset();
});

// function to remove card
