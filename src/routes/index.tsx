import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bruna Barbosa (@brunapbarb) — Portfólio & Media Kit" },
      {
        name: "description",
        content:
          "Criativa, artística, autêntica. A publicidade entra no universo de Bruna Barbosa — não o universo dela na publicidade.",
      },
      { property: "og:title", content: "Bruna Barbosa — Portfólio & Media Kit" },
      {
        property: "og:description",
        content: "Editorial digital interativo da criadora de conteúdo @brunapbarb.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["sobre", "Sobre"],
  ["numeros", "Números"],
  ["universos", "Universos"],
  ["portfolio", "Portfólio"],
  ["formatos", "Formatos"],
  ["marcas", "Marcas"],
  ["contato", "Contato"],
] as const;

/* ---------- Graphic atoms ---------- */
function Flower({ className = "", petal = "fill-primary", core = "fill-secondary" }: { className?: string; petal?: string; core?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse key={i} cx="100" cy="52" rx="22" ry="48" className={petal} transform={`rotate(${i * 45} 100 100)`} />
      ))}
      <circle cx="100" cy="100" r="26" className={core} />
    </svg>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <path d="M50 0 C54 40 60 46 100 50 C60 54 54 60 50 100 C46 60 40 54 0 50 C40 46 46 40 50 0Z" className="fill-current" />
    </svg>
  );
}

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`placeholder-art relative flex items-end border border-ink bg-card p-3 ${className}`}>
      <span className="label-mono bg-ink px-2 py-1 text-background">[ {label} ]</span>
    </div>
  );
}

