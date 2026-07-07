"use client";

import { useState } from "react";
import { Icon } from "./Icons";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
    <nav className="section-shell flex h-16 items-center justify-between" aria-label="Main navigation">
      <a href="#home" className="focus-ring font-display text-lg font-semibold tracking-tight"><span className="text-emerald">A</span>R<span className="text-blue">.</span></a>
      <div className="hidden items-center gap-7 md:flex">{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} className="focus-ring text-sm text-slate-300 transition hover:text-white">{link}</a>)}<a href="/resume.pdf" download className="focus-ring rounded-full border border-white/15 px-4 py-2 text-sm font-semibold transition hover:border-blue hover:bg-blue/10">Resume</a></div>
      <button className="focus-ring rounded-lg p-2 text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><Icon name={open ? "close" : "menu"} className="h-6 w-6" /></button>
    </nav>
    {open && <div className="section-shell border-t border-white/10 py-4 md:hidden">{links.map(link => <a key={link} onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`} className="block py-3 text-sm text-slate-200">{link}</a>)}</div>}
  </header>;
}
