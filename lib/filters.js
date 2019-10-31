const moment = require("moment");

exports.date = (date, format) => moment(date).format(format);

exports.sortByKey = (array, key) => {
  return [...array].sort((a, b) => a[key].localeCompare(b[key]));
};
