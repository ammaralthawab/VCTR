"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Lang = "en" | "ar";

interface AuditModalProps {
    open: boolean;
    onClose: () => void;
    lang: Lang;
}

const WHATSAPP_NUMBER = "966500000000"; // Replace with actual number

const copy = {
    en: {
        label: "NEW PROJECT",
        headline: "Let's build something great.",
        sub: "Tell us about your brand and goals. A VCTR creative director will respond within 24 hours.",
        fields: ["Full Name", "Company / Brand", "Your Role", "What do you need?"],
        placeholders: ["Your name", "Brand or company name", "Founder, CMO, etc.", "Brand identity, logo refresh, campaign…"],
        submit: "Send Brief →",
        or: "or",
        whatsapp: "Message us on WhatsApp",
        confirm_h: "Brief received.",
        confirm_sub: "A VCTR creative director will be in touch within 24 hours.",
    },
    ar: {
        label: "مشروع جديد",
        headline: "فلنبنِ شيئاً عظيماً.",
        sub: "أخبرنا عن علامتك وأهدافك. سيردّ عليك مدير إبداعي من VCTR خلال 24 ساعة.",
        fields: ["الاسم الكامل", "الشركة / العلامة", "منصبك", "ماذا تحتاج؟"],
        placeholders: ["اسمك", "اسم العلامة أو الشركة", "مؤسس، مدير تسويق، إلخ.", "هوية بصرية، تحديث شعار، حملة…"],
        submit: "أرسل الموجز →",
        or: "أو",
        whatsapp: "راسلنا عبر واتساب",
        confirm_h: "تم استلام الموجز.",
        confirm_sub: "سيتواصل معك مدير إبداعي من VCTR خلال 24 ساعة.",
    },
};

export default function AuditModal({ open, onClose, lang }: AuditModalProps) {
    const [submitted, setSubmitted] = useState(false);
    const c = copy[lang];
    const isRtl = lang === "ar";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => { setSubmitted(false); onClose(); }, 4000);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
                    dir={isRtl ? "rtl" : "ltr"}
                >
                    <motion.div
                        className="w-full max-w-lg mx-4 relative overflow-y-auto"
                        style={{
                            background: "var(--surface-2)",
                            border: "1px solid var(--border)",
                            borderRadius: 12,
                            maxHeight: "90vh",
                            padding: "2.5rem",
                        }}
                        initial={{ y: 32, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 32, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 text-white/30 hover:text-white transition-colors z-10"
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>

                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <p className="t-label mb-4">{c.label}</p>
                                    <h2
                                        className="text-2xl font-semibold mb-2"
                                        style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined, letterSpacing: "-0.02em" }}
                                    >
                                        {c.headline}
                                    </h2>
                                    <p
                                        className="text-sm mb-8"
                                        style={{ color: "var(--white-50)", fontFamily: isRtl ? "var(--font-ar)" : undefined }}
                                    >
                                        {c.sub}
                                    </p>

                                    <form onSubmit={handleSubmit}>
                                        <div className="space-y-5">
                                            {c.fields.map((field, i) => (
                                                <div key={i}>
                                                    <label
                                                        className="block text-xs font-medium mb-2 uppercase tracking-wider"
                                                        style={{ color: "var(--white-50)", letterSpacing: "0.12em" }}
                                                    >
                                                        {field}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="terminal-input"
                                                        placeholder={c.placeholders[i]}
                                                        required={i < 2}
                                                        style={{ fontSize: "0.9375rem" }}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn-accent w-full justify-center mt-8"
                                            style={{ height: 48 }}
                                        >
                                            {c.submit}
                                        </button>
                                    </form>

                                    {/* Divider */}
                                    <div className="flex items-center gap-4 my-6">
                                        <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
                                        <span className="text-xs" style={{ color: "var(--white-20)" }}>{c.or}</span>
                                        <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
                                    </div>

                                    {/* WhatsApp */}
                                    <a
                                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-outline w-full justify-center"
                                        style={{ height: 48, textDecoration: "none" }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        {c.whatsapp}
                                    </a>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="confirm"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-2 h-2 bg-accent rounded-full mx-auto mb-6 pulse-dot" />
                                    <h2
                                        className="text-2xl font-semibold mb-3"
                                        style={{ fontFamily: isRtl ? "var(--font-ar)" : undefined }}
                                    >
                                        {c.confirm_h}
                                    </h2>
                                    <p className="text-sm" style={{ color: "var(--white-50)", fontFamily: isRtl ? "var(--font-ar)" : undefined }}>
                                        {c.confirm_sub}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
