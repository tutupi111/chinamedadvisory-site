import { type CopyKeys } from "@/lib/copy";

type T = Record<CopyKeys, string>;

const items: { quoteKey: CopyKeys; metaKey: CopyKeys }[] = [
  { quoteKey: "perspective1_quote", metaKey: "perspective1_meta" },
  { quoteKey: "perspective2_quote", metaKey: "perspective2_meta" },
  { quoteKey: "perspective3_quote", metaKey: "perspective3_meta" },
];

export function Perspectives({ t }: { t: T }) {
  return (
    <div className="perspectives-grid">
      {items.map((item) => (
        <div key={item.quoteKey} className="perspective-card">
          <p className="perspective-card__quote">{t[item.quoteKey]}</p>
          <p className="perspective-card__meta">{t[item.metaKey]}</p>
        </div>
      ))}
    </div>
  );
}
