---
name: ui-boas-praticas
description: >-
  Audita e corrige interfaces (web/mobile) contra as 80 boas práticas de UI do "Guia de Boas Práticas Aplicáveis para a Criação de Interfaces" (Andrey Knabbenn, v2.0) — tipografia, cores, botões, grid/layout, ícones, imagens, formulários. Use SEMPRE que for criar, revisar, corrigir ou dar parecer sobre qualquer tela, componente, landing page, formulário ou layout — mesmo que o usuário não diga "boas práticas". Triggers: "revisa essa tela", "essa UI tá boa?", "audita a interface", "o que melhorar nesse layout", "review de UI", "checklist de interface", "por que essa tela tá estranha", "ajusta o espaçamento/contraste/hierarquia", "revisa esse formulário", antes de entregar qualquer componente novo.
---

# Boas práticas de UI — auditoria e aplicação

Fonte: 80 regras do guia de UI do Andrey Knabbenn (v2.0, 2023). Regras completas com valores numéricos: `references/regras.md`. **Leia esse arquivo antes de auditar** — não confie na memória para os números.

Este skill é **rígido nos valores numéricos** (line-height, touch target, margens) e **flexível no julgamento estético**.

## Quando usar qual modo

| Situação | Modo |
|---|---|
| Usuário pede review/parecer de tela pronta | **Auditar** — só relatório, não edita |
| Usuário pede "arruma/melhora/ajusta" | **Auditar + Aplicar** |
| Usuário está criando componente novo | **Prevenir** — aplicar regras direto no código |

## Antes de começar

1. Leia `references/regras.md` inteiro.
2. Identifique o alvo e como enxergá-lo:
   - **Código** (React/HTML/CSS/Tailwind) → Read dos arquivos + rodar as heurísticas grep abaixo.
   - **App rodando** → `preview_start`, depois `read_page`, `computer{action:"screenshot"}`, `javascript_tool` para CSS computado, `resize_window` para mobile/dark.
   - **Figma** → `get_design_context` + `get_screenshot` + `get_variable_defs`.
   - **Print/imagem** → Read da imagem.
3. Se existir Design System do projeto, ele **vence** sobre valores genéricos do guia. Em projeto Vixlens, combine com o skill `vixlens-design-system`. Nesse caso, cite o conflito no relatório em vez de reescrever o token.

## Heurísticas de código (rodar quando o alvo for código)

Grep barato que pega os erros mais comuns. Achado ≠ bug — confirme no contexto antes de reportar.

```bash
rg -n "text-align:\s*justify|text-justify" --glob '!node_modules'
rg -n "#000000|#000\b|rgb\(0,\s*0,\s*0\)|text-black|bg-black" --glob '!node_modules'
rg -n "text-shadow" --glob '!node_modules'
rg -n "\.png[\"')]" --glob '**/*.{tsx,jsx,vue,svelte,css}' --glob '!node_modules'
rg -n "placeholder=" --glob '**/*.{tsx,jsx,vue,svelte}' --glob '!node_modules'
rg -n "text-transform:\s*uppercase|\buppercase\b" --glob '!node_modules'
rg -n "<input" --glob '**/*.{tsx,jsx,vue,svelte}' --glob '!node_modules'   # checar inputMode/type
```

O que cada um indica: justify (#6), preto puro (#22), sombra em texto (#72), ícone PNG (#51), input só com placeholder sem label (#79), caixa alta em texto corrido (#5), teclado errado no mobile (#76).

## Checklist de auditoria

Percorra os 7 blocos na ordem. Para cada um, `references/regras.md` tem o número da dica e o valor exato.

1. **Tipografia** (#1–15, 71–72) — line-height, órfãs, hierarquia, caixa alta, justify, letter-spacing, nº de famílias, largura de linha, escala, tamanhos mínimos.
2. **Cores** (#16–28) — contraste, matiz nos neutros, 60-30-10, semântica, cinza sobre fundo colorido, preto puro, cor de ação primária/destrutiva.
3. **Botões** (#29–38, 75) — hierarquia primário/secundário/terciário, estados, padding e altura, sombra, nº de palavras, consistência, forma, espaço entre botões.
4. **Grid e layout** (#39–50) — espaçamento consistente, alinhamento H/V, margens laterais, grid interno de card, white space, sentido de leitura único, espaços fantasma.
5. **Ícones** (#51–62, 78) — SVG, escala, caixa delimitadora, espaçamento e tamanho iguais, peso casando com a fonte, biblioteca única, touch target.
6. **Imagens** (#63–70) — qualidade, banco de imagem batido, cor x marca, edge to edge, propósito, contraste de texto sobre imagem, responsivo.
7. **Interação e formulários** (#73–74, 76–77, 79–80) — affordance de scroll, empty states, tipo de teclado, separadores leves, labels visíveis, botão de envio evidente.

## Severidade

| Nível | Critério | Exemplos |
|---|---|---|
| 🔴 Bloqueante | Quebra acessibilidade ou usabilidade real | contraste abaixo de WCAG AA (#17), touch target < 44px (#59), label ausente (#79), texto justificado (#6) |
| 🟡 Importante | Prejudica leitura, hierarquia ou consistência | line-height fora de 120–150% (#1), linha > 70 caracteres (#12), botões inconsistentes (#34), ícones de bibliotecas diferentes (#56) |
| 🔵 Polimento | Refino estético | preto puro (#22), matiz nos neutros (#16), sombra padrão do software (#32), palavra órfã (#2) |

Contraste é o único item que **sempre** exige número medido, não olhômetro. Calcule a razão real (fórmula WCAG) a partir das cores de texto e fundo — não estime pela aparência.

## Formato do relatório

Um achado por linha, agrupado por severidade, mais severo primeiro:

```
🔴 src/components/Card.tsx:42 — #17 Contraste
   #9B9B9B sobre #FFFFFF = 2.6:1, abaixo do mínimo 4.5:1 (WCAG AA).
   Fix: usar #6B6B6B (5.7:1).

🟡 src/components/Hero.tsx:18 — #12 Largura de linha
   Parágrafo em max-w-full ≈ 120 caracteres/linha. Ideal 50–70.
   Fix: max-w-[65ch].
```

Regras do relatório:
- Sempre cite o número da dica (`#N`) — dá rastreabilidade até o guia.
- Sempre proponha o valor corrigido, não só o problema.
- Não invente achados para encher o relatório. Se a tela estiver boa, diga que está boa.
- Não reporte o mesmo padrão 20 vezes: agrupe ("#22 preto puro em 14 componentes — lista no fim").
- Feedback contraditório com o DS do projeto → marque como "conflito com o DS, decisão do usuário", não corrija sozinho.

## Ao aplicar correções

- Corrija 🔴 e 🟡 primeiro; 🔵 só se o usuário pedir ou se o custo for trivial.
- Use os tokens do projeto quando existirem; valores literais só como último recurso.
- Depois de editar código previewável, verifique no browser (screenshot + `read_console_messages`) antes de dizer que está pronto.
- Relate o que ficou de fora e por quê.
