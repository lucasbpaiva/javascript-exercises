function getAge(person) {
    person.yearOfDeath ??= new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people
    .slice(0)
    .sort((a, b) => getAge(b) - getAge(a))
    .at(0);
};

// Do not edit below this line
module.exports = findTheOldest;
