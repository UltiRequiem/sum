import sum, { sumSync } from "./mod.ts";

console.log(await sum(45, "a")); // "45a"

async function somethingAsync() {
  console.log(await sum(2, 4, 5)); // 11
}

somethingAsync();

sum(34, 56).then((number) => console.log(number)); // 90

console.log(sumSync([2, 4, 5, 5])); // 16

// First: "45a"; Second: 16; Third: 11; Last: 90
