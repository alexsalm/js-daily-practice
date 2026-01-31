function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

let user = makeUser("Alex", 32);
alert(user.name);