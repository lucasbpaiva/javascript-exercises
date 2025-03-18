const reverseString = function(string) {
    let stringReversed = "";

    stringAsArray = string.split("");
    arrayReversed = stringAsArray.reverse();
    stringReversed = arrayReversed.join("");

    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
