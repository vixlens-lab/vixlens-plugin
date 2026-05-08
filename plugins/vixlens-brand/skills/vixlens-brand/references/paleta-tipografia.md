# Paleta e Tipografia Vixlens

## Paleta oficial

| Nome    | HEX       | Uso principal                                              |
|---------|-----------|------------------------------------------------------------|
| Amarelo | #FAC617   | Faixas de capa, labels de destaque, CTAs, alertas          |
| Azul    | #0439D9   | Headers, badges de step, callouts de ação, elementos âncora|
| Branco  | #FFFFFF   | Texto sobre Azul/Preto, fundo geral de página              |
| Preto   | #000000   | Texto principal, elementos de alto contraste               |

### Combinações aprovadas
| Fundo    | Texto     | Uso                        |
|----------|-----------|----------------------------|
| #0439D9  | #FFFFFF   | Header, capa, badges       |
| #FAC617  | #000000   | Faixas de destaque, labels |
| #000000  | #FFFFFF   | Caixas âncora, seções dark |
| #FFFFFF  | #000000   | Corpo de texto, fundo padrão|
| #FAC617  | #0439D9   | Callouts de alto impacto   |

---

## Tipografia — Família Mont

Mont é uma fonte geométrica sem serifa. Pesos disponíveis:
Thin · ExtraLight · Light · Regular · SemiBold · Bold · ExtraBold · Heavy

### Escala tipográfica

| Nível              | Peso Mont   | Tamanho | Caixa      | Uso                                          |
|--------------------|-------------|---------|------------|----------------------------------------------|
| Display / Logo     | Heavy       | 48pt    | Alta       | "VIXLENS" na capa                            |
| Tagline capa       | SemiBold    | 13pt    | Alta       | "LABORATÓRIO ÓPTICO INDUSTRIAL"              |
| Título documento   | ExtraBold   | 24pt    | Título     | Nome do documento na capa                   |
| H1                 | Bold        | 20pt    | Título     | Seções principais do documento              |
| H2                 | SemiBold    | 15pt    | Título     | Subseções                                   |
| H3 / Label callout | SemiBold    | 11pt    | Alta       | Labels de callout, rótulos de tabela         |
| Corpo              | Regular     | 11pt    | Normal     | Parágrafos, listas, FAQ                     |
| Corpo destaque     | SemiBold    | 11pt    | Normal     | Termos canônicos em negrito dentro do corpo |
| Caption / Footer   | Light       | 9pt     | Normal     | Rodapé, legendas, notas de versão           |
| Badge step         | Bold        | 12pt    | Normal     | Número dentro do badge de step              |

### Regras de uso

- **Nunca** usar Thin ou ExtraLight em corpo de texto — legibilidade comprometida em impressão
- **Heavy** reservado para display e logo — não usar em texto corrido
- **Caixa alta** apenas em: logo, tagline, labels de callout, títulos de seção de alto impacto
- **Itálico** não faz parte da identidade Vixlens — evitar
- **Espaçamento de linha:** 1.4× o tamanho da fonte para corpo; 1.2× para títulos
- **Tracking (espacejamento entre letras):** +50 a +80 em caixa alta (labels, tagline); 0 no corpo

---

## Estrutura de documento padrão

### Capa
- Fundo: Azul (#0439D9)
- Faixas Amarelo (#FAC617) no topo e na base (altura ~12% da página)
- Logo "VIXLENS" em Branco, Mont Heavy 48pt, centralizado
- Tagline "LABORATÓRIO ÓPTICO INDUSTRIAL" em Branco, Mont SemiBold 13pt, tracking +60
- Caixa "EM UMA FRASE": fundo Preto (#000000), label "EM UMA FRASE" em Amarelo Mont SemiBold 9pt caixa alta, texto em Branco Mont Regular 12pt

### Header de páginas internas
- Barra Azul (#0439D9), altura ~10mm
- "VIXLENS" em Branco Mont Bold à esquerda
- Título do documento em Branco Mont Regular à direita

### Footer de páginas internas
- Linha divisória em #D1D5DB (cinza claro)
- Esquerda: "Vixlens Laboratório Óptico — [mês/ano]" em Mont Light 9pt, cor #6B7280
- Direita: "Página N" em Mont Light 9pt, cor #6B7280

### Callouts
- Fundo: Amarelo claro (#FEF3C7) ou Azul claro (#EAF0FF), cantos arredondados 6px
- Barra lateral 4px: Amarelo (#FAC617) para destaque, Azul (#0439D9) para informativo, Preto (#000000) para crítico
- Label: Mont SemiBold 9pt caixa alta, cor da barra lateral

### Steps numerados
- Badge quadrado 24×24px, fundo Azul (#0439D9), cantos arredondados 4px
- Número: Mont Bold 12pt, Branco
- Texto do step ao lado: Mont Regular 11pt, Preto

## Logo

- Arquivo de referência: `logo_vixlens.pdf` (vetor — não incluído no plugin)
- Palavra-marca: **VIXLENS** em Mont Heavy, caixa alta
- Tagline institucional: **LABORATÓRIO ÓPTICO INDUSTRIAL** em Mont SemiBold, caixa alta
- Uso em documentos: sempre Branco sobre fundo Azul; nunca sobre fundo claro sem versão adaptada
- Clearance zone: margem mínima igual à altura da letra "V" em todos os lados
