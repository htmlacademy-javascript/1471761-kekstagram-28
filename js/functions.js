const checkLessOrEqual = (basicString, length) => {
  if (basicString.length <= length) {
    return true;
  }
  return false;
};

checkLessOrEqual('проверяемая строка', 20);

const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reversString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reversString += tempString.at(i);
  }
  return tempString === reversString;
};

isPalindrom('ДовОд');

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }

  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
}

extractNumber('1 кефир, 0.5 батона');


const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string
}
myPadStart('q', 4, 'we');


const newPadStart = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength) {
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= minLength ? pad : pad.slice(0, minLength - newResultLength);
    result = actualPad + result;
  }
  return result;
}

newPadStart('1', 2, '0');
