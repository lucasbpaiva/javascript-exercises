const leapYears = function(year) {
    if (year % 4) return false;
    if (year % 100) return true;
    if (year % 400) return false;
    return true;
};

// Do not edit below this line
module.exports = leapYears;
