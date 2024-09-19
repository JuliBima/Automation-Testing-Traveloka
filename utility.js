function getFormattedDateAfterDays(daysToAdd) {
  const today = new Date();

  today.setDate(today.getDate() + daysToAdd);

  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

module.exports = { getFormattedDateAfterDays };
