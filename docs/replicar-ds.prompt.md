# Master Prompt — Replicar o Design System para uma nova marca

Este é um **prompt reutilizável**. Fluxo: preencha o bloco **`[CONFIG DA MARCA]`** com os dados do cliente, apague a marca de referência (Vixlens) e entregue o documento inteiro para um agente (ex.: Claude Code) rodar dentro de um repo novo. O agente constrói o Design System completo — site React, tokens, componentes, governança — já on-brand.

> Referência viva: o DS da Vixlens (ds.vixlens.com.br). Este prompt é a receita para forkar aquilo para qualquer marca.

---

## COMO USAR (leia primeiro)

1. Crie um repo git vazio para o cliente.
2. Preencha `[CONFIG DA MARCA]` abaixo. Tudo que estiver `<entre colchetes>` é para trocar.
3. Cole este documento inteiro no agente, dentro do repo.
4. Ao final, revise no browser, faça o deploy e a tag `v0.1.0`.

**Regra de ouro:** nenhum valor de marca (cor, raio, fonte, texto) fica hardcoded nos componentes. **Tudo sai do token JSON** (fonte única). Trocar de marca = trocar o JSON + os assets.

---

## `[CONFIG DA MARCA]` — preencher por cliente

```yaml
marca:
  nome: "<Nome da Marca>"
  tagline: "<subtítulo curto, ex.: Laboratório Óptico>"
  dominio_ds: "<ds.exemplo.com.br>"
  repo: "<https://github.com/org/marca-ds>"
  deploy_autor: "<marca-lab-bot <bot@exemplo.com.br>>"   # autor git fixo dos deploys
  hospedagem: "<Vercel — auto-deploy no push da main>"

logo:
  # forneça os SVGs; sem clip-path (renderizam como <img>)
  positivo: "<arquivo/URL — fundo claro>"
  negativo: "<fundo escuro (ex.: branco+cor de acento)>"
  mono: "<versão monocromática>"
  simbolo: "<só o símbolo/ícone>"
  formatos_export: [SVG, PNG, PDF, WebP]     # opcional: gerar kit multi-formato
  regras: "<nunca recolorir/distorcer; margem mínima; etc.>"

cores:
  # cada cor com PAPEL. Defina a proporção de uso (ex.: 60-30-10).
  primarias:
    - { nome: "<Preto>",   hex: "<#1D1D1F>", papel: "<cor de maior presença; nunca #000000>" }
    - { nome: "<Amarelo>", hex: "<#FAC617>", papel: "<CTA/destaque; texto preto por cima>" }
    - { nome: "<Azul>",    hex: "<#0439D9>", papel: "<acento ~10%; nunca dominante>" }
    - { nome: "<Branco>",  hex: "<#FFFFFF>", papel: "<estrutural; fundo padrão>" }
  proporcao: "<60% neutro / 30% acento / 10% último recurso>"
  apoio:   [ { nome, hex, papel } ]           # cinza-card, cinza-borda, tints...
  rampa_neutra: { "50": "<#>", "100": "<#>", ... "700": "<#>" }
  status_callout:                              # cores semânticas (info/sucesso/aviso/erro)
    highlight:   { bg: "<#>", bar: "<#>" }
    informative: { bg: "<#>", bar: "<#>" }
    critical:    { bg: "<#>", bar: "<#>" }
    success:     { bg: "<#>", bar: "<#>" }
  chart: [ "<#chart-1>", "<#chart-2>", "<#chart-3>", "<#chart-4>", "<#chart-5>" ]  # paleta categórica p/ data-viz

tipografia:
  web:   { familia: "<Host Grotesk>", import: "<url Google Fonts ou @font-face>", pesos: [300,400,500,600,700,800] }
  print: { familia: "<Montserrat/Mont>", nota: "<só impressos>" }
  escala:   # por nível: desktop, mobile, peso, line-height, tracking
    h1: { desktop: "64px", mobile: "40px", weight: 700, lh: "100%", tracking: "-0.02em" }
    h2: { desktop: "48px", mobile: "32px", weight: 700, lh: "100%", tracking: "-0.02em" }
    h3: { desktop: "40px", mobile: "28px", weight: 700, lh: "100%", tracking: "-0.02em" }
    h4: { desktop: "32px", mobile: "24px", weight: 600, lh: "120%", tracking: "-0.01em" }
    h5: { desktop: "24px", mobile: "20px", weight: 500, lh: "120%", tracking: "-0.01em" }
    h6: { desktop: "20px", mobile: "16px", weight: 500, lh: "120%", tracking: "0" }
    paragraph: { desktop: "16px", mobile: "16px", weight: 400, lh: "150%", tracking: "0" }
    bold:      { desktop: "16px", mobile: "16px", weight: 600, lh: "150%", tracking: "0" }
    label:     { desktop: "14px", mobile: "14px", weight: 500, tracking: "0.02em" }
    caption:   { desktop: "12px", mobile: "12px", weight: 400, tracking: "0" }
    overline:  { desktop: "11px", mobile: "11px", weight: 500, tracking: "0.08em" }
    regras: ["<Nunca itálico>", "<Nunca caixa alta em parágrafo>", "<Máx. 2 pesos por bloco>"]

forma:   # personalidade do raio
  radius: { card: "<32px>", button: "<32px>", input: "<24px>", chip: "<12px>" }
  estilo: "<arredondado (luma) | reto | intermediário>"

elevacao:
  niveis:
    - { nome: "Rente",   classe: "shadow-none", uso: "no plano base" }
    - { nome: "Sutil",   classe: "shadow-sm",   uso: "inputs, hover leve" }
    - { nome: "Card",    classe: "shadow-md ring-1 ring-black/5", uso: "padrão de card" }
    - { nome: "Overlay", classe: "shadow-xl",   uso: "modais, popovers, dropdowns" }

espacamento: { base: "8px", ancora: "40px", escala: [4,8,12,16,20,24,30,40,48,60,64,80] }

icones:
  principal:   { lib: "<Phosphor>", link: "<phosphoricons.com>", pesos: ["Regular (UI)", "Bold (botões)", "Fill (ativo)"] }
  secundaria:  { lib: "<Lucide (usada pelo shadcn)>", link: "<lucide.dev/icons>" }
  tamanhos: [ {px:16, uso:"inline/labels"}, {px:20, uso:"botões/navegação"}, {px:24, uso:"UI padrão"} ]

voz:
  atributos: ["<direta>", "<técnica sem gritar>", "<sem enrolação>"]
  do:  ["<...>"]
  dont: ["<...>"]
  vocabulario_canonico: [ {termo:"<certo>", evitar:"<errado>"} ]

shadcn:
  preset: "<b6GgLgzgW (luma) ou o preset da marca>"
  base_color: "<mauve | slate | zinc...>"
  tema: "<cor de acento>"
  icones: "<lucide>"
```

