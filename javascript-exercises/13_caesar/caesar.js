const caesar = function CaesarCipher(str, num) {
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';
    
    for (var i = 0; i < lowerCaseString.length; i++) {
      var currentLetter = lowerCaseString[i];
      // This loop checks if it's a non alpha and skips shift if true
      if (!alphabet.includes(currentLetter)) {
        newString += currentLetter;
        continue;
      }
      // Handle alphabets
      var currentIndex = alphabet.indexOf(currentLetter);
      var newIndex = currentIndex + num;
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = 26 + newIndex;
      if (str[i] === str[i].toUpperCase()) {
        newString += alphabet[newIndex].toUpperCase();
      }
      else newString += alphabet[newIndex];
    }
    
    return newString;
  }
  

// Do not edit below this line
module.exports = caesar;
