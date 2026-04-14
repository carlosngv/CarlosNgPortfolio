"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Download, ChevronDown, MapPin, Briefcase } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { useState, useEffect } from "react";

const photos = ["/me_1.jpeg", "/me_2.jpeg", "/me_3.jpeg"];

export function HeroSection() {
  const { t, lang } = useLanguage();
  const cvHref = lang === "es" ? "/CVCarlosNG_ES.pdf" : "/CVCarlosNG_EN.pdf";
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((i) => (i + 1) % photos.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center px-6 py-32 overflow-hidden">

      {/* Ambient background orbs */}
      <div
        className="absolute top-[-15%] right-[-8%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(160, 130, 90, 0.07) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-8%] w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(90, 110, 160, 0.05) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="mx-auto max-w-5xl w-full relative z-10">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-10"
        >
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-caption"
            style={{
              backgroundColor: "var(--bg-warm)",
              color: "var(--text-secondary)",
              boxShadow: "var(--shadow-outline-ring)",
            }}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ backgroundColor: "oklch(0.696 0.17 142.495)" }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: "oklch(0.696 0.17 142.495)" }}
              />
            </span>
            {t("hero.status")}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">

          {/* Left: text content */}
          <div>
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-caption mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              {t("hero.greeting")}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mb-4"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(48px, 7vw, 80px)",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-1.5px",
                color: "var(--text-primary)",
              }}
            >
              {t("hero.name")}
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="origin-left mb-5 h-px w-16"
              style={{ backgroundColor: "var(--border-default)" }}
            />

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-section-heading mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              {t("hero.title")}
            </motion.p>

            {/* Brief */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-body max-w-xl mb-12"
              style={{ color: "var(--text-secondary)" }}
            >
              {t("hero.brief")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={cvHref}
                download
                className="group flex items-center gap-2 h-12 px-5 rounded-full text-nav-link font-medium transition-all duration-200"
                style={{
                  backgroundColor: "var(--bg-warm)",
                  color: "var(--text-primary)",
                  boxShadow: "var(--shadow-outline-ring)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "var(--shadow-card)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "var(--shadow-outline-ring)";
                }}
              >
                <Download
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                  style={{ color: "var(--text-muted)" }}
                />
                {t("hero.cta.download")}
              </a>

              <Link
                href="/#contact"
                className="flex items-center px-5 h-12 rounded-full text-nav-link font-medium transition-opacity hover:opacity-75"
                style={{
                  backgroundColor: "var(--text-primary)",
                  color: "var(--bg-primary)",
                }}
              >
                {t("hero.cta.contact")}
              </Link>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:flex flex-col gap-3"
          >
            {/* Carousel */}
            <div
              className="relative rounded-[24px] overflow-hidden aspect-4/3"
              style={{ boxShadow: "var(--shadow-outline-ring)" }}
            >
              <AnimatePresence mode="sync">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={photos[current]}
                    alt={`Carlos Ng — photo ${current + 1}`}
                    fill
                    className="object-cover object-top"
                    priority={current === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10" />

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: i === current ? "20px" : "6px",
                      height: "6px",
                      backgroundColor: i === current ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
                    }}
                    aria-label={`Photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Metadata pills below image */}
            <div className="flex items-center gap-2">
              <div
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-caption flex-1 justify-center"
                style={{
                  backgroundColor: "var(--bg-warm)",
                  color: "var(--text-muted)",
                  boxShadow: "var(--shadow-outline-ring)",
                }}
              >
                <MapPin size={12} />
                {t("hero.location")}
              </div>
              <div
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-caption flex-1 justify-center"
                style={{
                  backgroundColor: "var(--bg-warm)",
                  color: "var(--text-muted)",
                  boxShadow: "var(--shadow-outline-ring)",
                }}
              >
                <Briefcase size={12} />
                {t("hero.experience")}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} style={{ color: "var(--text-muted)" }} />
        </motion.div>
      </motion.div>

    </section>
  );
}
