let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let arr = [john, pete, mary];

function sortByAge(array) {
    let youngestUser = array[0];
    for (let user of array) {
        if (user.age < youngestUser.age) {
            array[user.age] = user;
        } else if (user.age == youngestUser) {
            array[user.age] = youngestUser;
        }
    }
    return array;
}

sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);