export type SummableItem = string | number;

/**
 * @param toSum A list with numbers or/and strings to sum.
 *
 * @example
 * ```typescript
 * import {sum} from "https://deno.land/x/sum/mod.ts"
 *
 * sum([1, 2, 3, 4, 5]) //=> 15
 * sum(["1", "2", "3", "4", "5"]) //=> "12345"
 * ```
 */
export function sum(toSum: SummableItem[]): SummableItem {
  return toSum.reduce((a, b) =>
    typeof a === "number" && typeof b === "number" ? a + b : `${a}${b}`
  );
}
