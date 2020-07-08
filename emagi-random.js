

const randomEmojis = function(arr){

  if (arr.length >= 1){
  return arr[Math.floor(Math.random() * Math.floor(arr.length))]
  }
}






module.exports = randomEmojis; 