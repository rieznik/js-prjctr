import { getFormattedDate } from './getFormattedDate.js';

const timestampMessageElem = document.getElementById('timestamp-msg');

export const updateTimestampMessage = (theme) => {
  const date = new Date();

  if (timestampMessageElem.classList.contains('hidden')) {
    timestampMessageElem.classList.remove('hidden');
  }

  const timestampMessage = `Last time on the ${theme} side: ${getFormattedDate(
    date
  )}`;

  localStorage.setItem('timestampMessage', `${timestampMessage}`);
  timestampMessageElem.innerText = timestampMessage;
};
