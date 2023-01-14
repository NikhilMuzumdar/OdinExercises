const removeFromArray = function removeElement(array = [1, 2, 3], ...elements) {
    let result = []
    for (var i = 0; i < array.length; i++) {
        if (elements.includes(array[i])) {
            console.log("Entered here ");
        }
        else {
            print(array[i]);
            result.push(array[i]);
        }
    }
    console.log(result);
    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
