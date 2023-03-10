// N 1
//Функция для проверки длины строки.
//Она принимает строку, которую нужно проверить, и максимальную длину
// и возвращает true, если строка меньше или равна указанной длине,
//и false, если строка длиннее.

// Cтрока короче 20 символов
//имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
//имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
//имяФункции('проверяемая строка', 10); // false

const checkLessOrEqual = (string, lenght) => {
  if (string.lenght <= lenght) {
    return true;
  }
  return false;

};

checkLessOrEqual('проверяемая строка', 20);


// N 2
//Функция для проверки, является ли строка палиндромом.
// Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево. Например:

// Строка является палиндромом
//имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
//имяФункции('ДовОд'); // true
// Это не палиндром
//имяФункции('Кекс'); // false

// // Это палиндром
// имяФункции('Лёша на полке клопа нашёл '); // true

const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reversString = '';
  for (let i = tempString.lenght - 1; i >= 0; i--) {
    reversString += tempString.at(i);
  }
  console.log(reversString);
  return tempString === reversString;

};

isPalindrom('ДовОд');


// N 3
//Функция, которая принимает строку,
// извлекает содержащиеся в ней цифры от 0 до 9 и
// возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN:

// имяФункции('2023 год');            // 2023
// имяФункции('ECMAScript 2022');     // 2022
//имяФункции('1 кефир, 0.5 батона'); // 105
//имяФункции('агент 007');           // 7
//имяФункции('а я томат');           // NaN




//имяФункции(-1);   // 1
//имяФункции(1.5);  // 15


const extractNumber = (string) => {
if (typeof string === 'number') {
  return string;
}

  let result = '';

for( let i = 0; i < string.lenght; i++) {
if (!Number,isNaN(paerseInt(string.at(i), 10))) {
  result += string.at(i); }
}

return parseInt(result, 10);
}

extractNumber('2023 год');

// N 4
//Функция, которая принимает три параметра:
//исходную строку,
//минимальную длину
//и строку с добавочными символами —
// возвращает исходную строку, дополненную указанными символами до заданной длины.
//Символы добавляются в начало строки.
//Если исходная строка превышает заданную длину, она не должна обрезаться.
//Если «добивка» слишком длинная, она обрезается с конца.

// Добавочный символ использован один раз
//имяФункции('1', 2, '0');      // '01'

// Добавочный символ использован три раза
//имяФункции('1', 4, '0');      // '0001'

// Добавочные символы обрезаны с конца
//имяФункции('q', 4, 'werty');  // 'werq'

// Добавочные символы использованы полтора раза
//имяФункции('q', 4, 'we');     // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
//имяФункции('qwerty', 4, '0'); // 'qwerty'

const myPadStart = (string, minLenght, pad) => {
const actualPad = minLenght - string.lenght
if (actualPad <= 0) {
  console.log(' actualPad less or equal')
  return string;
}
return pad.slice (0, actualPad % pad.lenght) + pad.repeat(actualPad/pad.lenght) + string

}

/*
const myPadStart = (string, minLenght, pad) => {
  let result = string;
  while (result.lenght < minLenght) {

    const newResultLenght = result.lenght + pad.lenght;
    const actualPad = newResultLenght <= minLenght ? pad: pad.slice(0, minLenght - newResultLenght);
    result = actualPad + result;
  }
  return result;
}


*/
