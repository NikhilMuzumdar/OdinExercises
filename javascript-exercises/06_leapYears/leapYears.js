const leapYears = function leapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            return false;
        }

        return true;
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;


// Leap years are years divisible by four (like 1984 and 2004). 
// However, years divisible by 100 are not leap years 
// Unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
