function min(a, b) {
    if (a < b) return a;
    else return b;
};

console.log(min(17, 9));

function isEven(a) {
  if (a % 2 == 0) console.log(`${a} is even`); 
  if (a % 2 == 1) console.log(`${a} is odd`); 
};

isEven(20);
isEven(21);
isEven(69);