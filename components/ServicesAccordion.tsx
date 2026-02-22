"use client";

import { useState, useRef, useEffect } from "react";
import { type CopyKeys } from "@/lib/copy";

type T = Record<CopyKeys, string>;

const items: { titleKey: CopyKeys; descKey: CopyKeys }[] = [
  { titleKey: "svc1_title", descKey: "svc1_desc" },
  { titleKey: "svc2_title", descKey: "svc2_desc" },
  { titleKey: "svc3_title", descKey: "svc3_desc" },
  { titleKey: "svc4_title", descKey: "svc4_desc" },
  { titleKey: "svc5_title", descKey: "svc5_desc" },
];

export function ServicesAccordion({ t }: { t: T }) {
  const [openIndex, setOpenIndex] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    panelRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.maxHeight = openIndex === i ? `${el.scrollHeight}px` : "0";
    });
  }, [openIndex]);

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div
          key={item.titleKey}
          className={`accordion__item ${openIndex === i ? "is-open" : ""}`}
        >
          <button
            type="button"
            className="accordion__head"
            aria-expanded={openIndex === i}
            aria-controls={`acc-${i}`}
            id={`acc-head-${i}`}
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
          >
            {t[item.titleKey]}
          </button>
          <div
            id={`acc-${i}`}
            className="accordion__panel"
            role="region"
            aria-labelledby={`acc-head-${i}`}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
          >
            <div className="accordion__panel-inner">
              <p>{t[item.descKey]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
