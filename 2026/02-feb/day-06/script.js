let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [john, pete, mary];
let names = users.map(item => item.name);
// alert(names);

let ages = users.map(item => item.age);
// alert(ages);

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths);

let paul = {name: "Paul", surname: "Smith", id: 1};
let stan = {name: "Stan", surname: "Hunt", id: 2};
let rex = {name: "Rex", surname: "Key", id: 3};

let users2 = [paul, stan, rex];

let usersMapped = users2.map(item => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id
}));

alert(usersMapped[0].id);
alert(usersMapped[0].fullName);

let korg = {name: "Korg", age: 25};
let jik = {name: "Jik", age: 30};
let brin = {name: "Brin", age: 28};

let arr = [korg, jik, brin];