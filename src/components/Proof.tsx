"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Lang = "en" | "ar";

interface PhilosophyProps { lang: Lang }

const copy = {
    en: {
        label: "OUR PHILOSOPHY",
        headline: "Every brand is a vector.",
        body: "A vector has two properties: direction and magnitude. Most agencies give you magnitude without direction—noise, content, spend. We start with direction. We define where your brand should go, then we give it the force to get there.",
        col1_title: "Direction",
        col1_body: "Strategy, positioning, and identity. We define who you are, who you're speaking to, and why they should care.",
        col2_title: "Magnitude",
        col2_body: "Design, campaigns, and execution. The force that moves your brand from intention to impact.",
    },
    ar: {
        label: "فلسفتنا",
        headline: "كل علامة تجارية هي متجه.",
        body: "للمتجه خاصيتان: الاتجاه والقوة. أغلب الوكالات تمنحك القوة بلا اتجاه—ضوضاء ومحتوى وإنفاق. نحن نبدأ بالاتجاه. نحدد إلى أين يجب أن تذهب علامتك، ثم نمنحها القوة للوصول.",
        col1_title: "الاتجاه",
        col1_body: "الاستراتيجية والتمركز والهوية. نحدد من أنت، ومن تخاطب، ولماذا يجب أن يهتموا.",
        col2_title: "القوة",
        col2_body: "التصميم والحملات والتنفيذ. القوة التي تنقل علامتك من النية إلى التأثير.",
    },
};

export default function Proof({ lang }: PhilosophyProps) {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-15%" });
    const isRtl = lang === "ar";
    const c = copy[lang];

    return (
        <section
            ref={ref}
            id="philosophy"
            className="section-block"
            dir={isRtl ? "rtl" : "ltr"}
        >
            <div className="container-vctr">
                <motion.p
                    className="t-label mb-10"
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    {c.label}
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left — headline + body */}
                    <div className="lg:col-span-6">
                        <motion.h2
                            className="t-headline mb-8"
                            style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {c.headline}
                        </motion.h2>
                        <motion.p
                            className="t-body"
                            style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined, maxWidth: 520 }}
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {c.body}
                        </motion.p>
                    </div>

                    {/* Right — two columns */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:pt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            <div className="w-8 h-px bg-accent mb-6" />
                            <h3
                                className="text-lg font-semibold mb-3"
                                style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined }}
                            >
                                {c.col1_title}
                            </h3>
                            <p className="t-body text-sm" style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined }}>
                                {c.col1_body}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.35 }}
                        >
                            <div className="w-8 h-px bg-accent mb-6" />
                            <h3
                                className="text-lg font-semibold mb-3"
                                style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined }}
                            >
                                {c.col2_title}
                            </h3>
                            <p className="t-body text-sm" style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined }}>
                                {c.col2_body}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
