function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function(){
        return title + ' by ' + author + ', ' + pages + ' pages, ' + status;
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'read');

theHobbit.info();

console.log(theHobbit.info());