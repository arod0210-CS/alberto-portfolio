"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) { e.preventDefault(); setSent(true); }
  return <form onSubmit={submit} className="card p-6 sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm text-slate-300">Name<input required className="focus-ring mt-2 w-full rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-slate-600" placeholder="Your name" /></label><label className="text-sm text-slate-300">Email<input required type="email" className="focus-ring mt-2 w-full rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-slate-600" placeholder="you@company.com" /></label></div>
    <label className="mt-5 block text-sm text-slate-300">Message<textarea required rows={5} className="focus-ring mt-2 w-full resize-none rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-slate-600" placeholder="Tell me about the opportunity..." /></label>
    <button className="focus-ring mt-5 rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue/90 hover:shadow-glow">Send Message</button>{sent && <p className="mt-4 text-sm text-emerald" role="status">Thanks! This demo form is ready to connect to your preferred email service.</p>}
  </form>;
}
