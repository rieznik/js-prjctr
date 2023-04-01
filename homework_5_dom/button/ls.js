import { getFormattedDate } from './getFormattedDate.js';

const LS_TIMESTAMP_KEY = 'timestamp';
const LS_THEME_KEY = 'theme';

export const getTimestamp = () => {
  return localStorage.getItem(LS_TIMESTAMP_KEY);
};

export const setTimestamp = (date) => {
  localStorage.setItem(LS_TIMESTAMP_KEY, getFormattedDate(date));
};

export const getTheme = () => {
  return localStorage.getItem(LS_THEME_KEY);
};

export const setTheme = (theme) => {
  return localStorage.setItem(LS_THEME_KEY, theme);
};
