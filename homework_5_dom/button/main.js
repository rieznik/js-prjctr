import {
  setStyle,
  setButtonText,
  setTimestampMessage,
} from './changeElements.js';
import { getTheme, setTheme, setTimestamp, getTimestamp } from './ls.js';

const buttonElem = document.querySelector('#button');

const initState = () => {
  const theme = getTheme();
  const timestamp = getTimestamp();

  if (!theme) {
    setTheme('light');
  }

  setStyle();
  setButtonText();

  if (timestamp) {
    setTimestampMessage();
  }
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
