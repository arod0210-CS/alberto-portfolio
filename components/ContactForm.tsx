"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgojbely", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Thanks! Your message was sent successfully.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again or email me directly.");
      }
    } catch {
      setStatus("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-slate-300">
          Name
          <input
            name="name"
            required
            className="focus-ring mt-2 w-full rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-slate-600"
            placeholder="Your name"
          />
        </label>

        <label className="text-sm text-slate-300">
          Email
          <input
            name="email"
            required
            type="email"
            className="focus-ring mt-2 w-full rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-slate-600"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm text-slate-300">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="focus-ring mt-2 w-full resize-none rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-slate-600"
          placeholder="Tell me about the opportunity..."
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="focus-ring mt-5 rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue/90 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p className="mt-4 text-sm text-emerald" role="status">
          {status}
        </p>
      )}
    </form>
  );
}