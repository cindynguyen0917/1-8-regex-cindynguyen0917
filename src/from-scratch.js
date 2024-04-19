const helloWorldRegex = (str) => {
  const regEx = /hello\s+world/i
  return regEx.test(str)
};
const hasAVowel = (str) => { };

const hasCatsOrDogs = (str) => {
  const regEx = /(cats|dogs)/i
  return regEx.test(str)
};
const hasVowelStart = (str) => { };

const hasPunctuationEnd = (str) => {
  const regEx = /(\.|\?|\!)$/
  return regEx.test(str)
};
const hasNothingOrDigits = (str) => { };

const hasNoFlippers = (str) => {
  const regEx = /B|C|c|D|E|H|I|K|O|o|X|x|l/
  return !regEx.test(str)
};
const isValidEmail = (str) => { };


const isValidPhoneNumber = (str) => {
  const regEx = /^[\(]?(\d{3})[\)]?[\s\.-](\d{3})[\s\.-](\d{4})$/
  return regEx.test(str)
};

const matchAllNumbers = (str) => { };

const matchAllNumbersAsNumbers = (str) => {
  const regEx = /\d+/g
  const matched = str.match(regEx)
  if (!matched) {
    return []
  } else {
    return matched.map((x) => Number(x))
  }
};
const matchAllWords = (str) => { };

const replaceAllNumbers = (str) => {
  const regEx = /\d+/g
  return str.replace(regEx, '???')
};
const fixFileName = (str) => { };

const nameRedacter = (str) => {
  const regEx = /([A-Z]{2,})/g
  return str.replace(regEx, 'REDACTED')
};
const camelToSnakeCase = (str) => { };

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
