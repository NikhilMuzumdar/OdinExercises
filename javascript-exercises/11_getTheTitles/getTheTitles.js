const getTheTitles = function getTheTitles(lists) {
    let result = [];
    for (var i = 0; i < lists.length; i++) {
        result.push(lists[i]['title']);
    }
return result;

};

// Do not edit below this line
module.exports = getTheTitles;
