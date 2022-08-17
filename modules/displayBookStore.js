import displayBooks from './bookActions.js';

const displayBookFromStore = () => {
  let bookShelf = [];
  const library = document.querySelector('.library');
  const storedBooks = JSON.parse(localStorage.getItem('books'));
  bookShelf = storedBooks;
  storedBooks.forEach((element) => {
    library.insertAdjacentHTML('beforeend', displayBooks(element));
    if (bookShelf.length > 0) {
      const removeBtn = document.querySelectorAll('.remove');
      removeBtn.forEach((element) => element.addEventListener('click', () => {
        storedBooks.forEach(() => {
          const parentNodeClass = element.parentNode.className;
          element.parentNode.remove();
          bookShelf = bookShelf.filter((x) => x.author !== parentNodeClass);
          localStorage.setItem('books', JSON.stringify(bookShelf));
        });
      }));
    }
  });
};

export default displayBookFromStore;