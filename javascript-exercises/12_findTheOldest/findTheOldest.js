const date = new Date();
year = date.getFullYear();

const findTheOldest = function oldestPerson(array) {
    let max_age = 0;
    let current_age = 0;
    let person = null;
    for (var i = 0; i < array.length; i++) {
        if (!array[i]['yearOfDeath']) {
            array[i]['yearOfDeath'] = year;
        }
        current_age = array[i]['yearOfDeath'] - array[i]['yearOfBirth']
        if (current_age > max_age) {
            max_age = current_age;
            person = array[i]
        }
        }
    console.log(person);
    return person;
    }


// Do not edit below this line
module.exports = findTheOldest;
