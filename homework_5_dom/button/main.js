import { setTheme } from './setTheme.js';
import { updateTimestampMessage } from './updateTimestampMessage.js';

const buttonElem = document.querySelector('#button');
const timestampMessageElem = document.getElementById('timestamp-msg');

const initState = () => {
  const theme = localStorage.getItem('theme');
  const timestampMessage = localStorage.getItem('timestampMessage');

  if (!theme || theme === 'light') {
    setTheme('light');
  } else {
    setTheme('dark');
  }

  if (timestampMessage) {
    timestampMessageElem.classList.remove('hidden');
    timestampMessageElem.innerText = timestampMessage;
  }
};

initState();

const toggleTheme = (theme) => {
  if (theme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
};

buttonElem.addEventListener('click', () => {
  const theme = localStorage.getItem('theme');
  toggleTheme(theme);
  updateTimestampMessage(theme);
});
