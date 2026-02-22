import { type CopyKeys } from "@/lib/copy";

type T = Record<CopyKeys, string>;

const rows: {
  aspectKey: CopyKeys;
  localKey: CopyKeys;
  chinaKey: CopyKeys;
}[] = [
  {
    aspectKey: "compare_continuity",
    localKey: "compare_continuity_local",
    chinaKey: "compare_continuity_china",
  },
  {
    aspectKey: "compare_access",
    localKey: "compare_access_local",
    chinaKey: "compare_access_china",
  },
  {
    aspectKey: "compare_cost",
    localKey: "compare_cost_local",
    chinaKey: "compare_cost_china",
  },
  {
    aspectKey: "compare_communication",
    localKey: "compare_communication_local",
    chinaKey: "compare_communication_china",
  },
  {
    aspectKey: "compare_when",
    localKey: "compare_when_local",
    chinaKey: "compare_when_china",
  },
];

export function CompareTable({ t }: { t: T }) {
  return (
    <div className="compare-wrap">
      <table className="compare-table" role="table">
        <thead>
          <tr>
            <th scope="col">{t.compare_aspect}</th>
            <th scope="col">{t.compare_local}</th>
            <th scope="col">{t.compare_china}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.aspectKey}>
              <th scope="row">{t[row.aspectKey]}</th>
              <td>{t[row.localKey]}</td>
              <td>{t[row.chinaKey]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="compare-note">{t.compare_note}</p>
    </div>
  );
}
