/**
 * Calculates the days left until the next New Year's Day.
 * @param {Date | string} targetDate - The current date or a date string in "DD.MM.YYYY" format.
 * @returns {number} - The number of days until the next New Year's Day.
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let currentDate: Date;

  if (typeof targetDate === 'string') {
    const parts = targetDate.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid date format');
    }

    const day = parseInt(parts[0]  '', 10);
    const month = parseInt(parts[1]  '', 10) - 1;
    const year = parseInt(parts[2]  '', 10);

    if (isNaN(day)  isNaN(month)  isNaN(year)) {
      throw new Error('Invalid date');
    }

    currentDate = new Date(year, month, day);
    if (currentDate.getDate() !== day  currentDate.getMonth() !== month || currentDate.getFullYear() !== year) {
      throw new Error('Invalid date');
    }
  } else {
    currentDate = targetDate;
  }

  if (isNaN(currentDate.getTime())) {
    throw new Error('Invalid date');
  }

  currentDate.setHours(0, 0, 0, 0);

  const nextNewYear = new Date(currentDate.getFullYear() + 1, 0, 1);

  const timeDifference = nextNewYear.getTime() - currentDate.getTime();

  const daysLeft = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  return daysLeft;
};
