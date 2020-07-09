const randomEmojis = function (arr) {
  if (arr.length >= 0) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
};

module.exports = randomEmojis;
