let myLibrary = [
  {
    title: "The Cat in the Hat",
    author: "Dr. Seuss",
    year: 1957,
    read: 'yes'
  },
  {
    title: "The Lorax",
    author: "Dr. Seuss",
    year: 1972,
    read: 'yes'
  },
  { 
    title: "Green Eggs and Ham too long for the title",
    author: "Dr. Seuss",
    year: 1960,
    read: 'no'
  },
  {
    title: "The Cat in the Hat",
    author: "Dr. Seuss",
    year: 1957,
    read: 'yes'
  },
  {
    title: "The Lorax",
    author: "Dr. Seuss",
    year: 1972,
    read: 'yes'
  },
  { 
    title: "Green Eggs and Ham too long for the title",
    author: "Dr. Seuss",
    year: 1960,
    read: 'no'
  }
];

class Book {
  constructor(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
  }
}

// Book.prototype.info = function() {
//     let readOrNot = this.read == 'yes' ?
//     'has been read' : 'not read yet';
//     return `${this.title}, by ${this.author}, in ${this.pages}, ${readOrNot}`;
// }

const main = document.getElementById('shelf');

myLibrary.forEach(book => {

    let bookCard = document.createElement('div');
    bookCard.classList.add("book-card");
    let cardTitle = document.createElement('h2');
    cardTitle.classList.add("title");
    cardTitle.textContent = book.title;
    let cardAuthor = document.createElement('p');
    cardAuthor.classList.add("author");
    cardAuthor.textContent = `by: ${book.author}`;
    let cardYear = document.createElement('p');
    cardYear.classList.add("year");
    cardYear.textContent = `published: ${book.year}`;
    let cardRead = document.createElement('p');
    cardRead.classList.add("read");
    cardRead.textContent = `read: ${book.read}`;
    let cardReturn = document.createElement('p');
    cardReturn.classList.add("return");
    cardReturn.textContent = "RETURN BOOK";

    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardAuthor);
    bookCard.appendChild(cardYear);
    bookCard.appendChild(cardRead);
    bookCard.appendChild(cardReturn);

    main.appendChild(bookCard);

})