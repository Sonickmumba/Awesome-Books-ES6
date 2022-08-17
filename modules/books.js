import { displayBooks } from './bookActions.js';

let bookShelf = [];

export default class Book {
  constructor(author, book) {
    this.author = author;
    this.book = book;
  }

  add() {
    const inputAuthor = document.querySelector('.input-author');
    const inputBook = document.querySelector('.input-book');
    const library = document.querySelector('.library');
    const errorMessage = document.querySelector('.errormessage');
    if (inputAuthor.value !== '' && inputBook.value !== '') {
      const currentBook = [];

      currentBook.push(
        {
          author: inputAuthor.value,
          book: inputBook.value,
        },
      );
      this.filter = bookShelf.filter((x) => x.book === currentBook[0].book);
      if (this.filter.length > 0) {
        errorMessage.style.display = 'none';
        inputAuthor.value = '';
        inputBook.value = '';
      }
      bookShelf.push(
        {
          author: inputAuthor.value,
          book: inputBook.value,
        },
      );
      if (bookShelf.length > 0) {
        currentBook.forEach((book) => library.insertAdjacentHTML('beforeend', displayBooks(book)));
      }
    }
    inputAuthor.value = '';
    inputBook.value = '';
    localStorage.setItem('books', JSON.stringify(bookShelf));
  }

  remove = () => {
    if (bookShelf.length > 0) {
      const removebtn = document.querySelectorAll('.remove');
      removebtn.forEach((element) => element.addEventListener('click', () => {
        const parentNodeClass = element.parentNode.className;
        element.parentNode.remove();
        bookShelf = bookShelf.filter((x) => x.author !== parentNodeClass);
        localStorage.setItem('books', JSON.stringify(bookShelf));
      }));
    }
  };
}