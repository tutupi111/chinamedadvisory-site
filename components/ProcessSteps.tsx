import { type CopyKeys } from "@/lib/copy";

type T = Record<CopyKeys, string>;

const steps: { titleKey: CopyKeys; textKey: CopyKeys }[] = [
  { titleKey: "step1_title", textKey: "step1_text" },
  { titleKey: "step2_title", textKey: "step2_text" },
  { titleKey: "step3_title", textKey: "step3_text" },
  { titleKey: "step4_title", textKey: "step4_text" },
];

export function ProcessSteps({ t }: { t: T }) {
  return (
    <div className="steps">
      {steps.map((step, i) => (
        <div key={step.titleKey} className="step">
          <span className="step__num" aria-hidden="true">
            {i + 1}
          </span>
          <div>
            <h3 className="step__title">{t[step.titleKey]}</h3>
            <p className="step__text">{t[step.textKey]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
