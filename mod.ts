export default function sum(...toSum: any[]): Promise<any> {
  return new Promise((resolve) => {
    resolve(sumSync(toSum));
  });
}

export function sumSync(toSum: any[]): any {
  return toSum.reduce((a, b) => a + b);
}
