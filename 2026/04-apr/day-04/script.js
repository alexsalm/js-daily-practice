const books = [
    {
        title: "Book",
        author: "Name"
    },
    {
        title: "Book2",
        author: "Name2"
    }
]

const getTheTitles = function(array) {
    const bookTitles = array.map((element) => element.title);
    return bookTitles;
};

const getAuthors = function(array) {
    const bookAuthors = array.map((element) => element.author);
    return bookAuthors;
};

// Your job is to write a function that takes the array and returns an array of titles:
// You should use a built-in javascript method to do most of the work for you!
console.log(getTheTitles(books)); // ['Book', 'Book2']
console.log(getAuthors(books));