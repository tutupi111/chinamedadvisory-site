"use client";

import { useState, useCallback, useEffect } from "react";
import { type CopyKeys } from "@/lib/copy";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

type T = Record<CopyKeys, string>;

export function InquiryModal({
  isOpen,
  onClose,
  t,
}: {
  isOpen: boolean;
  onClose: () => void;
  t: T;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [concern, setConcern] = useState("");
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const resetForm = useCallback(() => {
    setName("");
    setEmail("");
    setCountry("");
    setConcern("");
    setErrName("");
    setErrEmail("");
    setSubmitError("");
    setDone(false);
  }, []);

  useEffect(() => {
    if (isOpen) resetForm();
  }, [isOpen, resetForm]);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrName("");
    setErrEmail("");
    setSubmitError("");

    const n = name.trim();
    const em = email.trim();
    if (!n) {
      setErrName(t.form_err_required);
      return;
    }
    if (!em) {
      setErrEmail(t.form_err_required);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      setErrEmail(t.form_err_email);
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitError(t.form_err_network);
      return;
    }

    setSending(true);
    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "New International Patient Inquiry",
        name: n,
        email: em,
        country: country.trim(),
        concern: concern.trim(),
        botcheck: "",
      };
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        success?: boolean;
        message?: string;
      };
      if (data.success) {
        setDone(true);
      } else {
        setSubmitError(data.message || t.form_err_network);
      }
    } catch {
      setSubmitError(t.form_err_network);
    } finally {
      setSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay is-open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-hidden="false"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <div className="modal__head">
          <h2 className="modal__title" id="modal-title">
            {t.modal_title}
          </h2>
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="modal__body">
          <div
            className={`form-wrapper ${done ? "is-hidden" : ""}`}
            id="form-wrapper"
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="f-name">
                  {t.form_name} <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="f-name"
                  name="name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={errName ? "is-invalid" : undefined}
                />
                {errName && (
                  <p className="err" id="err-name" role="alert">
                    {errName}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="f-email">
                  {t.form_email} <span className="req">*</span>
                </label>
                <input
                  type="email"
                  id="f-email"
                  name="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errEmail ? "is-invalid" : undefined}
                />
                {errEmail && (
                  <p className="err" id="err-email" role="alert">
                    {errEmail}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="f-country">{t.form_country}</label>
                <input
                  type="text"
                  id="f-country"
                  name="country"
                  autoComplete="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="f-concern">{t.form_concern}</label>
                <textarea
                  id="f-concern"
                  name="concern"
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                />
              </div>
              <p className="form-privacy">{t.form_privacy}</p>
              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={sending}
                >
                  {sending ? t.form_sending : t.form_submit}
                </button>
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={onClose}
                >
                  {t.form_cancel}
                </button>
              </div>
            </form>
          </div>
          <div className={`form-done ${done ? "is-visible" : ""}`} id="form-done">
            <p>
              <strong>{t.form_done_msg}</strong>
            </p>
            <button
              type="button"
              className="btn btn--primary"
              onClick={onClose}
            >
              {t.form_close}
            </button>
          </div>
          {submitError && (
            <p
              className="form-error-msg"
              style={{
                display: "block",
                marginTop: "1rem",
                fontSize: "0.875rem",
                color: "var(--error)",
              }}
              role="alert"
            >
              {submitError}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
