/**
 * @param numbers A list with numbers to sum.
 *
 * @example
 * ```javascript
 * sum(1, 2, 3, 4, 5) //=> 15
 * ```
 */
export function sum(...numbers: number[]) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
