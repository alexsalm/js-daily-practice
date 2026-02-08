let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let arr = [john, pete, mary];

function sortByAge(arr) {
   arr.sort((a,b) => a.age - b.age);
}

sortByAge(arr);

// alert(arr[0].name);
// alert(arr[1].name);
// alert(arr[2].name);

function getAverageAge(arr) {
    let addedAges = 0;
    let averageAge = 0;
    for (let i = 0; i < arr.length; i++){
        addedAges += arr[i].age;
    }
    
    averageAge = Math.round(addedAges / arr.length);
    return averageAge;
}

// alert(getAverageAge(arr));

// console.log(arr[0]);

// users is an array of objects

// console.log(Object.keys({x: 0, y: 0, z: 2}));

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// function groupById(arr) {
    
// }

// let usersById = groupById(users);

// console.log(usersById);

let newArr = [1, 2, 3, 4, 5];

let result = newArr.reduce((sum, current) => sum + current, 6);
// alert(`The current value of result is ${result}`);