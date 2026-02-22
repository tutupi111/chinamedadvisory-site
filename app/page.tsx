"use client";

import { useState, useEffect, useCallback } from "react";
import { copy, type Locale } from "@/lib/copy";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ServicesAccordion } from "@/components/ServicesAccordion";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhyUs } from "@/components/WhyUs";
import { WhyChina } from "@/components/WhyChina";
import { Conditions } from "@/components/Conditions";
import { CompareTable } from "@/components/CompareTable";
import { Perspectives } from "@/components/Perspectives";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { InquiryModal } from "@/components/InquiryModal";

const LANG_STORAGE_KEY = "chinamedadvisory-lang";

function getInitialLang(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "zh" || saved === "en") return saved;
  } catch {
    // ignore
  }
  return "en";
}

export default function Home() {
  const [lang, setLangState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const initial = getInitialLang();
    setLangState(initial);
  }, [mounted]);

  const setLang = useCallback((l: Locale) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, l);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const t = copy[lang];

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} onOpenModal={() => setModalOpen(true)} />
      <main>
        <section id="services" className="alt" aria-labelledby="services-heading">
          <div className="container">
            <p className="sec__label">{t.label_services}</p>
            <h2 id="services-heading" className="sec__title">
              {t.services_title}
            </h2>
            <p className="sec__intro">{t.services_intro}</p>
            <ServicesAccordion t={t} />
          </div>
        </section>

        <section id="process" aria-labelledby="process-heading">
          <div className="container">
            <p className="sec__label">{t.label_process}</p>
            <h2 id="process-heading" className="sec__title">
              {t.process_title}
            </h2>
            <p className="sec__intro">{t.process_intro}</p>
            <ProcessSteps t={t} />
          </div>
        </section>

        <section id="why-us" className="alt" aria-labelledby="why-us-heading">
          <div className="container">
            <p className="sec__label">{t.label_why_us}</p>
            <h2 id="why-us-heading" className="sec__title">
              {t.why_us_title}
            </h2>
            <p className="sec__intro">{t.why_us_intro}</p>
            <WhyUs t={t} />
          </div>
        </section>

        <section id="why-china" aria-labelledby="why-china-heading">
          <div className="container">
            <p className="sec__label">{t.label_why_china}</p>
            <h2 id="why-china-heading" className="sec__title">
              {t.why_china_title}
            </h2>
            <p className="sec__intro">{t.why_china_intro}</p>
            <WhyChina t={t} />
          </div>
        </section>

        <section id="conditions" className="alt" aria-labelledby="conditions-heading">
          <div className="container">
            <p className="sec__label">{t.label_conditions}</p>
            <h2 id="conditions-heading" className="sec__title">
              {t.conditions_title}
            </h2>
            <p className="sec__intro">{t.conditions_intro}</p>
            <Conditions t={t} />
          </div>
        </section>

        <section id="compare" aria-labelledby="compare-heading">
          <div className="container">
            <p className="sec__label">{t.label_compare}</p>
            <h2 id="compare-heading" className="sec__title">
              {t.compare_title}
            </h2>
            <p className="sec__intro">{t.compare_intro}</p>
            <CompareTable t={t} />
          </div>
        </section>

        <section id="perspectives" className="alt" aria-labelledby="perspectives-heading">
          <div className="container">
            <p className="sec__label">{t.label_perspectives}</p>
            <h2 id="perspectives-heading" className="sec__title">
              {t.perspectives_title}
            </h2>
            <p className="sec__intro">{t.perspectives_intro}</p>
            <Perspectives t={t} />
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <div className="container">
            <p className="sec__label">{t.label_contact}</p>
            <h2 id="contact-heading" className="sec__title">
              {t.contact_title}
            </h2>
            <p className="sec__intro">{t.contact_intro}</p>
            <ContactSection t={t} onOpenModal={() => setModalOpen(true)} />
          </div>
        </section>
      </main>

      <Footer t={t} />
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        t={t}
      />
    </>
  );
}
