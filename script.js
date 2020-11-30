let myLibrary = [];

const Book = {};


/* function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function(){
        return title + ' by ' + author + ', ' + pages + ' pages, ' + status;
    }
} */

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'read');

function createBook(form){
    let title = form.title.value;
    let author = form.author.value;
    let pages = form.pages.value;
    let status = form.status.value;

    return title, author, pages, status;
}

const newBook = new Book(title, author, pages, status);

// Need input boxes to pass the title, author, pages, and status from a user
// These parameters will be used to create a new book
// const book = new Book(); // Add parameters in here to create the new book object that will be passed to the array
// This book is then passed to the addBooktoLibrary function to add to the array

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    console.log(myLibrary);
}

console.log(myLibrary);