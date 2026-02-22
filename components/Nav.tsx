"use client";

import Link from "next/link";
import { type Locale, type CopyKeys } from "@/lib/copy";

type T = Record<CopyKeys, string>;

const navKeys: CopyKeys[] = [
  "nav_services",
  "nav_process",
  "nav_why_us",
  "nav_contact",
];

export function Nav({
  t,
  lang,
  setLang,
}: {
  t: T;
  lang: Locale;
  setLang: (l: Locale) => void;
}) {
  return (
    <nav className="nav" aria-label="Main">
      <div className="nav__inner">
        <Link className="nav__brand" href="#">
          ChinaMedAdvisory
        </Link>
        <ul className="nav__menu">
          <li>
            <a href="#services">{t.nav_services}</a>
          </li>
          <li>
            <a href="#process">{t.nav_process}</a>
          </li>
          <li>
            <a href="#why-us">{t.nav_why_us}</a>
          </li>
          <li>
            <a href="#contact">{t.nav_contact}</a>
          </li>
        </ul>
        <div className="nav__lang">
          <button
            type="button"
            onClick={() => setLang("en")}
            className={lang === "en" ? "is-active" : undefined}
            aria-label="English"
          >
            EN
          </button>
          <span aria-hidden="true">|</span>
          <button
            type="button"
            onClick={() => setLang("zh")}
            className={lang === "zh" ? "is-active" : undefined}
            aria-label="中文"
          >
            中文
          </button>
        </div>
      </div>
    </nav>
  );
}
