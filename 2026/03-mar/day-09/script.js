const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

let string = 'racECar';

const cleanedString = string
    . toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

const reversedString = cleanedString.split('').reverse().join('');

