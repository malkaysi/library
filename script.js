let myLibrary = [];

let newBook;
const table = document.querySelector('table');

function Book(title, author, pages, status){ // Uses input values from html
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    this.pages = document.getElementById('pages').value;
    this.status = document.getElementById('status').value;
    this.info = function(){
        return title + ' by ' + author + ', ' + pages + ' pages, ' + status;
    }
}

function createBook(){ // Creates a book after clicking submit by passing input values to the constructor
    newBook = new Book();
    addBookToLibrary(newBook);
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    // When it's pushed, it should select the table, create a new row, and fill the row with elements
    let tableRow = document.createElement('tr');
    let bookTitle = document.createElement('td');
    let bookAuthor = document.createElement('td');
    let bookPages = document.createElement('td');
    let bookStatus = document.createElement('td');
    let statusButton = document.createElement('button');
    let updateButton = document.createElement('button');

    bookTitle.textContent = newBook.title;
    bookAuthor.textContent = newBook.author;
    bookPages.textContent = newBook.pages;
    bookStatus.textContent = newBook.status;
    statusButton.textContent = 'Remove Book';
    updateButton.textContent = 'Update Status';

    tableRow.appendChild(bookTitle);
    tableRow.appendChild(bookAuthor);
    tableRow.appendChild(bookPages);
    tableRow.appendChild(bookStatus);
    tableRow.appendChild(statusButton);
    tableRow.appendChild(updateButton);

    table.appendChild(tableRow);

    statusButton.addEventListener('click', function (e) {
        tableRow.removeChild(bookTitle);
        tableRow.removeChild(bookAuthor);
        tableRow.removeChild(bookPages);
        tableRow.removeChild(bookStatus);
        tableRow.removeChild(statusButton);
        tableRow.removeChild(updateButton);
    });

    updateButton.addEventListener('click', () => {
        if (bookStatus.innerText == 'Not Read'){
            bookStatus.innerText = 'Read';
        } else if(bookStatus.innerText == 'Read') {
            bookStatus.innerText = 'Not Read';
        }
    });

    console.log(myLibrary);
}

// To remove a book, we need to create a button element
// We give this button element a class
// If the button is clicked, we can run another function to remove the corresponding book
// To do that, we figure out what index the book was in for the library array
