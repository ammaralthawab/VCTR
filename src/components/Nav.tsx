"use client";

import { useState, useEffect } from "react";

type Lang = "en" | "ar";

interface NavProps {
    lang: Lang;
    onLangToggle: () => void;
    onAuditOpen: () => void;
}

export default function Nav({ lang, onLangToggle, onAuditOpen }: NavProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav className={`nav-vctr ${scrolled ? "scrolled" : ""}`}>
            {/* Mark */}
            <a href="#hero" className="flex items-center gap-3 group">
                <div className="relative w-7 h-7">
                    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" aria-hidden>
                        <path d="M4 28L16 4L28 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 4L28 28" stroke="#0044FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="16" cy="4" r="2.5" fill="#0044FF" />
                    </svg>
                </div>
                <span className="font-semibold text-white tracking-[0.25em] text-xs">VCTR</span>
            </a>

            {/* Controls */}
            <div className="flex items-center gap-3">
                <button
                    onClick={onLangToggle}
                    className="btn-outline"
                    style={{ height: 40, padding: "0 1rem", fontSize: "0.75rem" }}
                    aria-label="Toggle language"
                >
                    {lang === "en" ? "عربي" : "EN"}
                </button>
                <button
                    onClick={onAuditOpen}
                    className="btn-primary"
                    style={{ height: 40, padding: "0 1.25rem", fontSize: "0.75rem" }}
                >
                    {lang === "en" ? "Start a Project" : "ابدأ مشروعك"}
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path d="M1.5 12.5L12.5 1.5M12.5 1.5H4.5M12.5 1.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
