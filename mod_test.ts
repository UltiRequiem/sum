import { assertEquals } from "./test_deps.ts";
import sum, { sumSync } from "./mod.ts";

Deno.test("Test Sum 1", async () => {
  assertEquals(await sum(4, 12, 3, 1), 20);
});

Deno.test("Test Sum 2", async () => {
  assertEquals(await sum("a", "b", 5), "ab5");
});

Deno.test("Test Sum Sync 1", () => {
  assertEquals(sumSync([4, 12, 3, 1]), 20);
});

Deno.test("Test Sum Sync 2", () => {
  assertEquals(sumSync(["a", 4556, "a"]), "a4556a");
});
