"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Proof from "@/components/Proof";
import Systems from "@/components/Systems";
import Magnitude from "@/components/Magnitude";
import Initiate from "@/components/Initiate";
import AuditModal from "@/components/AuditModal";
import WhatsAppButton from "@/components/WhatsAppButton";

type Lang = "en" | "ar";

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const [auditOpen, setAuditOpen] = useState(false);

  const toggleLang = () => {
    const next = lang === "en" ? "ar" : "en";
    setLang(next);
    document.documentElement.setAttribute("lang", next);
    document.documentElement.setAttribute("dir", next === "ar" ? "rtl" : "ltr");
  };

  return (
    <>
      <Nav lang={lang} onLangToggle={toggleLang} onAuditOpen={() => setAuditOpen(true)} />
      <main>
        <Hero lang={lang} onAuditOpen={() => setAuditOpen(true)} />
        <Philosophy lang={lang} onAuditOpen={() => setAuditOpen(true)} />
        <Proof lang={lang} />
        <Systems lang={lang} />
        <Magnitude lang={lang} onAuditOpen={() => setAuditOpen(true)} />
        <Initiate lang={lang} onAuditOpen={() => setAuditOpen(true)} />
      </main>
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} lang={lang} />
      <WhatsAppButton />
    </>
  );
}
