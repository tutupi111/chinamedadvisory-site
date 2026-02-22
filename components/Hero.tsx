import { type CopyKeys } from "@/lib/copy";

type T = Record<CopyKeys, string>;

export function Hero({
  t,
  onOpenModal,
}: {
  t: T;
  onOpenModal: () => void;
}) {
  const title = t.hero_title;
  const hl = t.hero_title_hl;
  const parts = title.split(hl);

  return (
    <header className="hero">
      <div className="container">
        <h1 className="hero__title">
          {parts[0]}
          <span className="hl">{hl}</span>
          {parts[1] ?? ""}
        </h1>
        <p className="hero__sub">{t.hero_sub}</p>
        <div className="hero__ctas">
          <a className="btn btn--primary" href="#contact">
            {t.hero_contact}
          </a>
          <button
            type="button"
            className="btn btn--outline"
            onClick={onOpenModal}
          >
            {t.hero_inquiry}
          </button>
        </div>
      </div>
    </header>
  );
}
