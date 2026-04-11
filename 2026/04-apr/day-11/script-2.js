const people = [
	{
		name: "Alex"
		yearOfBirth: 1993,
	},

	{
		name: "Em"
		yearOfBirth: 2003,
	},
]

const getAge = function(birth, death) {
	if (!death) {
		death = new Date().getFullYear();
	}

	return death - birth;
};

console.log(`I am ${getAge(1993)} years old.`);
