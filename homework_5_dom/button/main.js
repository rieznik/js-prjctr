const button = document.querySelector('#button');
const body = document.querySelector('body');
const timestamp = document.getElementById('timestamp');

const setTimestamp = () => {
  const theme = localStorage.getItem('theme');
  const previousTheme = theme === 'light' ? 'dark' : 'light';
  const date = new Date();
  const [day, month, year, hours, minutes, seconds] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  if (timestamp.classList.contains('hidden')) {
    timestamp.classList.remove('hidden');
  }

  const timeMessage = `Last time on the ${previousTheme} side: ${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

  localStorage.setItem('timestamp', `${timeMessage}`);

  timestamp.innerText = timeMessage;
};

const setDarkTheme = () => {
  localStorage.setItem('theme', 'dark');
  button.innerText = 'Turn to the light side, we have ☕️';
  body.classList.replace('light-theme', 'dark-theme');
};

const setLightTheme = () => {
  localStorage.setItem('theme', 'light');
  button.innerText = 'Come to the dark side, we have 🍪';
  body.classList.replace('dark-theme', 'light-theme');
};

(() => {
  const theme = localStorage.getItem('theme');
  const existingMessage = localStorage.getItem('timestamp');

  if (!theme || theme === 'light') {
    localStorage.setItem('theme', 'light');
  } else {
    setDarkTheme();
  }

  if (existingMessage) {
    timestamp.classList.remove('hidden');
    timestamp.innerText = existingMessage;
    console.log('I am here');
  }
})();

const toggleTheme = () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'light') {
    setDarkTheme();
  } else {
    setLightTheme();
  }
};

button.addEventListener('click', toggleTheme);
button.addEventListener('click', setTimestamp);
