const sumAll = function(first, last) {
    if (!Number.isInteger(first) || !Number.isInteger(last) || first < 0 || last < 0) return "ERROR";
    if (first > last) [first, last] = [last, first];

    let sum = 0;
    for (let number = first; number <= last; number++) {
        sum += number;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
