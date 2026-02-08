let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(`The result of adding all elements in arr is ${result}`);

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24}, 
    {id: 'pete', name: "Pete Peterson", age: 31},
];

console.log(users);

// The result of the previous call becomes the first argument 
// of the next one
// On the first run, obj is an empty object literal
// an object literal is basically "let object = {};" w/ or w/o members
// "obj" is the initial value
// "value" is the first array element
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}
// the object literal starts off empty
console.log(groupById(users));