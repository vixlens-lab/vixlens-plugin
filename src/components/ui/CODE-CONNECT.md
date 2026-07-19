# Code Connect — Vixlens DS (Luma)

Arquivos `*.figma.jsx` ligam os componentes shadcn deste repo aos componentes do Figma
**"Vixlens DS — Luma"** (`xVXZpMF3PY5khaGElq0Mvz`). Ficam prontos aqui — só faltam 2 coisas
pra ativar:

## Pré-requisitos (fora do código)
1. **Plano Figma Organization ou Enterprise** com seat Dev/Full — Code Connect NÃO roda em
   Free/Pro. (Hoje a conta é plano Pro → bloqueado. Confirmado pela API do Figma.)
2. **Componentes publicados** como library (mover o arquivo de Drafts → projeto do time
   Tríade Pro → Assets → Publish).

## Ativar (quando os 2 acima estiverem ok)
```bash
npm i -D @figma/code-connect
export FIGMA_ACCESS_TOKEN=...      # token com escopo de Code Connect
npx figma connect publish          # lê figma.config.json + os *.figma.jsx
```

## O que já está mapeado (14)
button · input · card · badge · switch · checkbox · radio-group · select · tabs · slider ·
alert · tooltip · dialog · table

Cada um aponta pro `node-id` do componente na library e traz a variante como prop
(`variant`, `checked`, `disabled`) + um `example`. Ajuste os `example` conforme a API evoluir.

Config: `figma.config.json` (raiz) — `parser: react`, `include: src/components/ui/**/*.figma.jsx`.
