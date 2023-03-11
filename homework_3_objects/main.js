// Duration between dates

const durationBetweenDates = (startDate = '1 Jan 1970', endDate = Date(), units = 'days') => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  switch (units) {
    case 'seconds':
      return (Math.abs(start - end) / 1000).toFixed() + ' ' + units;
    case 'minutes':
      return (Math.abs(start - end) / 1000 / 60).toFixed() + ' ' + units;
    case 'hours':
      return (Math.abs(start - end) / 1000 / 60 / 60).toFixed() + ' ' + units;
    case 'days':
      return (Math.abs(start - end) / 1000 / 60 / 60 / 24).toFixed() + ' ' + units;
    default:
      return 'Please, specify correct units. Available options: "seconds", "minutes", "hours", "days"';
  }
}

durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'); // returns '86400 seconds'
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'); // returns '362 days'
