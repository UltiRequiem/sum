import { assertEquals } from "./test_deps.ts";
import sum, { sumSync } from "./mod.ts";

Deno.test("Test Sum", async () => {
  assertEquals(await sum(4, 12, 3, 1), 20);
});

Deno.test("Test Sum Sync", () => {
  assertEquals(sumSync([4, 12, 3, 1]), 20);
});
