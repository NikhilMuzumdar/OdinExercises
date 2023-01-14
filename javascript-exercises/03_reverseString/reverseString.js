function reverseWord(word) {
    let result = "";
    for (var i=word.length-1; i>=0; i--) {
        result += word[i]
    }
    return result;
}


const reverseString = function reverseScentence(scentence) {
    let wordList = scentence.split(" ");
    for (var j=0; j < wordList.length; j++) {
        wordList[j] = reverseWord(wordList[j]);
    }
    wordList.reverse(); //While the words are reversed, their position too need to be reversed
    // console.log(wordList.join(" "));
    return wordList.join(" ")

};



// Do not edit below this line
module.exports = reverseString;
