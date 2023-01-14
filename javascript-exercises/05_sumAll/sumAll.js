const sumAll = function sumAll(a, b) {
    if (typeof (a) != "number" || typeof (b) != "number") {
        return "ERROR";
    }
    let sum = 0;
    start = Math.min(a, b);
    end = Math.max(a, b);
    if (start < 0) {
        return "ERROR";
    }
    for (var i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
