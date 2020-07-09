const symbols = require("./emagi-symbols.js");
const words = require("./emagi-words.js");

const convertWordToEmoji = function (arrWords) {
  let result = [];
  //loop through the given array

  for (const text of arrWords) {
    //if element in array is matches with our word in our array-words
    if (words.includes(text)) {
      //find the index of that word
      let index = words.indexOf(text);
      //push the symbol with that index to empty array 'result'
      result.push(symbols[index]);
      //otherwise
    } else {
      //push whatever non matching text to empty array
      result.push(text);
    }
  }

  return result;
};

module.exports = convertWordToEmoji;
