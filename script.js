let myLibrary = [];

let newBook;

function Book(title, author, pages, status){
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    this.pages = document.getElementById('pages').value;
    this.status = document.getElementById('status').value;
    this.info = function(){
        return title + ' by ' + author + ', ' + pages + ' pages, ' + status;
    }
}

function createBook(){ // Creates a book usin
    newBook = new Book();
    addBookToLibrary(newBook);
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    console.log(myLibrary);
}

console.log(myLibrary);
