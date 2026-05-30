# Vixlens — Design System & Plugin Marketplace

Este repositório serve duas coisas:

1. **Vixlens Design System** — publicado em **[ds.vixlens.com.br](https://ds.vixlens.com.br)** (Vercel)
2. **Vixlens Plugin Marketplace** — plugins para Claude Code e Cowork

---

## 1. Design System

Single-page site (`index.html`) com a documentação completa da marca:

- Cores (primárias, secundárias, dashboard, neutras)
- Tipografia (Host Grotesk web · Mont print)
- Tokens de forma (border-radius, espaçamento)
- Componentes (botões, inputs, cards, callouts)
- Voz & tom + vocabulário canônico
- Iconografia (ícones de linha + Phosphor UI)
- Logotipo & clearance
- Direção fotográfica

Documentação `.md` de referência em [`docs/`](./docs/).

### Deploy

Push pra `main` → Vercel publica automaticamente em ds.vixlens.com.br.

---

## 2. Plugin Marketplace

### Instalação via Claude Code

```bash
claude plugin marketplace add vixlens-lab/vixlens-plugin
claude plugin install vixlens-brand
```

### Plugins disponíveis

#### `vixlens-brand`
Sistema completo de marca Vixlens. 4 skills:

- **vixlens-brand** — skill mestre que carrega paleta, tipografia, voz e vocabulário canônico
- **comunicado-interno** — comunicados para o time no padrão institucional
- **manual-cliente** — manuais operacionais para clientes ópticos B2B
- **proposta-comercial** — propostas comerciais para varejistas ópticos independentes

---

## Estrutura

```
site-ds/
├── index.html                       ← O DS publicado (ds.vixlens.com.br)
├── docs/                            ← Docs .md de referência (paleta, tipografia)
├── fotos/                           ← Imagens usadas no site
├── plugins/
│   └── vixlens-brand/
│       ├── .claude-plugin/plugin.json
│       └── skills/
│           ├── vixlens-brand/
│           ├── comunicado-interno/
│           ├── manual-cliente/
│           └── proposta-comercial/
└── .claude-plugin/marketplace.json  ← Manifesto do marketplace
```

## Versionamento

| Versão | Data | Notas |
|---|---|---|
| DS 3.1 | Mai/2026 | Hierarquia 60-30-10, Preto na capa/header, Azul como accent |
| DS 3.0 | Mai/2026 | Release inicial do site + plugin v0.2.0 |
| Plugin v0.1.0 | Mai/2026 | 4 skills de marca e documentos |

---

Vixlens Laboratório Óptico · Vila Velha, ES · www.vixlens.com.br
