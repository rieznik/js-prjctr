'use strict';

import { renderList } from './renderList.js';
import {
} from

/*
  Google: todo list html css template
  https://freefrontend.com/bootstrap-to-do-lists/
  https://bbbootstrap.com/snippets/awesome-todo-list-template-25095891
 */

console.log('Workshop 1');

const startApp = () => {
  console.log('Workshop1 startApp');
  renderList(['Sleep', 'Read', 'Sleep more']);

  formListener();
};

document.addEventListener('DOMContentLoaded', startApp);