function SectionHead({ n, title, kicker }: { n: string; title: React.ReactNode; kicker: string }) {
  return (
    <div className="mb-10 grid grid-cols-[auto_1fr] items-end gap-4 border-b border-ink pb-4">
      <span className="font-display-x text-6xl leading-none text-primary md:text-8xl">{n}</span>
      <div>
        <p className="label-mono text-muted-foreground">{kicker}</p>
        <h2 className="font-display-x text-4xl leading-[0.95] md:text-6xl">{title}</h2>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display-x text-xl italic">
            Bruna<span className="text-primary">.</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {NAV.map(([id, l]) => (
              <a key={id} href={`#${id}`} className="label-mono transition-colors hover:text-primary">
                {l}
              </a>
            ))}
          </nav>
          <button onClick={() => setOpen(!open)} className="label-mono border border-ink px-3 py-1.5 md:hidden" aria-expanded={open}>
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col border-t border-ink bg-primary md:hidden">
            {NAV.map(([id, l], i) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="flex items-baseline justify-between border-b border-ink/30 px-5 py-4 font-display-x text-3xl text-primary-foreground">
                {l} <span className="label-mono">0{i + 2}</span>
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* 01 HERO */}
      <section id="top" className="relative min-h-[100svh] bg-primary pt-16 text-primary-foreground">
        <Flower className="spin-slow absolute -right-24 -top-10 w-80 opacity-90 md:w-[34rem]" petal="fill-secondary" core="fill-accent" />
        <Flower className="spin-slow absolute -bottom-20 -left-16 w-56 md:w-72" petal="fill-cobalt" core="fill-secondary" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-12 md:py-16">
          <div className="reveal md:col-span-7">
            <p className="label-mono mb-6">Media Kit · Edição 01 · @brunapbarb</p>
            <h1 className="font-display-x text-[22vw] leading-[0.82] tracking-tight md:text-[11rem]">
              Bruna
              <br />
              <span className="italic text-secondary">Barbosa</span>
            </h1>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Criativa", "Artística", "Autêntica"].map((w, i) => (
                <span key={w} className={`label-mono border border-primary-foreground px-3 py-2 ${i === 1 ? "bg-secondary text-ink" : ""}`}>
                  {w}
                </span>
              ))}
            </div>
          </div>
          <div className="reveal relative md:col-span-5" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto aspect-[3/4] max-w-sm rounded-t-full border-2 border-ink bg-secondary p-3">
              <Placeholder label="Foto de capa · beleza" className="h-full rounded-t-full" />
            </div>
            <Star className="absolute -left-2 top-10 w-14 text-secondary" />
          </div>
        </div>
        <div className="relative border-y border-ink bg-ink py-3 text-background">
          <div className="marquee flex w-max gap-8 whitespace-nowrap font-display-x text-2xl italic">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex gap-8">
                {"A publicidade entra no meu universo — não o meu universo na publicidade ✦ ".repeat(2)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 02 SOBRE */}
      <section id="sobre" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-20 md:py-28">
        <SectionHead n="02" kicker="Sobre Bruna" title={<>Criadora, <i className="text-accent">diretora</i> de estética.</>} />
        <div className="grid gap-8 md:grid-cols-12">
          <Placeholder label="Retrato editorial" className="aspect-[4/5] md:col-span-5" />
          <div className="flex flex-col justify-between gap-8 md:col-span-7">
            <p className="font-display-x text-3xl leading-tight md:text-5xl">
              A beleza é um dos meus <span className="bg-secondary px-1">territórios criativos</span> — não uma prisão.
            </p>
            <p className="max-w-prose text-muted-foreground">[ Placeholder: bio da Bruna, trajetória e visão criativa — texto definitivo a ser fornecido. ]</p>
            <div className="grid grid-cols-2 gap-px border border-ink bg-ink sm:grid-cols-4">
              {["Impactante", "Criteriosa", "Versátil", "Inventiva"].map((t) => (
                <span key={t} className="label-mono bg-background p-4 text-center">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 NÚMEROS */}
      <section id="numeros" className="scroll-mt-16 bg-ink py-20 text-background md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <p className="label-mono mb-3 text-secondary">03 — Presença digital</p>
          <h2 className="font-display-x mb-12 text-5xl md:text-7xl">Em <i className="text-primary">números</i></h2>
          <div className="grid grid-cols-2 gap-px bg-background/20 md:grid-cols-4">
            {["Seguidores Instagram", "Seguidores TikTok", "Engajamento médio", "Alcance mensal"].map((l, i) => (
              <div key={l} className="bg-ink p-6">
                <p className={`font-display-x text-5xl md:text-7xl ${["text-primary", "text-secondary", "text-cobalt", "text-background"][i]}`}>—</p>
                <p className="label-mono mt-3 text-background/70">{l}</p>
                <p className="label-mono mt-1 text-background/40">[ a fornecer ]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 UNIVERSOS */}
      <section id="universos" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-20 md:py-28">
        <SectionHead n="04" kicker="Universos de conteúdo" title={<>Muitos mundos, <i className="text-primary">uma</i> assinatura.</>} />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ["Beleza", "Make · cabelo · skincare · transformações", "bg-primary text-primary-foreground"],
            ["Lifestyle", "Looks · rotina · estética", "bg-secondary text-ink"],
            ["Cultura pop", "Música · séries · terror", "bg-accent text-accent-foreground"],
            ["Formatos", "Reviews · tutoriais · challenges", "bg-cobalt text-background"],
          ].map(([t, d, c], i) => (
            <article key={t} className={`group relative aspect-square overflow-hidden border border-ink p-4 transition-transform hover:-translate-y-1 ${c} ${i % 2 ? "md:mt-12" : ""}`}>
              <span className="label-mono">0{i + 1}</span>
              <Star className="absolute right-3 top-3 w-6 transition-transform duration-700 group-hover:rotate-180" />
              <div className="absolute inset-x-4 bottom-4">
                <h3 className="font-display-x text-3xl italic md:text-4xl">{t}</h3>
                <p className="mt-1 text-xs opacity-80">{d}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="label-mono mt-8 text-muted-foreground">Aberta a: alimentação · tecnologia · eletrodomésticos · varejo · entretenimento · lifestyle</p>
      </section>

      {/* 05 PORTFÓLIO */}
      <section id="portfolio" className="scroll-mt-16 border-y border-ink bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHead n="05" kicker="Portfólio" title={<>Campanhas que <i className="text-accent">parecem minhas</i>.</>} />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
            <Placeholder label="Vídeo destaque" className="col-span-2 aspect-[9/12] md:col-span-3 md:row-span-2 md:aspect-auto" />
            <Placeholder label="Trabalho 02" className="aspect-[9/16] md:col-span-1" />
            <Placeholder label="Trabalho 03" className="aspect-[9/16] md:col-span-2" />
            <Placeholder label="Trabalho 04" className="aspect-square md:col-span-2" />
            <Placeholder label="Trabalho 05" className="aspect-square md:col-span-1" />
          </div>
        </div>
      </section>

      {/* 06 FORMATOS */}
      <section id="formatos" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-20 md:py-28">
        <SectionHead n="06" kicker="Formatos de criação" title={<>Como a marca <i className="text-primary">entra</i>.</>} />
        <ul className="border-t border-ink">
          {["Reels / TikTok", "Tutorial integrado", "Review", "Challenge", "Transformação", "Stories"].map((f, i) => (
            <li key={f} className="group flex items-center justify-between border-b border-ink py-5 transition-colors hover:bg-secondary md:px-4">
              <span className="font-display-x text-3xl transition-transform group-hover:translate-x-2 md:text-5xl">{f}</span>
              <span className="label-mono text-muted-foreground">F.0{i + 1}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 07 MARCAS */}
      <section id="marcas" className="scroll-mt-16 bg-accent py-20 text-accent-foreground md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <p className="label-mono mb-3 text-secondary">07 — Marcas & colaborações</p>
          <h2 className="font-display-x mb-12 text-5xl md:text-7xl">Quem já <i>entrou</i></h2>
          <div className="grid grid-cols-2 gap-px bg-accent-foreground/30 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="label-mono flex aspect-[3/2] items-center justify-center bg-accent text-accent-foreground/60">[ Logo {i + 1} ]</div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 CONTATO */}
      <section id="contato" className="relative scroll-mt-16 overflow-hidden bg-secondary py-24 text-ink md:py-32">
        <Flower className="spin-slow absolute -right-20 bottom-0 w-72 md:w-[28rem]" />
        <div className="relative mx-auto max-w-7xl px-5">
          <p className="label-mono mb-4">08 — Contato</p>
          <h2 className="font-display-x text-[16vw] leading-[0.85] md:text-[9rem]">
            Vamos criar <i className="text-primary">juntos?</i>
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="https://instagram.com/brunapbarb" target="_blank" rel="noreferrer" className="label-mono border-2 border-ink bg-ink px-6 py-4 text-center text-background transition-colors hover:bg-primary">
              @brunapbarb ↗
            </a>
            <span className="label-mono border-2 border-ink px-6 py-4 text-center">[ e-mail comercial a fornecer ]</span>
          </div>
        </div>
      </section>

      <footer className="label-mono flex justify-between bg-ink px-5 py-4 text-background/70">
        <span>© Bruna Barbosa</span>
        <a href="#top">Topo ↑</a>
      </footer>
    </div>
  );
}
