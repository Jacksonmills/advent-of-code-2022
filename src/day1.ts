export { };
var fs = require("fs");

const readFileAsync = fs.readFileSync("input1.txt", "utf8");
const allLines = readFileAsync.split(/\r\n|\n/);

let mostCalories = 0;
const elves: string[][] = [[]];
let elfCount = 0;
allLines.forEach((line: string) => {
  if (line !== "") {
    elves[elfCount].push(line);
  } else {
    elves.push([]);
    elfCount += 1;
  }
});

elves.forEach((elf) => {
  let total = 0;
  elf.forEach((foodItem) => {
    const itemAsNum = parseInt(foodItem);
    total += itemAsNum;
  });
  if (total > mostCalories) {
    mostCalories = total;
  }
});

console.log(`the elf with the most has ${mostCalories} calories.`);

const calculateTopThree = (totals: number[]) => {
  let newTotal = 0;
  for (let i = 0; i < 3; i++) {
    newTotal += totals[i];
  }
  return newTotal;
};

const totals: number[] = [];
elves.forEach((elf) => {
  let total = 0;
  elf.forEach((foodItem) => {
    const itemAsNum = parseInt(foodItem);
    total += itemAsNum;
  });
  totals.push(total);
});
const sortedTotals = totals.sort((a, b) => b - a);
const finalAnswer = calculateTopThree(sortedTotals);
console.log(`the final answer is ${finalAnswer}`);
