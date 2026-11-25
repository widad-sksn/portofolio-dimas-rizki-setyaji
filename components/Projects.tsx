"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { gallery } from "./gallery";
import { useLanguage } from "./LanguageContext";

const rawFilters = ["Semua", ...new Set(gallery.map((item) => item.type))];

export default function Projects({ all = false }: { all?: boolean }) {
  const { locale } = useLanguage();
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState("Semua");
  const items = all
    ? gallery.filter((item) => filter === "Semua" || item.type === filter)
    : gallery.slice(0, 6);
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const selected = items[index];
  const step = (direction: number) =>
    setIndex((i) => (i + direction + items.length) % items.length);

  return (
    <>
      {all && (
        <div className="gallery-filters" role="group" aria-label="Kategori karya">
          {rawFilters.map((category) => {
            const isAll = category === "Semua";
            const label = isAll ? (locale === "en" ? "All" : "Semua") : category;
            return (
              <button
                key={category}
                aria-pressed={filter === category}
                onClick={() => {
                  setIndex(0);
                  setFilter(category);
                }}
              >
                {label}
              </button>
            );
          })}
          <small className="text-[#ffe600] font-mono font-bold" role="status">
            {items.length} {locale === "en" ? "VISUAL ASSETS" : "ASET VISUAL"}
          </small>
        </div>
      )}

      <div className="project-grid">
        {items.map((project, i) => (
          <motion.button
            className="project"
            type="button"
            key={project.image}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: (i % 3) * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-label={(locale === "en" ? "Open " : "Buka ") + project.name}
            onClick={() => {
              setIndex(i);
              dialog.current?.showModal();
            }}
          >
            <span className="project-art">
              <Image
                src={"/images/" + project.image + ".webp"}
                fill
                sizes="(max-width: 719px) 100vw, (max-width: 1100px) 50vw, 33vw"
                alt={project.name}
              />
            </span>
            <div className="project-info">
              <span className="project-tag">{project.type}</span>
              <span className="project-title">
                {project.name} <span aria-hidden="true">↗</span>
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {selected && (
        <dialog
          className="viewer"
          ref={dialog}
          aria-labelledby="viewer-title"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") step(-1);
            if (e.key === "ArrowRight") step(1);
          }}
        >
          <div className="viewer-head">
            <div aria-live="polite">
              <small className="text-xs font-mono font-bold text-[#ff7a45] uppercase tracking-wider block">
                LEONIDA VAULT // {selected.type} · {index + 1}/{items.length}
              </small>
              <h2 id="viewer-title" className="text-white">
                {selected.name}
              </h2>
            </div>
            <button type="button" autoFocus onClick={() => dialog.current?.close()}>
              {locale === "en" ? "Close ×" : "Tutup ×"}
            </button>
          </div>

          <div className="viewer-art">
            <Image
              key={selected.image}
              src={"/images/" + selected.image + ".webp"}
              fill
              sizes="90vw"
              alt={selected.name}
            />
          </div>

          <div className="viewer-controls">
            <button type="button" onClick={() => step(-1)}>
              {locale === "en" ? "← Previous" : "← Sebelumnya"}
            </button>
            <span className="text-xs text-[#ffe600] font-mono self-center">
              {locale === "en" ? "ARROW KEYS ◀ ▶" : "NAVIGASI PANAH ◀ ▶"}
            </span>
            <button type="button" onClick={() => step(1)}>
              {locale === "en" ? "Next →" : "Berikutnya →"}
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}
