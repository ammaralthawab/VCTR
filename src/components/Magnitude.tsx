"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Lang = "en" | "ar";

const steps = [
    {
        num: "01",
        title_en: "Discovery",
        title_ar: "الاكتشاف",
        desc_en: "We immerse ourselves in your market, competitors, and audience to identify the whitespace your brand should occupy.",
        desc_ar: "ننغمس في سوقك ومنافسيك وجمهورك لتحديد المساحة التي يجب أن تشغلها علامتك.",
    },
    {
        num: "02",
        title_en: "Strategy",
        title_ar: "الاستراتيجية",
        desc_en: "We define your positioning, messaging, and creative direction. Every decision is intentional—nothing is decoration.",
        desc_ar: "نحدد تمركزك ورسائلك واتجاهك الإبداعي. كل قرار مقصود—لا شيء للزينة.",
    },
    {
        num: "03",
        title_en: "Design & Build",
        title_ar: "التصميم والبناء",
        desc_en: "Logo, identity system, brand collateral, website, and social templates—everything your brand needs to exist with authority.",
        desc_ar: "الشعار ونظام الهوية ومواد العلامة والموقع وقوالب التواصل—كل ما تحتاجه علامتك.",
    },
    {
        num: "04",
        title_en: "Launch & Amplify",
        title_ar: "الإطلاق والتوسع",
        desc_en: "We launch with campaigns that create momentum. Paid media, organic content, and ongoing support to scale your presence.",
        desc_ar: "نطلق بحملات تصنع الزخم. إعلانات مدفوعة ومحتوى عضوي ودعم مستمر لتوسيع حضورك.",
    },
];

interface ProcessProps {
    lang: Lang;
    onAuditOpen: () => void;
}

export default function Magnitude({ lang, onAuditOpen }: ProcessProps) {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-10%" });
    const isRtl = lang === "ar";

    return (
        <section
            ref={ref}
            id="process"
            className="section-block"
            dir={isRtl ? "rtl" : "ltr"}
        >
            <div className="container-vctr">
                <div className="mb-16 lg:mb-20">
                    <motion.p
                        className="t-label mb-6"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        {lang === "en" ? "HOW WE WORK" : "كيف نعمل"}
                    </motion.p>

                    <motion.h2
                        className="t-headline"
                        style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined, maxWidth: 500 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {lang === "en" ? "Four phases. One trajectory." : "أربع مراحل. مسار واحد."}
                    </motion.h2>
                </div>

                {/* Steps */}
                <div>
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 border-t group"
                            style={{ borderColor: "var(--border)" }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: 0.12 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="md:col-span-1">
                                <span className="t-label text-accent">{step.num}</span>
                            </div>
                            <div className="md:col-span-3">
                                <h3
                                    className="text-xl font-semibold group-hover:text-accent transition-colors duration-300"
                                    style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined }}
                                >
                                    {isRtl ? step.title_ar : step.title_en}
                                </h3>
                            </div>
                            <div className="md:col-span-8">
                                <p
                                    className="t-body"
                                    style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined, maxWidth: 560 }}
                                >
                                    {isRtl ? step.desc_ar : step.desc_en}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Final line */}
                    <div className="border-t" style={{ borderColor: "var(--border)" }} />
                </div>

                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <button onClick={onAuditOpen} className="btn-accent btn-large">
                        {lang === "en" ? "Start Your Project" : "ابدأ مشروعك"}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                            <path d="M1.5 12.5L12.5 1.5M12.5 1.5H4.5M12.5 1.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
