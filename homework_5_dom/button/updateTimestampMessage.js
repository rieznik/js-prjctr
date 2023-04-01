import { getFormattedDate } from './getFormattedDate.js';

const timestampMessageElem = document.getElementById('timestamp-msg');

export const updateTimestampMessage = (theme) => {
  const date = new Date();
  const timestamp = getFormattedDate(date);

  localStorage.setItem('timestamp', `${timestamp}`);

  timestampMessageElem.innerText = `Last time on the ${theme} side: ${timestamp}`;
};
