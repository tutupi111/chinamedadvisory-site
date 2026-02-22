import { type CopyKeys } from "@/lib/copy";

type T = Record<CopyKeys, string>;

const items: { titleKey: CopyKeys; textKey: CopyKeys }[] = [
  { titleKey: "why1_title", textKey: "why1_text" },
  { titleKey: "why2_title", textKey: "why2_text" },
  { titleKey: "why3_title", textKey: "why3_text" },
  { titleKey: "why4_title", textKey: "why4_text" },
];

export function WhyUs({ t }: { t: T }) {
  return (
    <div className="why-grid">
      {items.map((item) => (
        <div key={item.titleKey} className="why-item">
          <div>
            <h3 className="why-item__title">{t[item.titleKey]}</h3>
            <p className="why-item__text">{t[item.textKey]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
