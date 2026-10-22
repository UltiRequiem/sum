import { expect, it } from "vitest";
import { sum } from "./index.js";

it("Sum numbers.", () => {
  expect(sum(4, 12, 3, 1)).toEqual(20);

  expect(sum(1, 2, 3, 4)).toEqual(10);
});
