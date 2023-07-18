const shelf = document.querySelector('#shelf');
let myLibrary = [];

const date = new Date().toLocaleDateString()
let returnDate = new Date()
returnDate.setDate(returnDate.getDate() + 30);
returnDate = returnDate.toLocaleDateString()

function addLocalStorage() {
    localStorage.setItem(
        'libraryArchive',
        JSON.stringify(myLibrary)
    );
    myLibrary = JSON.parse(localStorage.getItem('libraryArchive')) || [];
    saveAndyPopulateShelf();
}

function Book(title, author, checkOut, returnBy, read) {
  this.title = title;
  this.author = author;
  this.checkOut = checkOut;
  this.returnBy = returnBy;
  this.read = read;
}

const formSubmit = document.querySelector("#new-book");
formSubmit.addEventListener("submit", function(e) {
    e.preventDefault();
    addFormToLibrary();
    formSubmit.reset();
})

function addFormToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let read = document.querySelector("#read").value;
    let newBook = new Book(title, author, date, returnDate, read);
    myLibrary.push(newBook);
    saveAndyPopulateShelf();
}

function addBook(book, cardNumber) {

    let bookCard = document.createElement('div');
    bookCard.setAttribute('id', cardNumber)
    bookCard.classList.add("book-card");

    let cardTitle = document.createElement('h2');
    cardTitle.classList.add("title");
    cardTitle.textContent = book.title;

    let cardAuthor = document.createElement('p');
    cardAuthor.classList.add("author");
    cardAuthor.textContent = `by: ${book.author}`;

    let cardCheckOut = document.createElement('p');
    cardCheckOut.classList.add("check-out");
    cardCheckOut.textContent = `check out: ${date}`;

    let cardReturnBy = document.createElement('p');
    cardReturnBy.classList.add("return-by");
    cardReturnBy.textContent = `return by: ${returnDate}`;

    let cardRead = document.createElement('p');
    cardRead.classList.add("read");
    cardRead.textContent = `${book.read}`;

    let cardReturn = document.createElement('p');
    cardReturn.classList.add("return");
    cardReturn.textContent = "RETURN BOOK";

    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardAuthor);
    bookCard.appendChild(cardCheckOut);
    bookCard.appendChild(cardReturnBy);
    bookCard.appendChild(cardRead);
    bookCard.appendChild(cardReturn);

    bookCard.querySelector(".read").addEventListener('click', (e) => {
        if (book.read === 'Please return book') {
            book.read = 'Read it again!';
        }
        else {book.read = 'Please return book'}
        rePopulateShelf()
    })

    bookCard.querySelector(".return").addEventListener('click', (e) => {
        const index = e.target.parentElement.getAttribute('id')
        removeCard(index);
    })

    shelf.appendChild(bookCard);
    
}

function removeCard (i) {
    myLibrary.splice(i, 1);
    saveAndyPopulateShelf()
}

function rePopulateShelf() {
    shelf.textContent = '';
    myLibrary.map((b, i) => addBook(b, i))
}

function saveAndyPopulateShelf() {
    localStorage.setItem('libraryArchive', JSON.stringify(myLibrary));
    rePopulateShelf();
}

addLocalStorage();