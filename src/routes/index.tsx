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
          <p className="label-mono">02 — Sobre Bruna</p>
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
                <span className={`font-display-x text-4xl italic ${pillar.color}`}>0{i + 1}</span>
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
            <Star className="float-y absolute -right-3 top-6 z-20 w-12 text-secondary md:w-16" />
            <div className="relative mx-auto aspect-[4/5] w-[82%] overflow-hidden rounded-t-full border-2 border-ink bg-accent">
              <div className="placeholder-art absolute inset-0" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-accent-foreground">
                <Flower className="w-16 opacity-60" petal="fill-primary" core="fill-secondary" />
                <span className="label-mono bg-ink px-2 py-1 text-background">[ Foto principal · Bruna ]</span>
                <span className="label-mono text-accent-foreground/60">retrato editorial · alta resolução</span>
              </div>
            </div>
            <span className="label-mono absolute -right-1 bottom-10 origin-bottom-right -rotate-90 whitespace-nowrap md:-right-8">
              Criativa · Artística · Autêntica
            </span>
          </div>

          {/* POSITIONING + CTA */}
          <div className="reveal relative z-20 mt-8 flex flex-col justify-end gap-6 md:col-span-3 md:mt-0" style={{ animationDelay: ".3s" }}>
            <p className="label-mono text-secondary">Criadora de conteúdo & influência criativa</p>
            <p className="font-display-x text-2xl leading-tight">
              Conteúdo, influência e direção estética — transitando entre universos com uma só assinatura.
            </p>
            <p className="label-mono leading-relaxed opacity-80">Beauty · Style · Lifestyle · Cultura pop · Conteúdo criativo</p>
            <div className="flex flex-col gap-3">
              <a href="#portfolio" className="group label-mono flex items-center justify-between border-2 border-ink bg-ink px-5 py-4 text-background transition-all hover:bg-secondary hover:text-ink">
                Ver meu trabalho <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#universos" className="group label-mono flex items-center justify-between border-2 border-primary-foreground px-5 py-4 transition-all hover:bg-primary-foreground hover:text-primary">
                Conhecer meu universo <span className="transition-transform group-hover:rotate-45">✦</span>
              </a>
            </div>
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

      {/* 04 UNIVERSOS — transition */}
      <section id="universos" className="relative scroll-mt-16 overflow-hidden bg-ink py-20 text-background md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <p className="label-mono mb-4 text-secondary">Territórios criativos</p>
          <h2 className="reveal font-display-x mb-12 text-[14vw] leading-[0.85] md:text-9xl">
            Muitos mundos.<br /><i className="text-primary">Uma assinatura.</i>
          </h2>
          <div className="relative">
            <Flower className="spin-slow pointer-events-none absolute left-1/2 top-1/2 z-10 w-40 -translate-x-1/2 -translate-y-1/2 opacity-95 md:w-64" petal="fill-primary" core="fill-secondary" />
            <div className="grid grid-cols-2 gap-px border border-background/30 bg-background/30 md:grid-cols-4">
              {[
                ["Beauty", "Make · cabelo · skincare · transformações", "text-primary"],
                ["Style", "Looks · estética · composição", "text-secondary"],
                ["Lifestyle", "Rotina · casa · escolhas", "text-cobalt"],
                ["Cultura pop", "Música · séries · terror", "text-accent"],
              ].map(([t, d, c], i) => (
                <article key={t} className="group relative flex aspect-[3/4] flex-col justify-between bg-ink p-4 transition-colors duration-500 hover:bg-primary md:p-6">
                  <div className="flex justify-between">
                    <span className="label-mono text-background/50">U.0{i + 1}</span>
                    <Star className={`w-5 transition-transform duration-700 group-hover:rotate-180 ${c} group-hover:text-background`} />
                  </div>
                  <div>
                    <h3 className={`font-display-x text-3xl italic md:text-5xl ${c} transition-colors group-hover:text-background`}>{t}</h3>
                    <p className="mt-2 text-xs text-background/70">{d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <p className="label-mono mt-8 text-background/60">Também aberta a: alimentação · tecnologia · eletrodomésticos · varejo · entretenimento</p>
        </div>
      </section>

      {/* 02 SOBRE */}
      <AboutBruna />

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
