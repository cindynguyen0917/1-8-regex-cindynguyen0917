const swapAllCases = (str) => {
  const regEx = /\w/gi
  return str.replace(regEx, (match) => {
    const matchUpper = match.toUpperCase()
    return match === matchUpper ? match.toLowerCase() : matchUpper;
  })
};

module.exports = {
  swapAllCases,
};
