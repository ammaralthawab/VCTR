"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Lang = "en" | "ar";

interface NavProps {
    lang: Lang;
    onLangToggle: () => void;
    onAuditOpen: () => void;
}

export default function Nav({ lang, onLangToggle, onAuditOpen }: NavProps) {
    const [scrolled, setScrolled] = useState(false);
    const isRtl = lang === "ar";

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav className={`nav-vctr ${scrolled ? "scrolled" : ""}`} dir={isRtl ? "rtl" : "ltr"}>
            {/* Logo */}
            <a href="#hero" className="flex items-center group" aria-label="VCTR home">
                {/* Small icon — always visible, hide full logo on very small screens */}
                <Image
                    src="/logo-icon.jpeg"
                    alt="VCTR icon"
                    width={36}
                    height={36}
                    className="rounded-sm sm:hidden"
                    style={{ objectFit: "contain", width: 36, height: "auto" }}
                    priority
                />
                {/* Full EN logo on medium+ (hidden in AR mode) */}
                {!isRtl && (
                    <Image
                        src="/logo-en.jpeg"
                        alt="VCTR"
                        width={120}
                        height={36}
                        className="hidden sm:block"
                        style={{ objectFit: "contain", width: 120, height: "auto" }}
                        priority
                    />
                )}
                {/* Full AR logo (shown in AR mode) */}
                {isRtl && (
                    <Image
                        src="/logo-ar.jpeg"
                        alt="فكتر"
                        width={140}
                        height={36}
                        className="hidden sm:block"
                        style={{ objectFit: "contain", width: 140, height: "auto" }}
                        priority
                    />
                )}
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
