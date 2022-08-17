/* eslint-disable */
import Book from './books.js';

export const displayBooks = (object) => `<li class="${object.author}">
    <span class="title">${object.author} by ${object.book}</span>
    <button class="remove">Remove</button></li>`;
export const addContent = () => {
  const form = document.querySelector('.form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newBook = new Book();
    newBook.add();
    newBook.remove();
  });
};
