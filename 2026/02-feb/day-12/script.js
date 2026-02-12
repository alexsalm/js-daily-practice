// ?? is the nullish coalescing operator

let response = null;
let defaultName = response ?? "Guest"; // prints "Guest", because response is nullish
console.log(defaultName);

let count = 0;
let actualCount = count ?? 10;
console.log(actualCount);       // prints 0, because not nullish