---

## Stack e decisões travadas

- **Vite + React + Tailwind CSS + shadcn/ui** (estilo do preset — luma por padrão). `npx shadcn@latest init --preset <preset>`.
- Ícones: **lib principal da marca** + Lucide (interno do shadcn).
- **Fonte única de token**: `assets/tokens/<marca>-tokens.json` → gerador → `<marca>-tokens.css` + `<marca>-tailwind-preset.js`. Nunca editar os gerados na mão.
- `tailwind.config.js` **lê o JSON** (cores `<marca>-*`, `rounded-<marca>-card/button/input/chip`, spacing, `fontSize` gerado da escala).
- `src/index.css`: vars shadcn em HSL (`--background`, `--primary`, `--radius`, `--ring`...) + `--chart-1..5`.
- **Nav data-driven** (`src/data/nav.js`) + `src/App.jsx` renderiza as seções na ordem.
- Deploy: autor git **fixo** (bot da marca); push na main → build automático.

---

## Modelo de token (fonte única)

1. `assets/tokens/<marca>-tokens.json` com as chaves: `color` (primárias, apoio, `gray`, `reflecta`/extras, `callout`, `chart`), `radius`, `spacing`, `layout`, `typography` (`font-web`, `font-print`, `scale`).
2. `scripts/build-tokens.mjs` (Node ESM): lê o JSON e **gera** o `.css` (`:root { --<marca>-* }`) e o Tailwind preset. Modo `--check` falha (exit 1) se o gerado divergir do JSON.
3. `package.json`: `"tokens:build"`, `"tokens:check"`, e `"prebuild": "... --check"` (barra deploy com drift).

---

## Seções do site (gerar todas, on-brand)

