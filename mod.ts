export default function sum(...numbers: number[]): Promise<number> {
  return new Promise<number>((resolve) => {
    resolve(numbers.reduce((a, b) => a + b));
  });
}

export function sumSync(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}
