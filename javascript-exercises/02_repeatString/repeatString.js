const repeatString = function (string="", times) {
    if (times < 0) {
        return 'ERROR';
    }

    return string.repeat(times);
};

// Do not edit below this line
module.exports = repeatString;
