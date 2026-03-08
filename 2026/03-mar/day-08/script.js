const palindromes = function (string) {
    let newArray = string.slice(0, string.length - 1);
    const reversed = newArray.reverse();
    return reversed;
};

console.log(palindromes('racecar'));