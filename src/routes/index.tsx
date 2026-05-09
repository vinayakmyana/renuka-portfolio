import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import portrait from "@/assets/portrait.jpg";
import workRage from "@/assets/work-rage.jpg";
import workMascot from "@/assets/work-mascot.jpg";
import workComic from "@/assets/work-comic.jpg";
import workBhansali from "@/assets/work-bhansali.jpg";
import workLeaf from "@/assets/work-leaf.jpg";
import workTiger from "@/assets/work-tiger.jpg";
import artWire from "@/assets/art-wire.jpg";
import artCrown from "@/assets/art-crown.jpg";
import artSculpt from "@/assets/art-sculpt.jpg";
import fineKrishna from "@/assets/fine-krishna.jpg";
import fineGanpati from "@/assets/fine-ganpati.jpg";
import fineAnime from "@/assets/fine-anime.jpg";
import fineShiva from "@/assets/fine-shiva.jpg";
import fineFace from "@/assets/fine-face.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ------------------------------ Loader ------------------------------ */
function Loader({ done }: { done: boolean }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.7, 0, 0.2, 1] } }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4"
            >
              Renuka Myana
            </motion.div>
            <div className="relative h-[2px] w-56 overflow-hidden bg-border mx-auto">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[var(--rust)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
            >
              Curating the gallery
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------ Cursor glow ------------------------------ */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} className="cursor-glow hidden md:block" aria-hidden />;
}

/* ------------------------------ Header ------------------------------ */
function Header() {
  const links = [
    { id: "about", label: "About" },
    { id: "works", label: "Works" },
    { id: "studio", label: "Studio" },
    { id: "gallery", label: "Gallery" },
    { id: "process", label: "Process" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.0, duration: 0.7 }}
      className="fixed top-0 inset-x-0 z-40 px-6 md:px-12 py-5 flex items-center justify-between bg-paper/70 backdrop-blur-md"
    >
      <a href="#top" className="serif text-lg tracking-tight">
        Renuka<span className="text-[var(--rust)]">.</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em]">
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} className="story-link text-foreground/80 hover:text-foreground">
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] border border-foreground/30 rounded-full px-4 py-2 hover:bg-foreground hover:text-cream transition-colors"
      >
        Say hello
      </a>
    </motion.header>
  );
}

/* ------------------------------ Hero ------------------------------ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 1.6 } },
  };
  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.7, 0, 0.2, 1] as [number, number, number, number] } },
  };

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden pt-28 pb-20">
      {/* Floating shapes */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-10 -left-16 w-[28rem] h-[28rem] rounded-full bg-[var(--rust)]/10 blur-3xl animate-float"
        aria-hidden
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-10 right-[-8rem] w-[22rem] h-[22rem] rounded-[40%_60%_55%_45%/55%_45%_60%_40%] bg-[var(--clay)]/60 animate-float"
        aria-hidden
      />
      <svg
        aria-hidden
        className="absolute top-1/3 right-1/3 w-32 h-32 text-foreground/15 animate-float"
        viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5"
      >
        <circle cx="50" cy="50" r="48" />
        <circle cx="50" cy="50" r="34" />
        <circle cx="50" cy="50" r="20" />
      </svg>

      <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10 items-center">
        <motion.div variants={stagger} initial="hidden" animate="show" className="md:col-span-7 relative z-10">
          <motion.div variants={item} className="flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            <span className="h-px w-10 bg-foreground/40" />
            Portfolio · MMXXVI
          </motion.div>
          <h1 className="serif leading-[0.92] text-[clamp(3.4rem,10vw,9rem)]">
            <motion.span variants={item} className="block">Renuka</motion.span>
            <motion.span variants={item} className="block italic text-[var(--rust)]">Myana.</motion.span>
          </h1>
          <motion.p variants={item} className="mt-8 max-w-md text-lg text-muted-foreground leading-relaxed">
            Design aspirant & visual artist exploring the quiet space
            between sketch, sculpture and feeling.
          </motion.p>

          {/* Signature */}
          <motion.svg
            variants={item}
            className="signature mt-6 h-16 text-foreground/70"
            viewBox="0 0 420 90" fill="none" stroke="currentColor" strokeWidth="1.4"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M10,60 C30,20 50,80 70,40 C90,10 110,70 130,30 C150,5 170,75 200,35 C220,10 250,70 280,30 C310,5 340,70 380,30 C395,15 410,40 415,55" />
          </motion.svg>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#works"
              className="group inline-flex items-center gap-3 bg-foreground text-cream px-7 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-[var(--rust)] transition-colors"
            >
              Explore portfolio
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-foreground/40 px-7 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-foreground hover:text-cream transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 1.4, ease: [0.7, 0, 0.2, 1] }}
          className="md:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] paper-frame rounded-sm overflow-hidden">
            <img
              src={portrait}
              alt="Portrait of Renuka Myana"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-cream paper-frame px-5 py-4 max-w-[14rem]">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Based in</div>
            <div className="serif text-xl mt-1">Ahilyanagar, MH</div>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}

