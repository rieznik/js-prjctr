const arrayEl = document.getElementById('array');
const setEl = document.getElementById('set');

export const renderer = (array, set) => {
  arrayEl.innerText = `${array}`;
  setEl.innerText = `${Array.from(set)}`;
};
