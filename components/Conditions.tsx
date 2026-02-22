import { type CopyKeys } from "@/lib/copy";

type T = Record<CopyKeys, string>;

const categories: {
  titleKey: CopyKeys;
  listKeys: CopyKeys[];
}[] = [
  {
    titleKey: "conditions_cat1",
    listKeys: ["conditions_li1_1", "conditions_li1_2", "conditions_li1_3"],
  },
  {
    titleKey: "conditions_cat2",
    listKeys: ["conditions_li2_1", "conditions_li2_2", "conditions_li2_3"],
  },
  {
    titleKey: "conditions_cat3",
    listKeys: ["conditions_li3_1", "conditions_li3_2", "conditions_li3_3"],
  },
];

export function Conditions({ t }: { t: T }) {
  return (
    <>
      <p className="conditions-intro">{t.conditions_intro_2}</p>
      {categories.map((cat) => (
        <div key={cat.titleKey} className="conditions-category">
          <h3 className="conditions-category__title">{t[cat.titleKey]}</h3>
          <ul className="conditions-list">
            {cat.listKeys.map((key) => (
              <li key={key}>{t[key]}</li>
            ))}
          </ul>
        </div>
      ))}
      <p className="conditions-disclaimer">{t.conditions_disclaimer}</p>
    </>
  );
}
