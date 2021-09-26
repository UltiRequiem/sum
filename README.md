# Sum Utilities for Deno

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/deno-sum?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/deno-sum/workflows/CodeQL/badge.svg)

You can get this package by [nest.land](https://nest.land/package/sum) or
[deno.land](https://deno.land/x/sum).

## Usage

This package exposes two Functions,
[sum](https://github.com/UltiRequiem/deno-sum/blob/main/mod.ts#L9)
and
[sumSync](https://github.com/UltiRequiem/deno-sum/blob/main/mod.ts#L18).

```typescript
import sum, { sumSync } from "https://deno.land/x/sum/mod.ts";

console.log(await sum(45, "a")); // "45a"

async function somethingAsync() {
  console.log(await sum(2, 4, 5)); // 11
}

somethingAsync();

sum(34, 56).then((number) => console.log(number)); // 90

console.log(sumSync([2, 4, 5, 6])); // 17
```

### License

[This project](https://deno.land/x/sum) is licensed under the
[MIT License](./LICENSE.md).
