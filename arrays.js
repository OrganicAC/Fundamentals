const names = ["Ant", "Ben", "Rae", "Fran", "Kiran", "Victoria", "Jason"];

console.log(names.length);
console.log(names[1]);

const extraNames = names.concat("Naima");
console.log(extraNames);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
nums.forEach((number) => {
  sum += number;
});

console.log(sum);

const addToBatch = (array, number) => {
  array.length < 5 ? array.concat(number) : array;
};
