let user = {
    name: "Alex",
    surname: "Lopez"
};
user.age = 32;

for (let prop in user) {
    // keys
    alert(prop);
    // values for the keys
    alert(user[prop]);
}

let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1": "USA"
};

for (let code in codes) {
    alert(+code);
} 