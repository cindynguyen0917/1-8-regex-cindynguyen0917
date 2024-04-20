const helloWorldRegex = (str) => {
  const regEx = /hello\s+world/i
  return regEx.test(str)
};
const hasAVowel = (str) => {
  if (str.length === 0) return false
  const regEx = /[aeiou]/i
  return regEx.test(str)
}
const hasCatsOrDogs = (str) => {
  const regEx = /(cats|dogs)/i
  return regEx.test(str)
};

const hasVowelStart = (str) => {
  const regEx = /^(a|e|i|o|u)/i
  return regEx.test(str)
}

const hasPunctuationEnd = (str) => {
  const regEx = /(\.|\?|\!)$/
  return regEx.test(str)
};
const hasNothingOrDigits = (str) => {
  const guard = /[a-zA-Z]+/
  if (guard.test(str)) return false
  const regEx = /^$|\d+/
  return regEx.test(str)
}
const hasNoFlippers = (str) => {
  const regEx = /B|C|c|D|E|H|I|K|O|o|X|x|l/
  return !regEx.test(str)
};
const isValidEmail = (str) => {
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  return regEx.test(str)
}

const isValidPhoneNumber = (str) => {
  const regEx = /^[\(]?(\d{3})[\)]?[\s\.-](\d{3})[\s\.-](\d{4})$/
  return regEx.test(str)
};

const matchAllNumbers = (str) => {
  const regEx = /\d+/g
  const matched = str.match(regEx)
  if (!matched) {
    return []
  } else {
    return matched
  }
}
const matchAllNumbersAsNumbers = (str) => {
  const regEx = /\d+/g
  const matched = str.match(regEx)
  if (!matched) {
    return []
  } else {
    return matched.map((x) => Number(x))
  }
};
const matchAllWords = (str) => {
  const regEx = /[a-zA-Z']+/g
  const matched = str.match(regEx)
  if (!matched) {
    return []
  } else {
    return matched
  }
}
const replaceAllNumbers = (str) => {
  const regEx = /\d+/g
  return str.replace(regEx, '???')
};

const fixFileName = (str) => {
  const regEx = /\s+/g
  return str.replace(regEx, '_')
}
const nameRedacter = (str) => {
  const regEx = /([A-Z]{2,})/g
  return str.replace(regEx, 'REDACTED')
};
const camelToSnakeCase = (str) => {
  const regEx = /[A-Z]/g
  return str.replace(regEx, (match) => { return '_' + match.toLowerCase() }
  )
};

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
