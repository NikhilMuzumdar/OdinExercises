const fibonacci = function Fibonacci(n) {
    if (n < 0) {
        return 'OOPS';
    }
    n = Number(n);
    let array = [1,1]
    while (array.length < n) {
        array.push(array.at(-1) + array.at(-2));

    }
    console.log(array);
    return array.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
