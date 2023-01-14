const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const palindromes = function isPalindrome(string) {
    string = string.toLowerCase() // Convert to lower
    // Get rid of non-alphabets. 
    let clean_string = ""
    for (var i = 0; i < string.length; i++) {
        if (alphabet.includes(string[i])) {
            clean_string += string[i];
        }
    }
    // Reverse the string
    let reverse = ""
    for (var i = clean_string.length-1; i>=0; i--) {
        reverse += clean_string[i]
    }
    // Compare
    return reverse == clean_string;
}

// Do not edit below this line
module.exports = palindromes;
