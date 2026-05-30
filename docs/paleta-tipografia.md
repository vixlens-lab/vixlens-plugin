# Vixlens — Design System: Paleta Tipográfica

> Referência oficial extraída de [ds.vixlens.com.br/#tipografia](https://ds.vixlens.com.br/#tipografia)
> Complementa o documento de cores ([prompt_atualizacao_ds_paleta.md](prompt_atualizacao_ds_paleta.md))

---

## Fontes oficiais

| Contexto | Fonte | Licença | Substituto |
|----------|-------|---------|-----------|
| **Web / Digital** | Host Grotesk | Google Fonts (gratuita) | — |
| **Print / Documentos** | Mont | Comercial (paga) | Montserrat (Google Fonts) |

**Regra de ouro:**
> *Host Grotesk para todos os contextos digitais. Mont (ou Montserrat) para documentos e materiais impressos.*

---

## Host Grotesk — escala digital

Importação Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap">
```

CSS base:

```css
font-family: 'Host Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Escala completa

| Token | Exemplo | Peso | Desktop | Mobile | Uso |
|-------|---------|------|---------|--------|-----|
| **H1** | Vixlens | 700 | 96px | 48px | Display / hero |
| **H2** | Freevix | 700 | 64px | 36px | Display |
| **H3** | Sua ótica cresce. | 700 | 48px | 28px | Display secundário |
| **H4** | Lentes avançadas | 600 | 32px | 24px | Título de seção |
| **H5** | Suporte especializado | 600 | 24px | 20px | Subtítulo |
| **H6** | Vantagens exclusivas | 500 | 20px | 18px | Subtítulo menor |
| **Body** | Texto corrido principal | 400 | 18px | 16px | Corpo de texto |
| **Body Bold** | Ênfase em corpo | 600 | 18px | 16px | Negrito de corpo |
| **Label** | Freevix Reflecta | 500 | 14px | 14px | UI labels, tags |
| **Caption** | Rodapés, hints | 400 | 12px | 12px | Texto auxiliar |
| **Overline** | LABORATÓRIO ÓPTICO | 500 | 11px | 11px | Eyebrow / uppercase |

**Pesos disponíveis Host Grotesk:** 300, 400, 500, 600, 700, 800 (e itálicos)

---

## Mont — escala impressa

Para PDFs, slides, documentos impressos, certificados. Quando Mont não estiver disponível, usar **Montserrat** (Google Fonts) como substituta direta.

| Token | Peso | Tamanho | Uso |
|-------|------|---------|-----|
| **Display / Logo** | Heavy (900) | 48pt | Capa de docs, uppercase |
| **H1 Documento** | Bold (700) | 20pt | Título principal |
| **H2 Documento** | SemiBold (600) | 15pt | Subtítulo |
| **Body** | Regular (400) | 11pt | Corpo de texto |
| **Caption** | Light (300) | 9pt | Rodapé, legendas |

---

## Aplicação prática — UI (forms, dashboards)

Em interfaces de uso (formulários, dashboards), a escala digital do DS é orientada a landing pages. Para UI compacta, recomenda-se reduzir a escala mantendo os **pesos** alinhados ao DS:

| Elemento UI | Token DS | Peso | Tamanho UI sugerido |
|-------------|----------|------|---------------------|
| Título de card | H4 | 700 | 24-26px |
| Subtítulo | H5/H6 | 500-600 | 16-18px |
| Label de campo | Label | 600 | 13-14px |
| Texto auxiliar | Caption | 400 | 12px |
| Tag de seção (uppercase) | Overline | 500 | 11px com `letter-spacing: 0.1em` |
| Botão | Body Bold | 600-700 | 14-15px |
| Corpo de form | Body | 400 | 14-15px |

**Ajustes recomendados em Host Grotesk:**
- `letter-spacing: -0.015em` em títulos grandes (≥24px) — compensa o espaçamento natural da fonte
- `line-height: 1.2` em títulos; `1.5-1.65` em corpo
- Evitar peso 800 em tamanhos pequenos — fica "borrado"; preferir 700

---

## CSS Variables sugeridas

```css
:root {
  /* Famílias */
  --font-digital: 'Host Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-print: 'Mont', 'Montserrat', sans-serif;

  /* Pesos */
  --fw-light:    300;
  --fw-regular:  400;
  --fw-medium:   500;
  --fw-semibold: 600;
  --fw-bold:     700;
  --fw-heavy:    800;

  /* Escala (UI ajustada) */
  --fs-display: 48px;  /* H3 */
  --fs-h4: 26px;
  --fs-h5: 20px;
  --fs-h6: 16px;
  --fs-body: 15px;
  --fs-label: 13px;
  --fs-caption: 12px;
  --fs-overline: 11px;

  /* Line-heights */
  --lh-tight: 1.2;
  --lh-normal: 1.5;
  --lh-relaxed: 1.65;
}
```

---

## Pareamento com paleta de cores

Tipografia **sempre** segue a regra 60-30-10 da paleta:

- **Texto principal:** Preto `#000000` (sobre branco) ou Branco `#FFFFFF` (sobre preto)
- **Texto secundário / hints:** Cinza neutro (`#71717A` ou similar)
- **Texto em destaque máximo (1 por documento):** Azul `#0439D9` — use APENAS para ênfase crítica
- **Texto sobre amarelo:** sempre Preto `#000000` (nunca branco — contraste ruim)
- **Amarelo `#FAC617` como cor de texto:** apenas em fundos pretos, em accents pontuais (badges, números de etapa, callouts)

> Texto colorido em amarelo perde legibilidade sobre branco — só usar sobre preto. Para destaque, prefira preto + peso 700 antes de recorrer à cor.

---

## Combinações aprovadas (texto)

| Fundo | Texto | Uso |
|-------|-------|-----|
| `#FFFFFF` | `#000000` | Corpo padrão |
| `#000000` | `#FFFFFF` | Cabeçalhos escuros, capas |
| `#FAC617` | `#000000` | Faixas accent, badges |
| `#000000` | `#FAC617` | Números de step, badges em barra preta |
| `#FFFFFF` | `#71717A` (cinza) | Hints, texto auxiliar |
| `#FFFFFF` | `#0439D9` | 1 elemento de destaque máximo no documento |

---

## Aplicação no `vixlens-form` (V2)

O formulário [vixlens-form](vixlens-form/) usa esta tipografia desde a V2. Mapeamento atual:

- `--font: 'Host Grotesk', ...` em `:root`
- `card-title`: peso 700, 26px, `letter-spacing: -0.015em`
- `card-sub`: peso 400, 14px, cinza
- `section-tag`: peso 700, 11px, uppercase, `letter-spacing: 0.12em` (Overline)
- `supplier-box-title`: peso 700, 11px, uppercase (Overline)
- `field label`: peso 600, 13px (Label)
- `field-hint`: peso 400, 12px (Caption)
- `btn-primary`: peso 700, 14px
- `success-title`: peso 700, 28px

---

## Checklist antes de publicar qualquer artefato digital Vixlens

- [ ] Host Grotesk está importada e aplicada como `font-family` base
- [ ] Hierarquia visual respeita pesos do DS (não usar 800 em corpo, não usar 400 em títulos)
- [ ] Letter-spacing negativo em títulos grandes
- [ ] Texto secundário em cinza (não preto puro com opacidade)
- [ ] Nenhum texto importante em amarelo sobre branco
- [ ] Azul `#0439D9` aparece no máximo 1 vez no documento (regra 60-30-10)
- [ ] Mobile: escala reduzida conforme tabela
