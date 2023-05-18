import { insertRandomEmoji, formHandler } from './formHandler.js';
import { renderer } from './renderer.js';

const startApp = () => {
  const array = new Array();
  const set = new Set();

  insertRandomEmoji();

  formHandler((item) => {
    array.push(item);
    set.add(item);
    renderer(array, set);
  });
};

document.addEventListener('DOMContentLoaded', startApp);
