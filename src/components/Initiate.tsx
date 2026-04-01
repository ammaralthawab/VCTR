"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Lang = "en" | "ar";

interface InitiateProps {
    lang: Lang;
    onAuditOpen: () => void;
}

const copy = {
    en: {
        label: "LET'S BUILD",
        headline: "Your brand starts here.",
        sub: "One conversation is all it takes. Tell us where you want to go—we'll handle the direction and the magnitude.",
        cta: "Start Your Project",
        footer_line: "VCTR · Riyadh, KSA",
        footer_tag: "Direction + Magnitude",
    },
    ar: {
        label: "فلنبدأ",
        headline: "علامتك تبدأ هنا.",
        sub: "محادثة واحدة تكفي. أخبرنا إلى أين تريد أن تصل—نحن نتولى الاتجاه والقوة.",
        cta: "ابدأ مشروعك",
        footer_line: "VCTR · الرياض، المملكة العربية السعودية",
        footer_tag: "الاتجاه + القوة",
    },
};

export default function Initiate({ lang, onAuditOpen }: InitiateProps) {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-10%" });
    const isRtl = lang === "ar";
    const c = copy[lang];

    return (
        <section
            ref={ref}
            id="initiate"
            style={{ background: "var(--surface)" }}
            dir={isRtl ? "rtl" : "ltr"}
        >
            {/* Main CTA */}
            <div className="container-vctr" style={{ paddingTop: "clamp(6rem, 14vw, 12rem)", paddingBottom: "clamp(6rem, 14vw, 12rem)" }}>
                <motion.p
                    className="t-label mb-8"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4 }}
                >
                    {c.label}
                </motion.p>

                <motion.h2
                    className="t-headline mb-6"
                    style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined, maxWidth: 600 }}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {c.headline}
                </motion.h2>

                <motion.p
                    className="t-subhead mb-12"
                    style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined, maxWidth: 480 }}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {c.sub}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <button onClick={onAuditOpen} className="btn-primary btn-large">
                        {c.cta}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                            <path d="M1.5 12.5L12.5 1.5M12.5 1.5H4.5M12.5 1.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="border-t py-8" style={{ borderColor: "var(--border)" }}>
                <div className="container-vctr flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <p className="t-label">{c.footer_line}</p>
                        <span className="hidden sm:block w-px h-3 bg-white/10" />
                        <p className="t-label">{c.footer_tag}</p>
                    </div>
                    <p className="t-label" style={{ color: "var(--white-20)" }}>©{new Date().getFullYear()}</p>
                </div>
            </div>
        </section>
    );
}
