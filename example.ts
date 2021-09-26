import sum, { Summable, summableItem, sumSync } from "./mod.ts";

console.log(await sum(45, "a")); // "45a"

async function somethingAsync() {
  console.log(await sum(2, 4, 5)); // 11
}

somethingAsync();

const myFavoriteNum: summableItem = 4;

sum(34, 56, myFavoriteNum).then((number) => console.log(number)); // 94

const myNums: Summable = [2, 4, 5, 5];
console.log(sumSync(myNums)); // 16

// First: "45a"; Second: 16; Third: 11; Last: 94
