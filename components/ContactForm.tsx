"use client";
import { useState } from "react";

export type FormStyle = { form?: string; field?: string; label?: string; input: string; error: string; button: string; ok: string };
type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

export default function ContactForm({ s, button = "Odoslať dopyt", withService = true, idPrefix = "cf" }: { s: FormStyle; button?: string; withService?: boolean; idPrefix?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const v = (k: string) => String(d.get(k) ?? "").trim();
    const err: Errors = {};
    if (v("name").length < 2) err.name = "Zadajte meno (aspoň 2 znaky).";
    if (!/^(\+421|0)[\s\d]{8,12}$/.test(v("phone"))) err.phone = "Zadajte platné telefónne číslo, napr. 0903 123 456.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) err.email = "Zadajte platný e-mail.";
    if (v("message").length < 5) err.message = "Napíšte krátku správu.";
    setErrors(err);
    if (Object.keys(err).length === 0) { setDone(true); form.reset(); }
  }

  if (done)
    return (
      <div role="status" className={s.ok}>
        <strong>Ďakujeme, dopyt je overený.</strong> Ide o demonštračný formulár – údaje sa nikam neodosielajú. Objednať sa môžete telefonicky na 0903 687 696.
        <button type="button" className="ml-2 underline" onClick={() => setDone(false)}>Vyplniť znova</button>
      </div>
    );

  const f = (k: keyof Errors, label: string, type = "text", auto?: string) => (
    <div className={s.field}>
      <label htmlFor={`${idPrefix}-${k}`} className={s.label}>{label}</label>
      <input id={`${idPrefix}-${k}`} name={k} type={type} autoComplete={auto} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${idPrefix}-${k}-e` : undefined} className={s.input} />
      {errors[k] && <p id={`${idPrefix}-${k}-e`} className={s.error}>{errors[k]}</p>}
    </div>
  );

  return (
    <form onSubmit={submit} noValidate className={s.form}>
      {f("name", "Meno", "text", "name")}
      {f("phone", "Telefón", "tel", "tel")}
      {f("email", "E-mail", "email", "email")}
      {withService && (
        <div className={s.field}>
          <label htmlFor={`${idPrefix}-service`} className={s.label}>Služba</label>
          <select id={`${idPrefix}-service`} name="service" className={s.input}>
            <option>Obočie</option><option>Očné linky</option><option>Pery</option><option>Neviem, poraďte mi</option>
          </select>
        </div>
      )}
      <div className={s.field}>
        <label htmlFor={`${idPrefix}-message`} className={s.label}>Správa</label>
        <textarea id={`${idPrefix}-message`} name="message" rows={4} aria-invalid={!!errors.message} aria-describedby={errors.message ? `${idPrefix}-message-e` : undefined} className={s.input} />
        {errors.message && <p id={`${idPrefix}-message-e`} className={s.error}>{errors.message}</p>}
      </div>
      <button type="submit" className={s.button}>{button}</button>
      <p className="text-xs opacity-70">Demo formulár – údaje sa neodosielajú na server.</p>
    </form>
  );
}