**Início:** `Comece aqui` (onboarding do consumidor — 3 formas de puxar token [CSS/Tailwind/shadcn], primeiros passos, onde achar, downloads).
**Marca:** `Logotipo & Marcas` (kit multi-formato), `Fotografia` (do/don't), `Grafismos` (se houver).
**Fundamentos:** `Cores` (60-30-10 + swatches copiáveis), `Tipografia` (escala desktop↔mobile completa + download da fonte), `Tokens de forma` (radius), `Elevação`, `Iconografia`, `Espaçamento`, `Grid & breakpoints`, `Acessibilidade` (contraste WCAG **computado** + foco/teclado/movimento/daltonismo), `Data-viz` (gráficos shadcn Charts + paleta categórica).
**Voz:** `Voz & Tom`, `Vocabulário Canônico`.
**Componentes:** `Botões`, `Inputs`, `Cards`, `Callouts`, `Biblioteca shadcn` (props por componente), `Playground` (controles de prop ao vivo + código).
**Materiais:** `Templates` (se houver).
**Sobre o sistema:** `Changelog` (SemVer), `Contribuir`.

Cada seção usa o componente `Section` (`id`, `eyebrow` numerado **sem duplicar**, `title`, `desc`). Componentes trazem **Props + Do/Don't + snippet**.

---

## Recursos transversais (reutilizáveis)

- `Copy.jsx` — `CopyValue` (copiar cor/token clicando), `CopyButton` (ícone), `CodeBlock` (bloco de código com copiar).
- `Search.jsx` — busca **⌘K** (command palette; indexa seções + componentes; teclado ↑↓/↵/esc).
- `Playground.jsx` — controles de prop ao vivo + preview + código que atualiza.
- `ComponentDocs.jsx` — `PropsTable` + `DosDonts`.
- `ui/chart.jsx` (shadcn) + recharts para o data-viz. **Cuidado:** `shadcn add chart` pode sobrescrever componentes existentes (ex.: `card.jsx`) — confira o `git diff` e reverta os customizados.

---

## Governança (obrigatória — DS é multi-consumidor)

- `CONTRIBUTING.md`: fluxo de token (editar JSON → `tokens:build` → commit), regras de PR, **SemVer**, release (tag), donos.
- `.github/`: `workflows/ci.yml` (**tokens:check → lint → build → auditoria a11y Lighthouse**), templates `pull_request_template.md` + `ISSUE_TEMPLATE/rfc.md` + `component-request.md`, `CODEOWNERS` (preencher handles).
- **ESLint** (flat config) + `eslint-plugin-jsx-a11y`/`react`/`react-hooks`. Dica: fixar `eslint@^9` + `--legacy-peer-deps` (jsx-a11y não suporta eslint 10); usar as regras **clássicas** do react-hooks (não o linter agressivo do v7).
- **Lighthouse CI** (`treosh/lighthouse-ci-action` + `lighthouserc.json`, categoria accessibility). Começar em `warn`, virar `error` quando o baseline ≥ 0,9.
- `Changelog` versionado no site + **tags git** por versão. Começar em **v0.1.0**; depois **PATCH** com calma (0.1.1, 0.1.2…), MINOR/MAJOR só em batch grande ou quebra.

---

## Barra de qualidade

- **On-brand fiel** — zero cor/fonte/raio fora do token. Nada de default do shadcn vazando.
- **Acessibilidade** — contraste AA computado de verdade; foco visível; ícone+texto além de cor.
- **Sem drift** — `tokens:check` verde; exports sempre gerados do JSON.
- **Lint verde**, **build ok**, e **verificação no browser** de cada seção (o preview serve `dist` estático; ao trocar `#hash` o bundle não recarrega — force com querystring nova `/?v=2`).

---

## Ordem de execução sugerida

1. Scaffold Vite+React+Tailwind. `shadcn init --preset <preset>`.
2. `assets/tokens/<marca>-tokens.json` (do `[CONFIG]`). Escrever `scripts/build-tokens.mjs`. Rodar `tokens:build`. Ligar `tailwind.config.js` ao JSON. `index.css` (vars shadcn + chart).
3. Assets da marca (logos sem clip-path, fontes).
4. Recursos transversais (`Copy`, `Search`, `ComponentDocs`, `Playground`, `chart`).
5. Componentes shadcn on-brand (radius/cores/inputs preenchidos conforme a marca).
6. Seções (lista acima) — data-driven, com Copy/Props/Do-Don't.
7. `nav.js` + `App.jsx` (ordem + eyebrows sequenciais).
8. Governança (CONTRIBUTING, `.github`, ESLint, Lighthouse, Changelog).
9. `npm run lint` + `npm run build` + verificar no browser.
10. Deploy (autor bot da marca) + `git tag -a v0.1.0`.

---

## Checklist de entrega

- [ ] Token JSON completo; exports gerados; `tokens:check` verde.
- [ ] Logo (positivo/negativo/mono/símbolo) sem clip-path.
- [ ] Todas as seções on-brand no ar, sem default do shadcn vazando.
- [ ] Copiar cor/token/código funcionando; busca ⌘K; playground interativo; data-viz na paleta da marca.
- [ ] Acessibilidade: contraste AA computado + foco/teclado/movimento/daltonismo.
- [ ] Governança: CONTRIBUTING, CI (tokens+lint+build+a11y), templates, CODEOWNERS, Changelog, tag v0.1.0.
- [ ] Lint verde, build ok, verificado no browser.
