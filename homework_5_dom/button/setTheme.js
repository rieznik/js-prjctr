const bodyElem = document.querySelector('body');
const buttonElem = document.querySelector('#button');

export const setTheme = (theme) => {
  localStorage.setItem('theme', theme);
  if (theme === 'dark') {
    buttonElem.innerText = 'Turn to the light side, we have ☕️';
    bodyElem.classList.replace('light-theme', 'dark-theme');
  } else {
    buttonElem.innerText = 'Come to the dark side, we have 🍪';
    bodyElem.classList.replace('dark-theme', 'light-theme');
  }
};
