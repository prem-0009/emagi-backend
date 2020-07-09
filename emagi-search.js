const symbols = require("./emagi-symbols.js");
const words = require("./emagi-words.js");

const searchEmojis = function (text) {
  let result = [];

  //loop through the words
  for (const word of words) {
    //if text is present in words
    if (word.includes(text)) {
      //find index of that text in the array words
      let index = words.indexOf(word);
      //push the symbol with that index to result array
      result.push(symbols[index]);
    }
  }

  return result;
};

module.exports = searchEmojis;
