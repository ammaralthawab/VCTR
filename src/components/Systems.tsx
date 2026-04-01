"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Lang = "en" | "ar";

const services = [
    {
        id: "01",
        title_en: "Brand Identity",
        title_ar: "الهوية البصرية",
        desc_en: "Logo design, visual systems, typography, color palettes, and full brand guidelines built from scratch.",
        desc_ar: "تصميم الشعار والأنظمة البصرية والخطوط والألوان وإرشادات العلامة الكاملة من الصفر.",
        featured: false,
    },
    {
        id: "02",
        title_en: "Brand Refresh",
        title_ar: "تحديث العلامة",
        desc_en: "Your brand exists but needs an upgrade. We modernize logos, refine identity systems, and realign your visual language.",
        desc_ar: "علامتك موجودة لكنها تحتاج ترقية. نحدّث الشعارات ونصقل الهوية ونعيد تشكيل لغتك البصرية.",
        featured: false,
    },
    {
        id: "03",
        title_en: "Brand Analysis",
        title_ar: "تحليل العلامة",
        desc_en: "A deep audit of your current brand—positioning, messaging, visual identity, and competitive landscape. We find the gaps.",
        desc_ar: "تدقيق عميق لعلامتك الحالية—التمركز والرسائل والهوية البصرية والمشهد التنافسي. نجد الفجوات.",
        featured: false,
    },
    {
        id: "04",
        title_en: "Campaigns & Content",
        title_ar: "الحملات والمحتوى",
        desc_en: "Social media strategy, content production, paid media campaigns, and multi-channel marketing that drives real results.",
        desc_ar: "استراتيجية التواصل وإنتاج المحتوى والحملات المدفوعة والتسويق متعدد القنوات الذي يحقق النتائج.",
        featured: false,
    },
    {
        id: "05",
        title_en: "Worldbuilding",
        title_ar: "بناء العوالم",
        desc_en: "Instead of a company just being a company with a product, a company becomes a world that people can immerse themselves in. We architect the mythology, aesthetics, language, and experience that turns a brand into a universe.",
        desc_ar: "بدلاً من أن تكون الشركة مجرد شركة بمنتج، تصبح الشركة عالماً يمكن للناس الانغماس فيه. نبني الأسطورية والجماليات واللغة والتجربة التي تحوّل العلامة إلى كون.",
        featured: true,
    },
    {
        id: "06",
        title_en: "Social Media Management",
        title_ar: "إدارة وسائل التواصل",
        desc_en: "Full-service social media management — strategy, content calendar, creation, publishing, and community engagement that builds real audiences.",
        desc_ar: "إدارة شاملة لوسائل التواصل الاجتماعي — استراتيجية وتقويم محتوى وإنشاء ونشر وتفاعل مجتمعي يبني جمهوراً حقيقياً.",
        featured: false,
    },
    {
        id: "07",
        title_en: "Website Design & Development",
        title_ar: "تصميم وتطوير المواقع",
        desc_en: "High-performance, conversion-optimized websites built to match your brand's identity and drive real business outcomes.",
        desc_ar: "مواقع عالية الأداء ومحسّنة للتحويل مبنية لتتوافق مع هوية علامتك وتحقق نتائج أعمال حقيقية.",
        featured: false,
    },
];

interface ServicesProps { lang: Lang }

export default function Systems({ lang }: ServicesProps) {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-15%" });
    const isRtl = lang === "ar";

    return (
        <section
            ref={ref}
            id="services"
            className="section-block"
            style={{ background: "var(--surface)" }}
            dir={isRtl ? "rtl" : "ltr"}
        >
            <div className="container-vctr">
                {/* Header */}
                <div className="mb-16 lg:mb-20">
                    <motion.p
                        className="t-label mb-6"
                        initial={{ opacity: 0, y: 8 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        {lang === "en" ? "WHAT WE DO" : "ما نقدمه"}
                    </motion.p>
                    <motion.h2
                        className="t-headline"
                        style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined, maxWidth: 600 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {lang === "en" ? "End-to-end brand building." : "بناء شامل للعلامة التجارية."}
                    </motion.h2>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className={`card-vctr p-8 lg:p-10 cursor-default group ${item.featured ? "sm:col-span-2" : ""}`}
                            style={
                                item.featured
                                    ? { borderColor: "rgba(0,68,255,0.35)", background: "rgba(0,68,255,0.05)" }
                                    : {}
                            }
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={`relative z-10 ${item.featured ? "lg:flex lg:items-start lg:gap-20" : ""}`}>
                                <div className={`flex items-start justify-between mb-8 ${item.featured ? "lg:mb-0 lg:flex-col lg:gap-4 lg:min-w-[200px]" : ""}`}>
                                    <span className="t-label text-accent">{item.id}</span>
                                    {item.featured && (
                                        <span
                                            className="t-label hidden lg:block"
                                            style={{ color: "rgba(0,68,255,0.6)", letterSpacing: "0.2em" }}
                                        >
                                            {isRtl ? "الخدمة الأساسية" : "FLAGSHIP SERVICE"}
                                        </span>
                                    )}
                                </div>

                                <div className={item.featured ? "flex-1" : ""}>
                                    <h3
                                        className={`font-semibold mb-4 group-hover:text-white transition-colors ${item.featured ? "text-2xl lg:text-3xl" : "text-xl"}`}
                                        style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined, color: "var(--white-80)" }}
                                    >
                                        {isRtl ? item.title_ar : item.title_en}
                                    </h3>
                                    <p
                                        className="t-body text-sm leading-relaxed"
                                        style={{
                                            fontFamily: isRtl ? "var(--font-ar)" : undefined,
                                            maxWidth: item.featured ? "680px" : undefined,
                                        }}
                                    >
                                        {isRtl ? item.desc_ar : item.desc_en}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
