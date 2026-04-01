"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Globe from "@/components/ui/globe";

type Lang = "en" | "ar";

const copy = {
    en: {
        label: "MARKETING AGENCY · RIYADH, KSA",
        pre: "Building",
        suffix_l: "W",
        suffix_r: "RLDS",
        sub: "An approach where companies don't just exist — they become worlds people can enter.",
        cta: "Start Your Project",
        scroll: "SCROLL",
    },
    ar: {
        label: "وكالة تسويق · الرياض، المملكة العربية السعودية",
        pre: "نبني",
        // In RTL flex: suffix_l lands on the RIGHT, globe in the MIDDLE, suffix_r on the LEFT
        // Reading RTL: عوال (right) + [globe replacing م] (left) = عوالم ✓
        suffix_l: "عوال",
        suffix_r: "",
        sub: "نهج يجعل الشركات لا مجرد شركات — بل عوالم يمكن للناس الدخول إليها.",
        cta: "ابدأ مشروعك",
        scroll: "اسحب",
    },
};

interface HeroProps {
    lang: Lang;
    onAuditOpen: () => void;
}

export default function Hero({ lang, onAuditOpen }: HeroProps) {
    const vectorRef = useRef<SVGPathElement>(null);
    const headlineRef = useRef<HTMLDivElement>(null);
    const isRtl = lang === "ar";

    useEffect(() => {
        if (!vectorRef.current) return;
        const path = vectorRef.current;
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2.4,
            ease: "power3.inOut",
            delay: 0.4,
        });
    }, []);

    useEffect(() => {
        if (!headlineRef.current) return;
        const els = headlineRef.current.querySelectorAll(".reveal-item");
        gsap.fromTo(
            els,
            { y: 48, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 1.1, ease: "power3.out", delay: 1.0 }
        );
    }, []);

    const c = copy[lang];

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
            style={{ paddingTop: "8rem", paddingBottom: "6rem" }}
            dir={isRtl ? "rtl" : "ltr"}
        >
            {/* Cinematic vector SVG */}
            <svg
                className="vector-line-svg"
                viewBox="0 0 1440 900"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
            >
                <defs>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#0044FF" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#0044FF" stopOpacity="0" />
                    </radialGradient>
                </defs>
                <ellipse cx="900" cy="350" rx="500" ry="400" fill="url(#glow)" />
                <path
                    ref={vectorRef}
                    d="M -100 900 L 720 100 L 1540 420"
                    stroke="#0044FF"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="square"
                />
                <circle cx="720" cy="100" r="4" fill="#0044FF" opacity="0.7" />
            </svg>

            {/* Content */}
            <div className="container-vctr relative z-10" ref={headlineRef}>
                <p className="t-label mb-10 reveal-item" style={{ opacity: 0 }}>
                    <span className="pulse-dot inline-block w-1.5 h-1.5 bg-accent rounded-full mr-3 align-middle" />
                    {c.label}
                </p>

                {/* "Building" — smaller line */}
                <h1
                    className="t-headline reveal-item"
                    style={{
                        opacity: 0,
                        fontFamily: isRtl ? "var(--font-ar)" : undefined,
                        color: "var(--white-50)",
                        marginBottom: "0.25rem",
                    }}
                >
                    {c.pre}
                </h1>

                {/* Headline — EN: W[globe]RLDS  |  AR: عوالم + decorative globe */}
                {isRtl ? (
                    /* ── Arabic version ──────────────────────────────────────
                       Arabic connected script can't cleanly swap a letter.
                       We show عوالم as one complete word and let the globe
                       sit as a large ambient sphere on the far right (the
                       reading-start side in RTL), as if the word emerges from it.
                    ─────────────────────────────────────────────────────── */
                    <div
                        className="reveal-item relative flex items-center"
                        style={{ opacity: 0, marginBottom: "2.5rem" }}
                    >
                        {/* Full Arabic word — connected, unbroken */}
                        <span
                            className="t-display"
                            style={{
                                fontFamily: "var(--font-ar)",
                                lineHeight: 1,
                                position: "relative",
                                zIndex: 2,
                            }}
                        >
                            عوالم
                        </span>

                        {/* Globe — decorative orb after the word (left side in RTL = end of word) */}
                        <span
                            className="inline-flex items-center flex-shrink-0"
                            style={{
                                marginRight: "clamp(0.6rem, 1.5vw, 1.2rem)",
                                marginTop: "0.05em",
                                opacity: 0.92,
                            }}
                        >
                            <Globe className="hero-globe-ar" />
                        </span>
                    </div>
                ) : (
                    /* ── English version: W[globe]RLDS ───────────────────── */
                    <div
                        className="reveal-item flex items-center justify-start"
                        style={{ opacity: 0, marginBottom: "2.5rem" }}
                    >
                        <span
                            className="t-display"
                            style={{ lineHeight: 1, letterSpacing: "-0.045em" }}
                        >
                            W
                        </span>
                        <span className="inline-flex items-center" style={{ marginTop: "0.05em" }}>
                            <Globe className="hero-globe" />
                        </span>
                        <span
                            className="t-display"
                            style={{
                                lineHeight: 1,
                                letterSpacing: "-0.045em",
                                WebkitTextStroke: "1.5px rgba(255,255,255,0.25)",
                                color: "transparent",
                            }}
                        >
                            RLDS
                        </span>
                    </div>
                )}

                <p
                    className="t-subhead reveal-item mb-14"
                    style={{ opacity: 0, maxWidth: "480px", fontFamily: isRtl ? "var(--font-ar)" : undefined }}
                >
                    {c.sub}
                </p>

                <div className="flex items-center gap-4 reveal-item" style={{ opacity: 0 }}>
                    <button onClick={onAuditOpen} className="btn-primary">
                        {c.cta}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                            <path d="M1.5 12.5L12.5 1.5M12.5 1.5H4.5M12.5 1.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Scroll hint */}
            <div
                className="absolute bottom-10 flex flex-col items-center gap-3 opacity-25"
                style={{ left: "50%", transform: "translateX(-50%)" }}
                aria-hidden
            >
                <p className="t-label" style={{ fontSize: "0.6rem", letterSpacing: "0.3em" }}>{c.scroll}</p>
                <div className="w-px h-10 bg-white/30" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
            </div>
        </section>
    );
}
