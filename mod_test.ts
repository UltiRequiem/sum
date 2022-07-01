import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";
import { sum } from "./mod.ts";

Deno.test("Sum pure number", () => {
  assertEquals(sum([4, 12, 3, 1]), 20);
});

Deno.test("Sum pure strings", () => {
  assertEquals(sum(["h", "e", "y"]), "hey");
});

Deno.test("Sum strings and numbers", () => {
  assertEquals(sum([4, "hey", 3, 1]), "4hey31");
});
