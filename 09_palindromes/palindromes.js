const lettersAndNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";

const palindromes = function (string) {
    let cleanedString = string
    .toLowerCase()
    .split("")
    .filter(char => lettersAndNumbers.includes(char))
    .join("");

    stringReversed = cleanedString
    .split("")
    .reverse()
    .join("");

    return cleanedString == stringReversed;
};

// Do not edit below this line
module.exports = palindromes;
