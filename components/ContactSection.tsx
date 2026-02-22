import { type CopyKeys } from "@/lib/copy";

const CONTACT_EMAIL = "hugchen1117@gmail.com";

type T = Record<CopyKeys, string>;

export function ContactSection({
  t,
  onOpenModal,
}: {
  t: T;
  onOpenModal: () => void;
}) {
  return (
    <div className="contact-box">
      <p>
        <strong>{t.contact_email_label}</strong>{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      <p>
        <strong>{t.contact_whatsapp_label}</strong> {t.contact_whatsapp}
      </p>
      <p style={{ marginTop: "var(--space-3)" }}>
        <button
          type="button"
          className="btn btn--primary"
          onClick={onOpenModal}
        >
          {t.contact_btn}
        </button>
      </p>
    </div>
  );
}
