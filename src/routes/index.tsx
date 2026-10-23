import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bruna Barbosa — Criadora de Conteúdo & Influência Criativa" },
      {
        name: "description",
        content:
          "Portfólio de Bruna Barbosa (@brunapbarb), criadora de conteúdo e influência criativa: beauty, lifestyle, entretenimento e campanhas com marcas.",
      },
      { property: "og:title", content: "Bruna Barbosa — Criadora de Conteúdo & Influência Criativa" },
      {
        property: "og:description",
        content: "A publicidade entra no meu universo — não o meu universo na publicidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["universos", "Universos"],
  ["sobre", "Sobre"],
  ["numeros", "Números"],
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
function AboutBruna() {
  const pillars = [
    { title: "Criatividade", text: "Ideias rápidas, soluções visuais e facilidade para transformar um briefing em conceito.", color: "text-primary" },
    { title: "Interpretação", text: "Entendo o direcionamento da marca e consigo traduzir informações em conteúdo de forma clara.", color: "text-accent" },
    { title: "Agilidade", text: "Gosto de processos objetivos e tenho facilidade para chegar rapidamente a uma direção criativa.", color: "text-cobalt" },
    { title: "Identidade", text: "Meu conteúdo precisa fazer sentido para mim e para quem me acompanha — publicidade também pode ter personalidade.", color: "text-primary" },
    { title: "Precisão", text: "Sou extremamente criteriosa com o que entrego e busco fazer com que a primeira versão já esteja alinhada ao briefing.", color: "text-accent" },
  ];

  return (
    <section id="sobre" className="about-editorial scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mb-8 flex items-center justify-between border-b border-ink pb-4">
          <p className="label-mono"><span className="text-orange">02</span> — Sobre Bruna</p>
          <span className="label-mono text-muted-foreground">Por trás da estética</span>

        </div>
        <h2 className="font-display-x max-w-4xl text-5xl leading-[1.05] md:text-7xl">
          Uma mente que está sempre <i className="text-primary">alguns passos à frente.</i>
        </h2>

        <div className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-12 md:gap-12">
          <figure className="relative md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-muted">
              <div className="placeholder-art absolute inset-0 opacity-40" />
              <div className="absolute inset-6 rounded-t-full border border-primary/30" />
              <Flower className="absolute left-1/2 top-1/2 w-28 -translate-x-1/2 -translate-y-1/2 opacity-70" petal="fill-primary" core="fill-secondary" />
              <span className="label-mono absolute inset-x-6 bottom-10 text-center text-muted-foreground">[ Retrato profissional · Bruna ]</span>
            </div>
            <Star className="absolute -right-3 top-6 w-12 text-cobalt md:-right-5 md:w-16" />
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <span className="font-display-x text-2xl italic">Bruna Barbosa</span>
              <span className="label-mono text-muted-foreground">B.B. / 01</span>
            </figcaption>
          </figure>
          <div className="about-prose space-y-6 md:col-span-6 md:col-start-7 md:pt-8">
            <p className="font-display-x text-2xl leading-snug md:text-3xl">Tenho 32 anos, sou cabeleireira, maquiadora profissional e uma eterna apaixonada por criar —</p>
            <p className="text-muted-foreground">além de mãe de pet, porque aparentemente uma função extra nunca é demais.</p>
            <div className="my-8 h-1 w-12 bg-secondary" aria-hidden />
            <p>Nasci em uma cidade pequena do interior e sempre tive a sensação de que meu mundo era maior do que aquele lugar.</p>
            <p>Mudei para uma cidade maior, encontrei meu espaço, mas continuo gostando da ideia de construir meu próprio universo sem precisar estar no centro de tudo.</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-secondary py-14 text-secondary-foreground md:py-20">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-12 md:gap-12">
          <div className="relative md:col-span-7">
            <span className="font-display-x absolute -top-8 text-8xl leading-none text-primary" aria-hidden>“</span>
            <blockquote className="font-display-x relative pt-6 text-[2.75rem] leading-[1.05] md:text-7xl">
              Minha cabeça funciona rápido.<br /><i className="text-primary">Muito rápido.</i>
            </blockquote>
            <Star className="mt-7 w-10 text-accent" />
          </div>
          <div className="about-prose space-y-6 md:col-span-5 md:pt-8">
            <p>Sou aquela pessoa que naturalmente procura soluções, conecta ideias, pensa no próximo passo e gosta de fazer as coisas acontecerem.</p>
            <p>Sempre fui a amiga das dicas, das soluções, dos trabalhos manuais e das ideias que começam com um simples <span className="font-display-x text-2xl italic">“e se a gente…?”</span></p>
            <p>Na criação de conteúdo, isso se traduz em um olhar muito visual e uma facilidade enorme para transformar um briefing em uma direção criativa.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <h3 className="font-display-x text-4xl leading-tight md:text-5xl">O que eu <i className="text-accent">crio</i></h3>
            <Flower className="my-8 w-20 md:my-10 md:w-28" petal="fill-cobalt" core="fill-secondary" />
            <p className="about-prose">Meu conteúdo transita entre beleza, cabelo, maquiagem, lifestyle, estética, cultura pop, transformações e tudo aquilo que desperta minha curiosidade criativa.</p>
          </div>
          <div className="about-prose space-y-6 md:col-span-6 md:col-start-7 md:pt-10">
            <p>Gosto de entender rapidamente o que uma marca precisa e encontrar uma maneira de transformar isso em conteúdo que faça sentido dentro do meu universo — sem perder a mensagem, sem complicar a execução e sem deixar de parecer meu.</p>
            <p>Posso criar algo altamente produzido, visual e estético, mas também gosto do conteúdo mais espontâneo, próximo e humanizado.</p>
            <p className="font-display-x py-3 text-3xl leading-tight text-primary md:text-4xl">Porque nem todo conteúdo precisa parecer uma campanha para funcionar.</p>
            <p>Às vezes, a ideia mais simples é justamente a que encontra o público.</p>
            <p>E, quando existe uma boa ideia, gosto de executá-la com clareza, personalidade e atenção aos detalhes.</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-accent py-16 text-accent-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h3 className="font-display-x mb-8 text-3xl text-secondary md:text-4xl">Como eu trabalho com marcas</h3>
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            <h3 className="font-display-x text-4xl leading-tight md:col-span-5 md:text-5xl">Uma boa publicidade começa antes de apertar o <span className="text-secondary">REC<span className="ml-2 inline-block h-3 w-3 rounded-full bg-primary" aria-hidden /></span>.</h3>
            <div className="about-prose space-y-6 md:col-span-6 md:col-start-7">
              <p className="font-display-x text-2xl italic md:text-3xl">Começa entendendo o briefing.</p>
              <p>Tenho facilidade para interpretar direcionamentos, identificar o que realmente precisa ser comunicado e transformar informações de marca em uma ideia visualmente interessante e naturalmente integrada ao meu conteúdo.</p>
              <p>Meu objetivo é entregar um conteúdo que cumpra o briefing com precisão, mas que continue tendo a minha identidade.</p>
            </div>
          </div>
          <div className="relative mt-14 border-t border-accent-foreground/30 pt-10 md:mt-20 md:pt-14">
            <blockquote className="font-display-x max-w-5xl text-4xl leading-[1.15] md:text-6xl">
              A marca precisa aparecer.<br />
              <i className="text-secondary">Mas a Bruna também precisa estar ali.</i>
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <Star className="w-7 shrink-0 text-primary" />
              <span className="font-display-x text-2xl italic">Bruna Barbosa</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <h3 className="font-display-x max-w-2xl text-4xl leading-tight md:text-5xl">Por que trabalhar <i className="text-primary">comigo?</i></h3>
          <Flower className="hidden w-24 shrink-0 sm:block" petal="fill-primary" core="fill-secondary" />
        </div>
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 md:grid-cols-6 md:gap-y-14">
          {pillars.map((pillar, i) => (
            <article key={pillar.title} className={`relative min-w-0 border-t border-ink/20 pt-5 ${i < 3 ? "md:col-span-2" : "md:col-span-3"}`}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="font-display-x text-4xl italic text-orange">0{i + 1}</span>
                <Star className={`w-5 ${pillar.color}`} />
              </div>
              <h4 className={`font-display-x mb-3 text-3xl ${pillar.color}`}>{pillar.title}</h4>
              <p className="about-prose max-w-md">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, tone }: { value: string; label: string; tone: string }) {
  return (
    <div className="border-t border-background/25 pt-4">
      <p className={`font-display-x text-5xl leading-none tabular-nums sm:text-6xl md:text-7xl ${tone}`}>{value}</p>
      <p className="label-mono mt-3 text-background/75">{label}</p>
    </div>
  );
}

function PresencaDigital() {
  return (
    <section id="numeros" className="relative scroll-mt-16 overflow-hidden bg-ink py-20 text-background md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="label-mono mb-3 text-secondary">
              <span className="text-orange">03</span> — Presença digital
            </p>
            <h2 className="font-display-x text-6xl leading-[0.9] md:text-8xl">
              Em <i className="text-primary">números</i>
            </h2>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-background/80 md:col-span-4">
            Uma comunidade construída em diferentes plataformas, formatos e universos criativos.
          </p>
        </div>

        {/* YOUTUBE — destaque */}
        <div className="relative mb-16 border-y border-background/25 py-10 md:mb-24 md:py-14">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <p className="label-mono text-cobalt">YouTube · Bruna Barbosa</p>
            <p className="label-mono text-orange">1+ milhão de visualizações no YouTube</p>
          </div>
          <p className="font-display-x mt-6 text-[17vw] leading-none tabular-nums text-secondary md:text-[11rem]">1.063.476</p>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 md:max-w-2xl">
            <p className="label-mono text-background/75">visualizações totais</p>
            <Stat value="2.804" label="inscritos" tone="text-background" />
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          {/* INSTAGRAM */}
          <div className="md:col-span-7">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-primary" aria-hidden />
              <h3 className="font-display-x text-4xl md:text-5xl">Instagram</h3>
              <span className="label-mono text-background/60">@brunapbarb</span>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <Stat value="12.789" label="seguidores" tone="text-primary" />
              <Stat value="105.781" label="visualizações nos últimos 30 dias" tone="text-background" />
              <div className="sm:col-span-2">
                <Stat value="5.948" label="interações nos últimos 30 dias" tone="text-primary" />
                <p className="label-mono mt-2 text-background/50">
                  Reels · 3.300 <span className="text-orange">/</span> Stories · 1.900 <span className="text-orange">/</span> Posts · 748
                </p>
              </div>
            </div>
          </div>

          {/* TIKTOK */}
          <div className="relative md:col-span-5 md:mt-28">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-3 w-3 rotate-45 bg-accent ring-1 ring-background/40" aria-hidden />
              <h3 className="font-display-x text-4xl md:text-5xl">TikTok</h3>
              <span className="label-mono text-background/60">@brunapbarb</span>
            </div>
            <div className="grid gap-8">
              <Stat value="715.800" label="curtidas" tone="text-secondary" />
              <div className="grid gap-8 sm:grid-cols-2">
                <Stat value="8.679" label="seguidores" tone="text-background" />
                <Stat value="79.300" label="visualizações nos últimos 28/30 dias" tone="text-background" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-4 md:mt-28">
          <Flower className="h-10 w-10 shrink-0 spin-slow" core="fill-orange" />
          <p className="font-display-x text-2xl italic md:text-4xl">
            Cada plataforma tem seu ritmo.<br /><span className="text-primary">A assinatura continua sendo minha.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

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
      <section id="top" className="relative min-h-[100svh] overflow-hidden bg-primary pt-14 text-primary-foreground">
        {/* editorial top rail */}
        <div className="label-mono relative z-20 mx-auto flex max-w-7xl justify-between px-5 pt-4 opacity-90">
          <span>Ed. Nº 01</span>
          <span className="hidden sm:inline">Portfólio criativo</span>
          <span>@brunapbarb</span>
        </div>

        <div className="relative mx-auto grid max-w-7xl px-5 pb-10 pt-4 md:grid-cols-12 md:gap-6 md:pt-8">
          {/* NAME — layered over photo */}
          <h1 className="reveal font-display-x pointer-events-none relative z-20 text-[25vw] font-black leading-[0.78] tracking-[-0.04em] md:col-span-12 md:text-[12.5rem]">
            Bruna
            <span className="block text-right italic font-light text-secondary md:-mt-6">Barbosa</span>
          </h1>

          {/* PHOTO stage */}
          <div className="reveal relative z-10 -mt-[14vw] md:col-span-6 md:col-start-4 md:-mt-28" style={{ animationDelay: ".15s" }}>
            <div className="spin-slow absolute -inset-6 rounded-full border border-dashed border-primary-foreground/50" />
            <Flower className="float-y absolute -left-10 top-1/3 z-20 w-24 md:-left-20 md:w-36" petal="fill-cobalt" core="fill-secondary" />
            <Star className="float-y absolute -right-3 top-6 z-20 w-12 text-orange md:w-16" />
            <div className="relative mx-auto aspect-[4/5] w-[82%] overflow-hidden rounded-t-full border-2 border-ink bg-accent">
              <div className="placeholder-art absolute inset-0" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-accent-foreground">
                <Flower className="w-16 opacity-60" petal="fill-primary" core="fill-secondary" />
                <span className="label-mono bg-ink px-2 py-1 text-background">[ Foto principal · Bruna ]</span>
                <span className="label-mono text-accent-foreground/60">retrato editorial · alta resolução</span>
              </div>
            </div>
            <p className="label-mono mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
              <span>Criativa</span><span className="text-orange" aria-hidden>·</span><span>Artística</span><span className="text-orange" aria-hidden>·</span><span>Autêntica</span>
            </p>
          </div>

          {/* POSITIONING + CTA */}
          <div className="reveal relative z-20 mt-8 flex flex-col justify-end gap-6 md:col-span-3 md:mt-0" style={{ animationDelay: ".3s" }}>
            <p className="font-display-x text-2xl leading-tight text-secondary">Criadora de conteúdo &amp; influência criativa</p>
            <a href="#sobre" className="group label-mono flex items-center justify-between border-2 border-ink bg-ink px-5 py-4 text-background transition-all hover:bg-secondary hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
              Conheça meu trabalho <span className="transition-transform group-hover:translate-y-1" aria-hidden>↓</span>
            </a>
          </div>
        </div>

        {/* MANIFESTO */}
        <div className="relative z-20 border-t border-ink bg-background px-5 py-12 text-ink md:py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-6 md:grid-cols-12">
            <span className="font-display-x text-8xl -mb-10 leading-none text-primary md:col-span-1 md:mb-0 md:text-9xl">“</span>
            <blockquote className="reveal font-display-x text-[9vw] leading-[1] tracking-tight md:col-span-10 md:text-6xl">
              A publicidade entra no <i className="text-primary">meu universo</i> — não o meu universo <span className="bg-secondary px-1">na publicidade.</span>
            </blockquote>
            <p className="label-mono text-muted-foreground md:col-span-1">— B.B.</p>
          </div>
        </div>
      </section>

      {/* 04 UNIVERSOS */}
      <section id="universos" className="relative scroll-mt-16 overflow-hidden bg-ink py-20 text-background md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="label-mono text-secondary">04 — Universos de conteúdo</p>
            <Flower className="spin-slow pointer-events-none w-12 shrink-0 md:w-16" petal="fill-primary" core="fill-orange" />
          </div>
          <h2 className="reveal font-display-x mb-12 text-[13vw] leading-[0.85] md:text-9xl">
            Muitos mundos,<br /><i className="text-primary">uma assinatura.</i>
          </h2>
          <div className="grid grid-cols-1 gap-px border border-background/30 bg-background/30 sm:grid-cols-2 md:grid-cols-4">
            {UNIVERSOS.map(([t, d, c], i) => (
              <article key={t} className="group relative flex min-h-56 flex-col justify-between bg-ink p-5 transition-colors duration-500 hover:bg-primary md:aspect-[3/4] md:p-6">
                <div className="flex justify-between">
                  <span className="label-mono text-background/50">U.0{i + 1}</span>
                  <Star className={`w-5 transition-transform duration-700 group-hover:rotate-180 ${c} group-hover:text-background`} />
                </div>
                <div>
                  <h3 className={`font-display-x text-3xl italic md:text-4xl ${c} transition-colors group-hover:text-background`}>{t}</h3>
                  <p className="mt-3 text-sm text-background/75">{d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 02 SOBRE */}
      <AboutBruna />

      {/* 03 NÚMEROS */}
      <PresencaDigital />

      {/* 05 PORTFÓLIO */}
      <section id="portfolio" className="scroll-mt-16 border-y border-ink bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHead n="05" kicker="Portfólio" title={<>Campanhas que <i className="text-accent">parecem minhas</i>.</>} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-6">
            {CASES.map((c, i) => <CaseCard key={c.brand} item={c} index={i} />)}
          </div>
        </div>
      </section>

      {/* 06 FORMATOS */}
      <section id="formatos" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-20 md:py-28">
        <SectionHead n="06" kicker="Formatos de criação" title="Formatos de criação" />
        <p className="font-display-x mb-10 max-w-2xl text-2xl leading-snug md:text-3xl">
          “Conteúdo pensado para transformar marcas, produtos e ideias em experiências que <i className="text-primary">dão vontade de assistir</i>.”
        </p>
        <ul className="border-t border-ink">
          {FORMATOS.map(([f, d], i) => <FormatRow key={f} name={f} desc={d} index={i} />)}
        </ul>
      </section>

      {/* 07 MARCAS */}
      <section id="marcas" className="scroll-mt-16 bg-accent py-20 text-accent-foreground md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <p className="label-mono mb-3 text-secondary">07 — Marcas &amp; colaborações</p>
          <h2 className="font-display-x mb-4 text-5xl md:text-7xl">Marcas &amp; colaborações</h2>
          <p className="mb-12 max-w-xl text-lg text-accent-foreground/85">“Marcas que já fizeram parte do meu conteúdo.”</p>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {MARCAS.map(([cat, list]) => <BrandGroup key={cat} title={cat} brands={list} />)}
          </div>
        </div>
      </section>

      {/* 08 CONTATO */}
      <section id="contato" className="relative scroll-mt-16 overflow-hidden bg-secondary py-24 text-ink md:py-32">
        <Flower className="spin-slow pointer-events-none absolute -right-20 bottom-0 w-72 opacity-90 md:w-[28rem]" core="fill-orange" />
        <div className="relative mx-auto max-w-7xl px-5">
          <p className="label-mono mb-4">08 — Contato</p>
          <h2 className="font-display-x text-[14vw] leading-[0.85] md:text-[8rem]">
            Vamos criar algo <i className="text-primary">juntas?</i>
          </h2>
          <p className="mt-6 max-w-lg text-lg">Tem uma campanha em mente? Vamos conversar.</p>
          <a href="mailto:canalbrunabarbosa@gmail.com" className="label-mono mt-8 inline-flex border-2 border-ink bg-ink px-6 py-4 text-background transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
            Entrar em contato →
          </a>
          <ul className="mt-12 grid max-w-3xl gap-px border border-ink bg-ink sm:grid-cols-2">
            {CONTATOS.map(([k, v, href]) => (
              <li key={k} className="bg-secondary">
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex flex-col gap-1 p-5 transition-colors hover:bg-background focus-visible:bg-background">
                  <span className="label-mono text-muted-foreground">{k}</span>
                  <span className="font-display-x text-xl md:text-2xl">{v} <span className="text-orange transition-transform group-hover:translate-x-1" aria-hidden>↗</span></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="bg-ink px-5 py-10 text-background/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display-x text-3xl italic text-background">Bruna<span className="text-primary">.</span></p>
            <p className="label-mono mt-2">Criadora de conteúdo &amp; influência criativa</p>
          </div>
          <div className="label-mono flex flex-wrap gap-5">
            <a href="https://www.instagram.com/brunapbarb" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
            <a href="https://www.tiktok.com/@brunapbarb" target="_blank" rel="noreferrer" className="hover:text-primary">TikTok</a>
            <a href="#top" className="hover:text-primary">Topo ↑</a>
          </div>
        </div>
        <p className="label-mono mx-auto mt-8 max-w-7xl text-background/50">© Bruna Barbosa</p>
      </footer>
    </div>
  );
}

/* ---------- Content (edit here) ---------- */
const UNIVERSOS = [
  ["Beauty", "Maquiagem, cabelo, skincare e experimentação.", "text-primary"],
  ["Lifestyle", "Rotina, experiências, descobertas e momentos do cotidiano.", "text-secondary"],
  ["Entretenimento", "Trends, desafios, humor, referências de cultura pop e formatos que geram identificação.", "text-cobalt"],
  ["Estética & Criatividade", "Produções visuais, conceitos, transformações e conteúdos com maior direção estética.", "text-orange"],
] as const;

type Case = { brand: string; title: string; desc: string; reel: string; cover?: string };
/* Add `cover: "url"` to each case when the image is ready. */
const CASES: Case[] = [
  { brand: "Eudora Siàge", title: "Ultra Bond Reset", desc: "Campanha apresentando a nova linha de reparação dos fios.", reel: "https://www.instagram.com/reel/DdKMzk7K2O3/?srtk=eDBwN3RqM3czb3Y5" },
  { brand: "SHEGLAM", title: "Publicidade + review", desc: "Publicidade + review de maquiagem.", reel: "https://www.instagram.com/reel/DbLxD85qry1/?srtk=bGEzc2t5MjQyODgw" },
  { brand: "Supermercados Belinelli", title: "Nova cafeteria & reforma", desc: "Campanha regional apresentando a nova cafeteria e a reforma do supermercado.", reel: "https://www.instagram.com/reel/DXHqNzOhZ-e/?rpxt=MTg3YTdwbGxhNWlveA==" },
  { brand: "Amazon", title: "Black Friday", desc: "Campanha de Black Friday.", reel: "https://www.instagram.com/reel/DRfeyQmieY2/?vrfl=cXdzeW05OGhraTM4" },
  { brand: "Dove", title: "Desodorante", desc: "Publicidade de desodorante.", reel: "https://www.instagram.com/reel/DOf-2P_Dl5q/?exln=MTN4NTR5Z3Z3NGhqeg==" },
];
const CASE_LAYOUT = [
  "col-span-2 md:col-span-3 md:row-span-2",
  "col-span-1 md:col-span-3",
  "col-span-1 md:col-span-2 md:mt-12",
  "col-span-1 md:col-span-2",
  "col-span-1 md:col-span-2 md:-mt-12",
];
const CASE_TONES = ["bg-primary", "bg-accent", "bg-cobalt", "bg-orange", "bg-secondary"];

function CaseCard({ item, index }: { item: Case; index: number }) {
  return (
    <a
      href={item.reel}
      target="_blank"
      rel="noreferrer"
      aria-label={`Assistir ao Reel: ${item.brand} — ${item.title} (abre o Instagram)`}
      className={`group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${CASE_LAYOUT[index]}`}
    >
      <div className={`relative aspect-[9/16] overflow-hidden border-2 border-ink ${index === 0 ? "md:aspect-[4/5]" : ""} ${CASE_TONES[index]}`}>
        {item.cover ? (
          <img src={item.cover} alt={`Capa da campanha ${item.brand} — ${item.title}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="placeholder-art absolute inset-0 flex items-center justify-center">
            <span className="label-mono bg-ink px-2 py-1 text-background">[ Capa · {item.brand} ]</span>
          </div>
        )}
        <span className="label-mono absolute left-3 top-3 bg-background px-2 py-1 text-ink">Case 0{index + 1}</span>
        <span className="label-mono absolute bottom-3 right-3 bg-ink px-3 py-2 text-background transition-colors group-hover:bg-primary">▶ Ver Reel</span>
      </div>
      <div className="mt-3">
        <p className="label-mono text-muted-foreground">{item.brand}</p>
        <h3 className="font-display-x text-xl leading-tight transition-colors group-hover:text-primary md:text-2xl">{item.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
      </div>
    </a>
  );
}

const FORMATOS = [
  ["Challenge", "Produtos e ideias transformados em experiências participativas, divertidas e com potencial de conexão e compartilhamento."],
  ["Tutorial", "Conteúdo visual e demonstrativo que ensina, apresenta e mostra o produto de forma natural e fácil de entender."],
  ["Review", "Uma experiência real com o produto, combinando demonstração, opinião e percepção de quem realmente está usando — com close-ups, texturas, aplicação e detalhes visuais que valorizam a experiência e despertam o desejo pelo produto."],
  ["Transformação", "Do antes ao depois. Conteúdos que exploram processos, resultados e mudanças de forma visual e envolvente."],
  ["Conteúdo estético", "Vídeos visualmente marcantes, pensados para valorizar produto, conceito, campanha ou identidade de marca."],
  ["Vlog", "A marca inserida em momentos reais do cotidiano, criando uma narrativa mais espontânea, próxima e pessoal."],
  ["Storytelling", "Produtos e campanhas apresentados através de histórias, conceitos e narrativas que vão além da publicidade tradicional."],
  ["Humor", "Conteúdo leve, criativo e identificável, usando humor e situações do cotidiano para aproximar a marca do público."],
] as const;
const FORMAT_HOVER = ["hover:bg-secondary", "hover:bg-muted", "hover:bg-secondary", "hover:bg-muted"];

function FormatRow({ name, desc, index }: { name: string; desc: string; index: number }) {
  return (
    <li className={`group grid gap-2 border-b border-ink py-6 transition-colors md:grid-cols-12 md:items-baseline md:gap-6 md:px-4 ${FORMAT_HOVER[index % 4]}`}>
      <span className="label-mono text-orange md:col-span-1">F.0{index + 1}</span>
      <h3 className={`font-display-x text-3xl transition-transform group-hover:translate-x-2 md:col-span-4 md:text-5xl ${index % 2 ? "italic" : ""}`}>{name}</h3>
      <p className="text-base leading-relaxed text-muted-foreground md:col-span-7">{desc}</p>
    </li>
  );
}

const MARCAS = [
  ["Beleza & Cosméticos", ["Eudora", "O Boticário", "B. Hulmann", "Natura", "Dove", "Vichy", "Grupo L’Oréal", "Kamaleão Colors", "Sallve"]],
  ["Varejo & E-commerce", ["Amazon", "Mercado Livre", "SHEIN", "AliExpress", "App Amo Ofertas", "Supermercado Belinelli"]],
  ["Lifestyle & Outros", ["Dr. Peanut", "Pantys"]],
] as const;

function BrandGroup({ title, brands }: { title: string; brands: readonly string[] }) {
  return (
    <div>
      <p className="label-mono mb-4 border-b border-accent-foreground/40 pb-3 text-secondary">{title}</p>
      <ul className="flex flex-col">
        {brands.map((b) => (
          <li key={b} className="font-display-x border-b border-accent-foreground/15 py-3 text-2xl transition-colors hover:text-secondary md:text-3xl">{b}</li>
        ))}
      </ul>
    </div>
  );
}

const CONTATOS = [
  ["Instagram", "@brunapbarb", "https://www.instagram.com/brunapbarb"],
  ["TikTok", "@brunapbarb", "https://www.tiktok.com/@brunapbarb"],
  ["E-mail", "canalbrunabarbosa@gmail.com", "mailto:canalbrunabarbosa@gmail.com"],
  ["WhatsApp", "(16) 99617-7797", "https://wa.me/5516996177797"],
] as const;
