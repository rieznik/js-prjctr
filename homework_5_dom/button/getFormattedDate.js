export const getFormattedDate = (date) => {
  const [day, month, year, hours, minutes, seconds] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};
