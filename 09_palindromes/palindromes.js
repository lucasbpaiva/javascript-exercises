const lettersAndNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";

const palindromes = function (string) {
    let arrayOfString = string
    .toLowerCase()
    .split("")
    .filter(char => lettersAndNumbers.includes(char));
    
    string = arrayOfString.join(""); //original string without punctuation

    stringReversed = arrayOfString.reverse().join("");
    console.log(stringReversed)
    return string == stringReversed;
};


// Do not edit below this line
module.exports = palindromes;
