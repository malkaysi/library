let myLibrary = [];


const table = document.querySelector('table');

/* Old code

function Book(title, author, pages, status){ // Uses input values from html
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    this.pages = document.getElementById('pages').value;
    this.status = document.getElementById('status').value;
} */

class Book {
    constructor(title, author, pages, status){
        this.title = document.getElementById('title').value;
        this.author = document.getElementById('author').value;
        this.pages = document.getElementById('pages').value;
        this.status = document.getElementById('status').value;
    }
    
}


function createBook(){ // Creates a book after clicking submit by passing input values to the constructor
    const newBook = new Book();
    addBookToLibrary(newBook);

    return newBook;
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
    bookIndex = newBook.index;

    tableRow.appendChild(bookTitle);
    tableRow.appendChild(bookAuthor);
    tableRow.appendChild(bookPages);
    tableRow.appendChild(bookStatus);
    tableRow.appendChild(statusButton);
    tableRow.appendChild(updateButton);

    table.appendChild(tableRow);

    statusButton.addEventListener('click', function (e) {

        // Think we need to update bookIndex with the latest
        removeBook(tableRow, bookTitle, bookAuthor, bookPages, bookStatus, statusButton, updateButton, bookIndex);

    });

    updateButton.addEventListener('click', () => {
        if (bookStatus.innerText == 'Not Read' || bookStatus.innerText == 'not read'){
            bookStatus.innerText = 'Read';
        } else if(bookStatus.innerText == 'Read') {
            bookStatus.innerText = 'Not Read';
        }
    });

}

function removeBook(tableRow, bookTitle, bookAuthor, bookPages, bookStatus, statusButton, updateButton, bookIndex, newBook){
        

        tableRow.removeChild(bookTitle);
        tableRow.removeChild(bookAuthor);
        tableRow.removeChild(bookPages);
        tableRow.removeChild(bookStatus);
        tableRow.removeChild(statusButton);
        tableRow.removeChild(updateButton);

        myLibrary.splice(myLibrary.indexOf(newBook), 1);

}
