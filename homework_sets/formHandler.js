const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');

const emoji = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];

export const insertRandomEmoji = () => {
  inputEl.value = emoji[Math.floor(Math.random() * emoji.length)];
};

export const formHandler = (cb) => {
  formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    cb(inputEl.value);
    insertRandomEmoji();
  });
};
