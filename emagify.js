const symbols = require("./emagi-symbols.js");
const words = require("./emagi-words.js");




const convertWordToEmoji = function (arrWords) {
  let result = [];
  let j = 0;
  for (let i = 0; i < arrWords.length; i++) {
    if (words.indexOf(arrWords[i]) !== -1) {
      let position = words.indexOf(arrWords[i]);

      result.push(symbols[position]);
    } else {
      result.push(arrWords[i]);
    }
  }

  return result;
};




module.exports = convertWordToEmoji;
