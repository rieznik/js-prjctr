const formElement = document.querySelector('#form');

export const formListener = (cb) => {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submit', event);
  });
};
