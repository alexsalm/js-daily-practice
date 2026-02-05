const obj = { data: 42 };

const objCopy = obj;

objCopy.data = 43;

console.log(obj);
console.log(objCopy);

// objectCounter contains a reference to the same object as the
// object variable passed as argument
function increaseCounterObject(objectCounter) {
    objectCounter.counter += 1;
}
// primitiveCounter contains a copy of the primitive value
function increaseCounterPrimitive(primitiveCounter) {
    primitiveCounter += 1;
}

const object = { counter: 0 };
let primitive = 0;

increaseCounterObject(object);
increaseCounterPrimitive(primitive);

let animal = { species: "dog "};
let dog = animal;

animal = { species: "cat" };

console.log(animal);
console.log(dog);

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

function getUserNames(users) {
    let names = [];
    for (let user of users) {
        if (!names.includes(users.name)) {
            names.push(users.name);
        }   
    }
    return names;
};

console.log(getUserNames(users));


