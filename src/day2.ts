export { };
var fs = require("fs");

const readFileAsync = fs.readFileSync("input2.txt", "utf8");
const allLines = readFileAsync.split(/\r\n|\n/);

const moves = ['rock', 'paper', 'scissors'];

const chooseMove = () => {
  const randomMove: number = Math.floor(Math.random() * 3);
  return moves[randomMove];
};

const game = () => {
  for (let round = 0; round < 1; round++) {
    console.log(chooseMove);
  }
};
