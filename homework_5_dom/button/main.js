import { setStyle, setButtonText, setTimestampMessage } from './setElements.js';
import { getTheme, setTheme, setTimestamp, getTimestamp } from './ls.js';

const buttonElem = document.querySelector('#button');

const initState = () => {
  const timestamp = getTimestamp();
  if (timestamp) {
    setTimestampMessage();
  }

  setStyle();
  setButtonText();
};

initState();

buttonElem.addEventListener('click', () => {
  const theme = getTheme();
  const date = new Date();
  const oppositeTheme = theme === 'light' ? 'dark' : 'light';

  setTheme(oppositeTheme);
  setTimestamp(date);
  setStyle();
  setButtonText();
  setTimestampMessage();
});
