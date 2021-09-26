type Sumable = (string | number)[];
type SumableItem = string | number;

export default function sum(...toSum: Sumable): Promise<SumableItem> {
  return Promise.resolve(sumSync(toSum));
}

export function sumSync(toSum: Sumable): SumableItem {
  return toSum.reduce((a, b) =>
    typeof a === "number" && typeof b === "number" ? (a + b) : `${a}${b}`
  );
}
