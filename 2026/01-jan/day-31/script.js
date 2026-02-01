let user = {
    name: "Alex",
    age: 32,
    isAdmin: true
};

for (let key in user) {
    // keys
    alert(key);
    // values for the keys
    alert(user[key]);
}