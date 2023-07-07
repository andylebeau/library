let myLibrary = [
  {
    title: "The Cat In The Hat",
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
    title: "Green Eggs And Ham",
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

const main = document.getElementById('main');

for (let i = 0; i < myLibrary.length; i++) {
    let title = myLibrary[i].title;
    let  author = myLibrary[i].author;
    let year = myLibrary[i].year;
    let read = myLibrary[i].read;
    console.log(title, author, year, read)
    let bookCard = document.createElement('div');
    bookCard.classList.add("card");
    let cardTitle = document.createElement('p');
    cardTitle.textContent = title;
    let cardAuthor = document.createElement('p');
    cardAuthor.textContent = author;
    let cardYear = document.createElement('p');
    cardYear.textContent = year;
    let cardRead = document.createElement('p');
    cardRead.textContent = read;

    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardAuthor);
    bookCard.appendChild(cardYear);
    bookCard.appendChild(cardRead);
    main.appendChild(bookCard);

}