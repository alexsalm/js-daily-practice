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