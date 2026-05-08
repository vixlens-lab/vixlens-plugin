---
name: vixlens-brand
description: Carrega o sistema completo de marca Vixlens — paleta, tipografia, voz, vocabulário canônico e estrutura de documentos. Use quando o usuário pedir qualquer documento, texto ou comunicação da Vixlens, ou quando mencionar "padrão Vixlens", "marca Vixlens", "no padrão Vix", "identidade Vixlens".
---

# Skill Mestre — Vixlens Brand

Ao ser invocada, carregue as três referências abaixo e aplique em qualquer output gerado nesta sessão:

1. `references/paleta-tipografia.md` — cores, tipografia e estrutura de documentos
2. `references/voz-tom.md` — as 5 referências de voz (V1–V5) e regras invioláveis
3. `references/vocabulario-canonico.md` — termos canônicos e frases-âncora

## Comportamento padrão ao gerar qualquer documento Vixlens

Aplique automaticamente:

- **Paleta:** Amarelo #FAC617, Azul #0439D9, Branco #FFFFFF, Preto #000000 conforme estrutura definida
- **Tipografia:** Mont Heavy/ExtraBold/Bold/SemiBold/Regular/Light nos níveis corretos
- **Voz:** calibre pelo contexto (V1–V5). Se não especificado: use V5 para documentos estratégicos, V2 para manuais operacionais, V1 para conteúdo técnico
- **Vocabulário:** aplique todos os termos canônicos com grafia exata
- **Estrutura:** capa Azul com faixas Amarelo + header/footer padrão em todas as páginas internas

## Checklist obrigatório antes de entregar qualquer output

Antes de apresentar o texto final ao usuário, verifique internamente:

- [ ] Nenhum travessão (—) no copy
- [ ] Nenhuma expressão proibida (lista em voz-tom.md)
- [ ] Nenhum valor exato de faturamento, margem, EBITDA ou jobs/dia
- [ ] Nenhuma referência a M&A, exit, valuation ou aquisição futura
- [ ] "Essilor" aparece sempre como "EssilorLuxottica"
- [ ] Termos canônicos aplicados com grafia exata
- [ ] Cliente citado? Verificar se há autorização — se não souber, sinalizar ao usuário

## Quando escalar para o Otávio

Antes de gerar output que:
- Altere paleta, tipografia ou regras de marca
- Cite cliente sem autorização explícita
- Mencione parceria, contrato ou dado comercial sensível
- Toque em estratégia societária de qualquer forma

## Nota sobre o sistema de marca

A Vixlens é um laboratório óptico B2B industrial. Mentalidade de dono, objetividade industrial. Conteúdo é ativo estratégico, não enfeite. Cada documento serve um propósito explícito.
