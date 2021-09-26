export type Summable = (string | number)[];
export type summableItem = string | number;

/**
 * Sum all parameters
 * @param toSum numbers or/and strings to sum
 * @returns A promise with the sum of al params.
 */
export default function sum(...toSum: Summable): Promise<summableItem> {
  return Promise.resolve(sumSync(toSum));
}

/**
 * Sum all parameters
 * @param toSum A list with numbers or/and strings to sum
 * @returns The sum of al params.
 */
export function sumSync(toSum: Summable): summableItem {
  return toSum.reduce((a, b) =>
    typeof a === "number" && typeof b === "number" ? (a + b) : `${a}${b}`
  );
}
