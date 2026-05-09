---
name: vixlens-brand
description: Carrega o sistema completo de marca Vixlens — paleta, tipografia, voz e vocabulário canônico para documentos institucionais B2B. Use quando o usuário pedir qualquer documento, texto ou comunicação da Vixlens, ou quando mencionar "padrão Vixlens", "marca Vixlens", "no padrão Vix", "identidade Vixlens".
---

# Skill Mestre — Vixlens Brand (DS 3.0)

Ao ser invocada, carregue as três referências abaixo e aplique em qualquer output gerado nesta sessão:

1. `references/paleta-tipografia.md` — cores, tipografia, ícones e estrutura de documentos
2. `references/voz-tom.md` — as 5 referências de voz (V1–V5) e regras invioláveis
3. `references/vocabulario-canonico.md` — termos canônicos e frases-âncora

## Comportamento padrão ao gerar qualquer documento Vixlens

Aplique automaticamente:

- **Paleta primária:** Preto #1D1D1F · Amarelo #FAC617 · Azul #0439D9 · Branco #FFFFFF · BG Cinza #F5F5F7 · Cinza médio #606F7F
- **Paleta dashboard (callouts e UI):** Roxo #615FFF · Coral #FF6566 · Amarelo #FCD341 · Verde #30D389
- **Tipografia documentos:** Mont Heavy/ExtraBold/Bold/SemiBold/Regular/Light nos níveis corretos
- **Tipografia digital:** Host Grotesk (ExtraBold 800 / Bold 700 / SemiBold 600 / Regular 400)
- **Voz:** calibre pelo contexto (V1–V5). Padrão: V5 para estratégicos · V2 para manuais · V1 para técnico
- **Vocabulário:** aplique todos os termos canônicos com grafia exata
- **Estrutura:** capa Azul com faixas Amarelo + header/footer padrão em todas as páginas internas
- **Callouts:** use as 4 cores do sistema dashboard (Destaque/Informativo/Crítico/Sucesso) — não as cores primárias da marca

## Checklist obrigatório antes de entregar qualquer output

- [ ] Nenhum travessão (—) no copy
- [ ] Nenhuma expressão proibida (lista em voz-tom.md)
- [ ] Nenhum valor exato de faturamento, margem, EBITDA ou jobs/dia
- [ ] Nenhuma referência a M&A, exit, valuation ou aquisição futura
- [ ] "Essilor" aparece sempre como "EssilorLuxottica"
- [ ] Termos canônicos aplicados com grafia exata
- [ ] Preto sempre #1D1D1F — nunca #000000
- [ ] Callouts usam paleta dashboard, não as cores primárias da marca
- [ ] Cliente citado? Verificar se há autorização — se não souber, sinalizar ao usuário

## Quando escalar para o Otávio

Antes de gerar output que:
- Altere paleta, tipografia ou regras de marca
- Cite cliente sem autorização explícita
- Mencione parceria, contrato ou dado comercial sensível
- Toque em estratégia societária de qualquer forma

## Nota sobre o sistema de marca

A Vixlens é um laboratório óptico B2B industrial em escala (meta: 2.000 jobs/dia até 2030, nova fábrica Indústria 4.0). Mentalidade de dono, objetividade industrial. Conteúdo é ativo estratégico, não enfeite. Cada documento serve um propósito explícito.

Design System completo disponível em: https://vixlens.vercel.app (ou repositório GitHub interno)
