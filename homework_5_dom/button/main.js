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
    timestampMessageElem.innerText = timestampMessage;
  }
};

initState();

buttonElem.addEventListener('click', () => {
  const theme = localStorage.getItem('theme');
  const oppositeTheme = theme === 'light' ? 'dark' : 'light';

  setTheme(oppositeTheme);
  updateTimestampMessage(theme);
});
