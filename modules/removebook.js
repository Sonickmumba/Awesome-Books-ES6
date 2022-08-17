let bookShelf = [];
const Remove = () => {
  if (bookShelf.length > 0) {
    const removeBtn = document.querySelectorAll('.remove');
    removeBtn.forEach((element) => element.addEventListener('click', () => {
      const parentNodeClass = element.parentNode.className;
      element.parentNode.remove();
      bookShelf = bookShelf.filter((x) => x.author !== parentNodeClass);
      localStorage.setItem('books', JSON.stringify(bookShelf));
    }));
  }
};

export default Remove;