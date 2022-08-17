// export const menuEvents = () => {
//   const menuNavMobile = document.querySelector('.menu-nav-mobile');
//   const menuBar = document.querySelector('.menu-nav-mobile #menu');
//   const page = document.querySelector('#awesome-book-wrapper');
//   const body = document.querySelector('body');
//   const one = document.querySelector('#one');
//   const two = document.querySelector('#two');
//   const three = document.querySelector('#three');

//   const bookWrapper = document.querySelector('.book-wrapper');
//   const formWrapper = document.querySelector('.form-wrapper');
//   const contactWrapper = document.querySelector('.contact-wrapper');

//   menuBar.addEventListener('click', () => {
//     menuNavMobile.classList.toggle('show');
//     body.classList.toggle('show');
//     page.classList.toggle('show');
//     menuBar.classList.toggle('show');
//   });

//   one.addEventListener('click', (e) => {
//     e.preventDefault()
//     menuNavMobile.classList.remove('show');
//     body.classList.remove('show');
//     page.classList.remove('show');
//     menuBar.classList.remove('show');
//     bookWrapper.style.display ='flex';
//     formWrapper.style.display = 'none';
//     contactWrapper.style.display = 'none';
//   });

//   two.addEventListener('click', (e) => {
//     e.preventDefault()
//     menuNavMobile.classList.remove('show');
//     body.classList.remove('show');
//     page.classList.remove('show');
//     menuBar.classList.remove('show');
//     bookWrapper.style.display ='none';
//     formWrapper.style.display = 'flex';
//     contactWrapper.style.display = 'none';
//   });

//   three.addEventListener('click', (e) => {
//     e.preventDefault()
//     menuNavMobile.classList.remove('show');
//     body.classList.remove('show');
//     page.classList.remove('show');
//     menuBar.classList.remove('show');
//     bookWrapper.style.display ='none';
//     formWrapper.style.display = 'none';
//     contactWrapper.style.display = 'flex';
//   });
// }