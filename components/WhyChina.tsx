import { type CopyKeys } from "@/lib/copy";

type T = Record<CopyKeys, string>;

const cards: { titleKey: CopyKeys; textKey: CopyKeys }[] = [
  { titleKey: "reason1_title", textKey: "reason1_text" },
  { titleKey: "reason2_title", textKey: "reason2_text" },
  { titleKey: "reason3_title", textKey: "reason3_text" },
  { titleKey: "reason4_title", textKey: "reason4_text" },
];

export function WhyChina({ t }: { t: T }) {
  return (
    <div className="reason-grid">
      {cards.map((c) => (
        <div key={c.titleKey} className="reason-card">
          <h3 className="reason-card__title">{t[c.titleKey]}</h3>
          <p className="reason-card__text">{t[c.textKey]}</p>
        </div>
      ))}
    </div>
  );
}
