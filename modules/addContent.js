import Book from './books.js';

const addContent = () => {
  const form = document.querySelector('.form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newBook = new Book();
    newBook.add();
    newBook.remove();
  });
};

export default addContent;