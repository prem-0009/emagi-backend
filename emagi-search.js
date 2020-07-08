const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');


//not working
const searchEmojis = function(text){
    let result = [];
    
  for ( let i = 0; i < words.length; i++){
    if ( words[i].includes(text)){
    //   console.log(words[i]);
        let index = words.indexOf(words[i]);
//       console.log(index)
        result.push(symbols[index])
    } else {

    }
  }
    return result;
}



module.exports = searchEmojis;