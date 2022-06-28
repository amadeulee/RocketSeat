module.exports = function (string) {
  if (process.argv.indexOf(string)) {
    return process.argv[process.argv.indexOf(string) + 1];
  }
};
