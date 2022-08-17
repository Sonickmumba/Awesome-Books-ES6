const navEvents = () => {
  const bookWrapper = document.querySelector('.book-wrapper');
  const formWrapper = document.querySelector('.form-wrapper');
  const contactWrapper = document.querySelector('.contact-wrapper');

  const bookListButton = document.querySelector('#nav #booklist');
  const addButton = document.querySelector('#nav #addnew');
  const contactButton = document.querySelector('#nav #contact-click');

  bookListButton.addEventListener('click', (e) => {
    e.preventDefault();
    bookWrapper.style.display = 'flex';
    formWrapper.style.display = 'none';
    contactWrapper.style.display = 'none';
  });
  addButton.addEventListener('click', (e) => {
    e.preventDefault();
    bookWrapper.style.display = 'none';
    formWrapper.style.display = 'flex';
    contactWrapper.style.display = 'none';
  });
  contactButton.addEventListener('click', (e) => {
    e.preventDefault();
    bookWrapper.style.display = 'none';
    formWrapper.style.display = 'none';
    contactWrapper.style.display = 'flex';
  });
};

export default navEvents;