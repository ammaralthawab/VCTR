"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Lang = "en" | "ar";

interface PhilosophyProps {
    lang: Lang;
    onAuditOpen: () => void;
}

export default function Philosophy({ lang, onAuditOpen }: PhilosophyProps) {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-10%" });
    const isRtl = lang === "ar";

    return (
        <section
            ref={ref}
            id="philosophy"
            className="section-block"
            dir={isRtl ? "rtl" : "ltr"}
        >
            <div className="container-vctr">

                {/* Section label */}
                <motion.p
                    className="t-label mb-6"
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    {lang === "en" ? "OUR PHILOSOPHY" : "فلسفتنا"}
                </motion.p>

                <motion.h2
                    className="t-headline mb-6"
                    style={{ maxWidth: 700, fontFamily: isRtl ? "var(--font-ar)" : undefined }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, delay: 0.08 }}
                >
                    {lang === "en"
                        ? "Every brand is either a scalar or a vector."
                        : "كل علامة تجارية إما قياس أو متجه."}
                </motion.h2>

                <motion.p
                    className="t-subhead mb-20"
                    style={{ maxWidth: 540, fontFamily: isRtl ? "var(--font-ar)" : undefined }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.16 }}
                >
                    {lang === "en"
                        ? "Scalars have magnitude — they go up and down. Vectors have magnitude and direction. Only one of them moves with purpose."
                        : "القياسات لها مقدار فقط — تصعد وتنزل. المتجهات لها مقدار واتجاه. واحد فقط منهم يتحرك بهدف."}
                </motion.p>

                {/* Scalar vs Vector visualizer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">

                    {/* ── Scalar ── */}
                    <motion.div
                        className="card-vctr p-10 flex flex-col gap-8"
                        initial={{ opacity: 0, y: 28 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Bouncing number visualizer */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative h-32 flex items-end justify-center gap-1">
                                {/* Simple bar chart bars that oscillate */}
                                {[40, 70, 45, 85, 55, 75, 50, 65, 40, 80].map((h, i) => (
                                    <div
                                        key={i}
                                        className="w-4 rounded-sm"
                                        style={{
                                            height: `${h}%`,
                                            background: "var(--white-20)",
                                            animation: `scalar-bar-${i % 3} ${1.6 + i * 0.15}s ease-in-out infinite alternate`,
                                        }}
                                    />
                                ))}
                            </div>
                            {/* Up/down arrows */}
                            <div className="flex gap-2 items-center">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 3v14M4 9l6-6 6 6" stroke="var(--white-50)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 17V3M4 11l6 6 6-6" stroke="var(--white-50)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <p className="t-label text-accent mb-3">
                                {lang === "en" ? "SCALAR" : "قياس"}
                            </p>
                            <h3
                                className="text-xl font-semibold mb-3"
                                style={{ color: "var(--white-80)", fontFamily: isRtl ? "var(--font-ar)" : undefined }}
                            >
                                {lang === "en" ? "Magnitude only." : "مقدار فقط."}
                            </h3>
                            <p className="t-body" style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined }}>
                                {lang === "en"
                                    ? "A number that goes up and down. No direction. No trajectory. Just noise that looks like growth."
                                    : "رقم يصعد وينزل. لا اتجاه. لا مسار. مجرد ضجيج يبدو كالنمو."}
                            </p>
                        </div>
                    </motion.div>

                    {/* ── Vector ── */}
                    <motion.div
                        className="card-vctr p-10 flex flex-col gap-8"
                        style={{ borderColor: "rgba(0,68,255,0.3)", background: "rgba(0,68,255,0.04)" }}
                        initial={{ opacity: 0, y: 28 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Rotating arrow visualizer */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative w-32 h-32 flex items-center justify-center">
                                {/* Faint grid lines */}
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
                                    <line x1="64" y1="0" x2="64" y2="128" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                                    <line x1="0" y1="64" x2="128" y2="64" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                                    <circle cx="64" cy="64" r="48" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                                    <circle cx="64" cy="64" r="28" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                                </svg>
                                {/* Animated arrow */}
                                <svg
                                    className="w-full h-full"
                                    viewBox="0 0 128 128"
                                    style={{ animation: "vector-rotate 4s ease-in-out infinite" }}
                                >
                                    <defs>
                                        <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                                            <path d="M0,0 L0,6 L6,3 z" fill="#0044FF" />
                                        </marker>
                                    </defs>
                                    <circle cx="64" cy="64" r="4" fill="#0044FF" opacity="0.5" />
                                    <line
                                        x1="64" y1="64"
                                        x2="112" y2="26"
                                        stroke="#0044FF"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        markerEnd="url(#arrowhead)"
                                    />
                                    {/* Magnitude label */}
                                    <text x="78" y="52" fill="rgba(0,68,255,0.7)" fontSize="9" fontFamily="var(--font-mono)">|v|</text>
                                </svg>
                            </div>
                        </div>

                        <div>
                            <p className="t-label mb-3" style={{ color: "#0044FF" }}>
                                {lang === "en" ? "VECTOR" : "متجه"}
                            </p>
                            <h3
                                className="text-xl font-semibold mb-3"
                                style={{ color: "var(--white)", fontFamily: isRtl ? "var(--font-ar)" : undefined }}
                            >
                                {lang === "en" ? "Magnitude and direction." : "مقدار واتجاه."}
                            </h3>
                            <p className="t-body" style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined }}>
                                {lang === "en"
                                    ? "Growth that knows where it's going. Every decision compounds. Every move is intentional."
                                    : "نمو يعرف وجهته. كل قرار يتراكم. كل حركة مقصودة."}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Divider line */}
                <div className="border-t mb-20" style={{ borderColor: "var(--border)" }} />

                {/* Become a VCTR CTA */}
                <motion.div
                    className="flex flex-col items-center text-center gap-8"
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <p className="t-label" style={{ letterSpacing: "0.25em" }}>
                        {lang === "en" ? "THE CHOICE" : "الخيار"}
                    </p>
                    <h2
                        className="t-headline"
                        style={{
                            fontFamily: isRtl ? "var(--font-ar)" : undefined,
                            fontSize: "clamp(3rem, 7vw, 7rem)",
                            letterSpacing: "-0.04em",
                            lineHeight: 1,
                        }}
                    >
                        {lang === "en" ? (
                            <>Become a <span style={{ color: "var(--accent)" }}>VCTR.</span></>
                        ) : (
                            <>كن <span style={{ color: "var(--accent)" }}>متجهاً.</span></>
                        )}
                    </h2>
                    <p
                        className="t-subhead"
                        style={{ maxWidth: 440, fontFamily: isRtl ? "var(--font-ar)" : undefined }}
                    >
                        {lang === "en"
                            ? "Stop measuring. Start moving with direction."
                            : "توقف عن القياس. ابدأ التحرك بهدف."}
                    </p>
                    <button onClick={onAuditOpen} className="btn-accent btn-large" style={{ marginTop: "0.5rem" }}>
                        {lang === "en" ? "Start Your Project" : "ابدأ مشروعك"}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                            <path d="M1.5 12.5L12.5 1.5M12.5 1.5H4.5M12.5 1.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </motion.div>

            </div>

            {/* Keyframes */}
            <style>{`
                @keyframes vector-rotate {
                    0%   { transform: rotate(0deg); }
                    30%  { transform: rotate(-40deg); }
                    60%  { transform: rotate(25deg); }
                    100% { transform: rotate(0deg); }
                }
                @keyframes scalar-bar-0 { from { transform: scaleY(0.5); } to { transform: scaleY(1); } }
                @keyframes scalar-bar-1 { from { transform: scaleY(0.7); } to { transform: scaleY(1.05); } }
                @keyframes scalar-bar-2 { from { transform: scaleY(0.3); } to { transform: scaleY(0.9); } }
            `}</style>
        </section>
    );
}
