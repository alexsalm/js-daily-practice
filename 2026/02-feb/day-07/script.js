let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let arr = [john, pete, mary];

function sortByAge(arr) {
   arr.sort((a,b) => a.age - b.age);
}

sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);

function getAverageAge(arr) {
    let addedAges = 0;
    let averageAge = 0;
    for (let i = 0; i < arr.length; i++){
        addedAges += arr[i].age;
    }
    
    averageAge = Math.round(addedAges / arr.length);
    return averageAge;
}

alert(getAverageAge(arr));

console.log(arr[0]);

// users is an array of objects
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];


