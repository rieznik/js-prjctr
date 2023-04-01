import { getTimestamp, getTheme } from './ls.js';

export const setTimestampMessage = () => {
  const theme = getTheme();
  const timestampMessageElem = document.getElementById('timestamp-msg');
  const timestamp = getTimestamp();
  const previousTheme = theme === 'light' ? 'dark' : 'light';

  timestampMessageElem.innerText = `Last time on the ${previousTheme} side: ${timestamp}`;
};

export const setButtonText = () => {
  const theme = getTheme();
  const buttonElem = document.querySelector('#button');

  buttonElem.innerText =
    theme === 'light'
      ? 'Come to the dark side, we have 🍪'
      : 'Turn to the light side, we have ☕️';
};

export const setStyle = () => {
  const theme = getTheme();
  const bodyElem = document.querySelector('body');

  bodyElem.className = theme === 'light' ? 'light-theme' : 'dark-theme';
};
