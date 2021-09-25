import sum from "./mod.ts";

async function somethingAsync() {
  console.log(await sum(2, 4, 5)); // 11
}

somethingAsync();

// sum(34, 56).then((number) => console.log(number)); // 90

// sum(34, 56).then((number) => console.log(number)); // 90

// console.log(sumSync(2, 4, 5, 5)); // 16

// First: 16; Second: 11; Third: 90
