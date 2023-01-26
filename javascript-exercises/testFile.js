//  Write the function isEmpty(obj) which returns true
//  if the object has no properties, false otherwise.
function isEmpty(obj) {
    count = 0
    for (key in obj) {
        count++;
    }
    return count === 0;
}

// return sum
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

var sSum = 0
for (person in salaries) { sSum += salaries[person]}
// console.log(sSum)

// Multiply numeric property values by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(menu) {
    for (key in menu) {
        if (typeof(menu[key]) === "number") {
            menu[key] *= 2;
        }
    }
}
// console.log(menu)
multiplyNumeric(menu)
// console.log(menu)