/* ------------------------------ Reveal helper ------------------------------ */
function Reveal({ children, delay = 0, y = 30 }: { children: React.ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: [0.7, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <Reveal>
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground">{num}</span>
        <span className="h-px flex-1 bg-foreground/15" />
        <span className="serif italic text-lg text-foreground/70">{title}</span>
      </div>
    </Reveal>
  );
}

/* ------------------------------ About ------------------------------ */
function About() {
  const tags = ["Sketching", "Painting", "Wire Art", "Sculpting", "Photography", "Resin Art", "Material Handling"];
  return (
    <section id="about" className="relative py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="01" title="About" />
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <Reveal y={50}>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] paper-frame overflow-hidden rounded-sm">
                <img src={portrait} alt="Renuka in her studio" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
          <div className="md:col-span-7 md:pt-8">
            <Reveal delay={0.1}>
              <h2 className="serif text-5xl md:text-7xl leading-[1.05]">
                A young hand,<br />
                <span className="italic text-[var(--rust)]">an old soul</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-xl">
                I am a Class 12 design aspirant from Ahilyanagar, Maharashtra. My
                practice lives in the in-between — between graphite and resin,
                between concept and craft. I believe the best design begins with
                a feeling, then patiently looks for its form.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-xl">
                Whether I am bending wire into a pendant, sketching a deity, or
                building a brand from a single leaf — I want every piece to feel
                handmade, intentional, and quietly alive.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-2.5">
                {tags.map((t, i) => (
                  <motion.span
                    key={t}
                    className="tag-chip"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.5 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Featured Works ------------------------------ */
type Work = {
  title: string;
  category: string;
  year: string;
  blurb: string;
  image: string;
  span: "wide" | "tall" | "square";
  hover: "rage" | "luxury" | "eco" | "comic" | "zoom" | "default";
};

const works: Work[] = [
  { title: "RAGE", category: "Mood Board", year: "'25", blurb: "An emotional study of crimson, tear and texture.", image: workRage, span: "wide", hover: "rage" },
  { title: "Coca-Cola Mascot", category: "Character Design", year: "'25", blurb: "From scribble to icon — a friendly bear born of a bottle.", image: workMascot, span: "square", hover: "default" },
  { title: "Frosty Friends", category: "Comic Strip", year: "'24", blurb: "A small winter story, told in five frames.", image: workComic, span: "wide", hover: "comic" },
  { title: "Bhansali Productions", category: "Logo Identity", year: "'25", blurb: "Cinematic ornament for a luxury film house.", image: workBhansali, span: "tall", hover: "luxury" },
  { title: "Leaf Loom", category: "Eco Brand", year: "'25", blurb: "A woven leaf for a brand that breathes.", image: workLeaf, span: "square", hover: "eco" },
  { title: "Color Theory Tiger", category: "Fine Art", year: "'24", blurb: "Stripes broken into pure, unapologetic colour.", image: workTiger, span: "tall", hover: "zoom" },
];

function WorkCard({ w, i }: { w: Work; i: number }) {
  const overlays: Record<Work["hover"], string> = {
    rage: "bg-[var(--rust)]/85",
    luxury: "bg-foreground/85",
    eco: "bg-[var(--sage)]/85",
    comic: "bg-[var(--clay)]/85",
    zoom: "bg-foreground/70",
    default: "bg-foreground/80",
  };
  const span =
    w.span === "wide" ? "md:col-span-8" : w.span === "tall" ? "md:col-span-4 md:row-span-2" : "md:col-span-4";

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, delay: i * 0.05, ease: [0.7, 0, 0.2, 1] }}
      className={`group relative overflow-hidden paper-frame rounded-sm ${span}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={w.image}
          alt={w.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-110"
        />
        <div className={`absolute inset-0 ${overlays[w.hover]} opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8`}>
          <p className="text-cream max-w-md text-base leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
            {w.blurb}
          </p>
        </div>
      </div>
      <div className="px-6 py-5 flex items-baseline justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{w.category}</div>
          <h3 className="serif text-2xl mt-1">{w.title}</h3>
        </div>
        <span className="serif italic text-muted-foreground">{w.year}</span>
      </div>
    </motion.article>
  );
}

function Works() {
  return (
    <section id="works" className="relative py-28 md:py-40 px-6 md:px-12 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="02" title="Featured Works" />
        <Reveal>
          <h2 className="serif text-5xl md:text-7xl mb-16 max-w-3xl leading-[1.05]">
            Six rooms of <span className="italic text-[var(--rust)]">a small museum</span>.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-12 gap-6 md:auto-rows-[minmax(0,_1fr)]">
          {works.map((w, i) => <WorkCard key={w.title} w={w} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Studio (3D / craft) ------------------------------ */
const studioItems = [
  { img: artWire, title: "Resin Pendant", cat: "Wire & Resin", h: "tall" },
  { img: artCrown, title: "Crown — Group Project", cat: "Sculpture", h: "short" },
  { img: artSculpt, title: "Vessel Study", cat: "Sculpting", h: "tall" },
];

function Studio() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="studio" className="relative py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="03" title="The Studio · 3D & Craft" />
        <Reveal>
          <h2 className="serif text-5xl md:text-7xl mb-4 max-w-3xl leading-[1.05]">
            Held in the hand, <span className="italic">never on a screen</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-muted-foreground max-w-xl mb-16">
            Wire, resin, clay and patience — small objects that prefer touch to scrolling.
          </p>
        </Reveal>

        <div className="columns-1 md:columns-3 gap-6 [column-fill:_balance]">
          {studioItems.map((it, i) => (
            <motion.button
              key={it.title}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className="group block w-full mb-6 break-inside-avoid paper-frame overflow-hidden rounded-sm text-left"
            >
              <div className="overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className={`w-full ${it.h === "tall" ? "aspect-[4/5]" : "aspect-square"} object-cover transition-transform duration-[1.4s] group-hover:scale-110`}
                />
              </div>
              <div className="p-5 flex items-baseline justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{it.cat}</div>
                  <div className="serif text-xl mt-1">{it.title}</div>
                </div>
                <span className="serif italic text-muted-foreground text-sm">view ↗</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[90] bg-foreground/85 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setOpen(null)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.img
              src={studioItems[open].img}
              alt={studioItems[open].title}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-sm"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <button className="absolute top-6 right-6 text-cream text-xs uppercase tracking-[0.3em]">Close ✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ------------------------------ Fine Arts Gallery ------------------------------ */
const fineArts = [
  { img: fineKrishna, title: "Krishna", note: "Watercolour & ink" },
  { img: fineGanpati, title: "Ganpati", note: "Graphite study" },
  { img: fineAnime, title: "Soft Glance", note: "Anime study" },
  { img: fineShiva, title: "Mahadev", note: "Charcoal" },
  { img: fineFace, title: "Face Studies", note: "Conceptual" },
];

function FineArts() {
  return (
    <section id="gallery" className="relative py-28 md:py-40 px-6 md:px-12 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="04" title="Fine Arts · Exhibition" />
        <Reveal>
          <h2 className="serif text-5xl md:text-7xl mb-16 max-w-3xl leading-[1.05]">
            A wall of <span className="italic text-[var(--rust)]">quiet devotion</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-5 md:gap-6">
          {[
            "col-span-2 md:col-span-5 md:row-span-2",
            "col-span-2 md:col-span-4",
            "col-span-1 md:col-span-3",
            "col-span-1 md:col-span-4",
            "col-span-2 md:col-span-3",
          ].map((cls, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <figure className={`${cls} group paper-frame overflow-hidden rounded-sm`}>
                <div className="relative overflow-hidden">
                  <img
                    src={fineArts[i].img}
                    alt={fineArts[i].title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                    style={{ aspectRatio: i === 0 ? "4/5" : i === 1 ? "4/3" : "1/1" }}
                  />
                </div>
                <figcaption className="p-4 flex items-center justify-between">
                  <span className="serif text-lg">{fineArts[i].title}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{fineArts[i].note}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Process Timeline ------------------------------ */
const steps = [
  { n: "I", title: "Ideation", text: "A feeling looking for a shape. Notes, references, fragments." },
  { n: "II", title: "Sketching", text: "Quick lines. The hand thinks faster than the head." },
  { n: "III", title: "Refinement", text: "Choosing what stays. Material, palette, weight." },
  { n: "IV", title: "Final Work", text: "Patience. The piece becomes itself." },
];

function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section id="process" className="relative py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <SectionLabel num="05" title="The Process" />
        <Reveal>
          <h2 className="serif text-5xl md:text-7xl mb-20 leading-[1.05]">
            From a whisper, <span className="italic text-[var(--rust)]">to a thing</span>.
          </h2>
        </Reveal>

        <div ref={ref} className="relative">
          {/* the line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-foreground/15" />
          <motion.div
            className="absolute left-5 md:left-1/2 top-0 w-px bg-[var(--rust)] origin-top"
            style={{ scaleY: lineLength, height: "100%" }}
          />

          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className={`relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-16 mb-16 md:mb-24 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`md:text-right ${i % 2 ? "md:text-left" : ""}`}>
                  <div className="serif italic text-5xl text-[var(--rust)]/80">{s.n}</div>
                  <h3 className="serif text-3xl mt-2">{s.title}</h3>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-md">{s.text}</p>
                </div>
                {/* node */}
                <div className="absolute left-5 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--rust)] ring-4 ring-paper" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Contact ------------------------------ */
function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-6 md:px-12 bg-foreground text-cream overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-[var(--rust)]/30 blur-3xl animate-float"
      />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-cream/60 mb-8">06 — Contact</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="serif text-6xl md:text-[10rem] leading-[0.9]">
            Let's make<br /><span className="italic text-[var(--rust)]">something.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-10 text-cream/80">
          <Reveal delay={0.2}>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-2">Email</div>
              <a href="mailto:hello@renukamyana.in" className="serif text-2xl story-link">hello@renukamyana.in</a>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-2">Phone</div>
              <a href="tel:+910000000000" className="serif text-2xl story-link">+91 · on request</a>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-2">Studio</div>
              <p className="serif text-2xl">Ahilyanagar,<br />Maharashtra · IN</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.5}>
          <div className="mt-20 flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em]">
            {["Instagram", "Behance", "LinkedIn"].map((s) => (
              <a key={s} href="#" className="story-link text-cream/80 hover:text-cream">{s} ↗</a>
            ))}
          </div>
        </Reveal>

        <div className="mt-24 pt-8 border-t border-cream/15 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-cream/50">
          <div>© MMXXVI · Renuka Myana</div>
          <div>Crafted with care, by hand.</div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Page ------------------------------ */
function Index() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="grain relative bg-paper text-foreground">
      <Loader done={loaded} />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <div className="divider mx-12" />
        <About />
        <Works />
        <Studio />
        <FineArts />
        <Process />
        <Contact />
      </main>
    </div>
  );
}
