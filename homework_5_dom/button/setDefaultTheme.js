import { getTheme, setTheme } from './ls.js';

const setDefaultTheme = () => {
  const theme = getTheme();

  if (!theme) {
    setTheme('light');
  }
};

setDefaultTheme();
