function plus<T extends number | string>(a: T, b: T): T {
  if (typeof a === "number" && typeof b === "number") {
    return (a + b) as T;
  }

  return `${a}${b}` as T;
}

export function sum(...toSum: number[]): Promise<number>;
export function sum(...toSum: string[]): Promise<string>;

export default function sum<T extends number | string>(
  ...toSum: readonly T[]
): Promise<T> {
  return Promise.resolve(toSum.reduce(plus));
}

export function sumSync(toSum: readonly number[]): number;
export function sumSync(toSum: readonly string[]): string;

export function sumSync<T extends number | string>(toSum: readonly T[]): T {
  return toSum.reduce(plus);
}
