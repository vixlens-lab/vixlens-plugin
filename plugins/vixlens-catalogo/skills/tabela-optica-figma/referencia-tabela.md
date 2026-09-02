# Referência — grid, paleta e formatação

## Página

A4 retrato 595 × 842. Fundo branco. Margem 10px nas páginas de tabela (capa, índice e contracapa usam 20px).

| Elemento | Posição | Tamanho |
|---|---|---|
| Cabeçalho da família | x 10, y 44 | 575 × hug |
| Slot de imagem | x 10, abaixo do cabeçalho + 14 | 575 × 120 (180 nas ocupacionais) |
| Tabela | x 10, abaixo da imagem + 14 | 575 × hug |
| Rodapé | x 10, y 812 | texto 7pt `#6C6C6C` |

Se `tbl.y + tbl.height > 796`, reduza a altura do slot de imagem até caber, com mínimo de 56px. Se nem assim couber, rode com `alturaImagem: 0` ou quebre a família em duas páginas — avise o usuário, **nunca** encolha a tipografia.

### Quais famílias comportam foto

Altura da tabela ≈ `produtos × 22 + linhasDeCorMultiplas × 18 + 20 + 14`, mais 4 se houver linha de Espelhado. Com cabeçalho de 66px, a tabela começa em 258 quando há foto de 120px.

| Famílias | Tabela | Com foto de 120px |
|---|---|---|
| Vix Total, Freevix One | 334 / 524 | cabe |
| VS Relax 0,50 / 0,75 / 1,00 | 414 | cabe |
| Deskview 1,3M / 2M, Office 4M | 166 | cabe, com foto de 180px |
| **Premium, Freedom, IA Tech, VS HD** | **608** | **não cabe** — use `alturaImagem: 0` |

As quatro densas têm 21 produtos e 6 linhas de cor. Mesmo com o slot no mínimo de 56px elas terminam em 804, oito pixels além do limite. Sem slot terminam em 736, com folga de 76px.

## Cabeçalho da família

Auto-layout vertical, fill na cor da família, raio 20, padding 12/16, gap 2.

- Linha 1: nome da família, Host Grotesk ExtraBold 22 + pílula preta raio 100 em Bold 9 branco, com o texto que a seção **Altura** definir
- Linha 2: tipo da lente + `//  MARCA PRÓPRIA VIXLENS`, Medium 8

Cor do texto do cabeçalho: preto quando a luminância da cor da família passa de 0.6, branco caso contrário. Fórmula: `0.299R + 0.587G + 0.114B` com canais em 0–1.

## Grid da tabela

Container: auto-layout vertical, fill na cor da família, raio 20, padding 8/10/6/10, gap 0.
Linha: auto-layout horizontal, raio 30, padding 3/8, gap 5, `counterAxisAlignItems: CENTER`, largura FILL.

| # | Coluna | Largura | Tipo |
|---|---|---|---|
| 0 | Cód | 24 | texto 8pt |
| 1 | Índ. | 26 | chip preenchido |
| 2 | Produto | 136 | frame auto-layout (texto + bolinha opcional) |
| 3 | Disponibilidade | 122 | texto 6pt, 2 linhas, `#4A4A4A` |
| 4 | Valores | 210 | grupo auto-layout, gap 10, 4 células de 45 |

Soma: 24 + 26 + 136 + 122 + 210 + (4 gaps × 5) = 538, dentro dos 539 disponíveis (555 internos − 16 de padding).

Tipografia: Host Grotesk Regular 8pt com `letterSpacing` −4% nas células de dado; Bold 8pt (colunas 0–2) e Bold 7pt (3 em diante) no cabeçalho da tabela, `letterSpacing` 0.

Zebra: `#FAFAFA` / `#F0F0F0` alternando **só entre linhas de produto** — a linha de cores não entra na contagem. Cabeçalho da tabela `#000000` com texto branco.

### Títulos das colunas de preço

Duas linhas, Bold 6.5pt, alinhadas à esquerda, separadas por U+2028:

`Sem` / `tratamento` · `Reflecta` / `Express` · `Reflecta` / `Guard` · `Reflecta` / `Blue Protect`

### Chip de índice

26 × 13, raio 4, **preenchido** na cor da família, sem contorno. Texto Bold 6.5pt centralizado, `letterSpacing` −2%, cor por contraste (mesma regra de luminância). O índice sai da descrição: `1.49 Resina Sun+` vira chip `1.49` + produto `Resina Sun+`.

## Formatação de conteúdo

### Disponibilidade

Duas linhas separadas por U+2028. **Sempre duas casas decimais, ponto como separador, hífen simples.**

```
Esf. +6.00 a -10.00 | Cil. até -6.00
Add. 0.50 a 5.00 | Diâm. 80mm
```

Nunca vírgula. Nunca cortar os dois zeros. `Diâm.`, não `Ø`. O cilíndrico usa só o limite: `0.00 a -6.00` no CSV vira `Cil. até -6.00`. Cilíndrico e Adição mudam por família — não hardcodar.

### Coluna Cód

- Código próprio: o número
- Código depende da cor e está na linha abaixo: `↓` centralizado
- Nunca `—` nesta coluna

### Preços

Alinhados à esquerda, títulos inclusive. Combinação inexistente: `—` **centralizado**, para ler como ausência e não competir com os números.

### Bolinhas de cor

Conjunto com **uma cor só** (as Transitions XTRActive): a bolinha vai inline, dentro do frame do Produto, depois do texto, gap 5.

Conjunto com **duas ou mais cores**: linha própria logo abaixo, fill `#FAFAFA`, padding 4/8, gap 6 entre pares.

Bolinha padrão: círculo 10px, raio 100, inicial da cor em Bold 5pt centralizada, código em Regular 6pt ao lado com gap 2.

Bolinha do Espelhado: círculo 14px, sigla de 3 letras em Bold 4.5pt, código em Regular 7.5pt, gap 3 no par e 10 entre pares, precedida do rótulo `COD:` em Bold 7pt `#4A4A4A`.

Cor do texto dentro da bolinha: mesma regra de luminância.

### Altura

A altura de montagem tem **três modos**, definidos por `CONFIG.altura`. Escolha pelo resultado da checagem de variância, nunca por suposição.

| `CONFIG.altura` | Quando | Cabeçalho | Linha |
|---|---|---|---|
| `'16 mm'` | um único valor na família inteira | `Alt. mín. 16 mm` | nada |
| `'varia'` | dois ou mais valores na família | `Alt. mín. varia por lente` | `\| Alt. NNmm` no fim da linha 2, **em todas as linhas** |
| `null` | visão simples, o CSV não traz altura | sem pílula | nada |

No modo `varia`, cada registro de `DADOS` precisa trazer a sua altura no 11º campo. O construtor lança erro se faltar — melhor quebrar do que publicar uma linha sem altura.

**Por que em todas as linhas e não só nas divergentes.** Marcar só a exceção obriga quem lê a inferir o resto do cabeçalho. Funciona com uma exceção, quebra com cinco. E a divergência costuma ser para cima: sem a altura explícita, a peça promete que a lente monta numa armação menor do que ela aceita, e o erro só aparece na montagem, virando refação.

No CSV de 2026 duas famílias caem no modo `varia`, ambas confirmadas contra o catálogo de origem — não são erro de exportação:

| Família | Linha | Altura da linha | Resto da família |
|---|---|---|---|
| Freevix Freedom | 1.59 Poli Transitions Gen S | 18mm | 16mm |
| Freevix IA Tech | 1.74 Resina Transitions Gen S | 18mm | 14mm |

Nas duas o diâmetro também sobe para 75.

## Paleta

### Famílias — CONFIG completo

Valores conferidos contra o CSV de 2026. Cilíndrico e Adição mudam por família; nunca reaproveite os da anterior.

| Pág. | Família | Cor | Altura | Cilindro | Adição | Img |
|---|---|---|---|---|---|---|
| 02 | VIX TOTAL | `#F7B200` | 18 mm | -4.00 | 1.00 a 3.50 | 120 |
| 03 | FREEVIX ONE | `#EF7F02` | 18 mm | -6.00 | 0.50 a 5.00 | 120 |
| 04 | FREEVIX PREMIUM | `#D94F2B` | 16 mm | -6.00 | 0.50 a 5.00 | **0** |
| 05 | FREEVIX FREEDOM | `#B5306B` | varia | -6.00 | 0.50 a 5.00 | **0** |
| 06 | FREEVIX IA TECH | `#7A4BC4` | varia | -6.00 | 0.50 a 5.00 | **0** |
| 07 | FREEVIX VS HD | `#006BB2` | null | -6.00 | null | **0** |
| 08 | VS RELAX 0,50 | `#2E9BD6` | null | -6.00 | null | 120 |
| 09 | VS RELAX 0,75 | `#5BB8E0` | null | -6.00 | null | 120 |
| 10 | VS RELAX 1,00 | `#8FD0EA` | null | -6.00 | null | 120 |
| 11 | DESKVIEW ATÉ 1,3M | `#0E8A5F` | 16 mm | -6.00 | 0.75 a 3.50 | 180 |
| 12 | DESKVIEW ATÉ 2M | `#3FA96E` | 16 mm | -6.00 | 0.75 a 3.50 | 180 |
| 13 | OFFICE ATÉ 4M | `#78B472` | 16 mm | -6.00 | 0.75 a 3.50 | 180 |

Tipo: Multifocal → `LENTES MULTIFOCAIS SURFAÇADAS`; VS → `LENTES DE VISÃO SIMPLES SURFAÇADAS`; ocupacional → `LENTES OCUPACIONAIS SURFAÇADAS`.

## Capa, índice e contracapa

**Capa:** slot `CAPA` 595×470 sangrado no topo, slot `LOGO VIXLENS` 150×46 em (20, 500), título ExtraBold 34 em duas linhas (a segunda em `#6C6C6C`), bloco "EMITIDO PARA" com os dados do cabeçalho do CSV (ótica, CNPJ, responsável, telefone, data), e a nota de disponibilidade em 7pt no pé.

**Índice:** título `QUAL FAMÍLIA ATENDE ESSA RECEITA?` ExtraBold 22 e a matriz de compatibilidade — uma linha por família com chip de cor 14×14 raio 4, nome, tipo, esférico, cilíndrico, adição, altura, diâmetro e página. Larguras `[14,128,73,56,62,60,46,38,18]`, gap 5, container `#E4E4E4`. Família em modo `varia` mostra os dois valores na coluna Alt., em Bold: `16/18mm`. Deixar só um valor ali contradiz a página da família. O cilíndrico da Vix Total vai em `#C81E1E` Bold por ser a única família que para em -4.00. Abaixo da matriz vêm o bloco "COMO LER A TABELA", que precisa explicar os dois modos de altura, e a legenda das 14 bolinhas em duas linhas.

**Contracapa:** slot `CONTRACAPA` 595×560, logo, bloco de contato com placeholders e o texto legal em 7pt.

### Cores de lente

Valores do V7, confirmados contra a legenda Transitions da Essilor:

| Cor | Hex | Inicial |
|---|---|---|
| Cinza | `#6C6C6C` | C |
| Marrom | `#69401C` | M |
| Verde | `#3B5424` | V |
| Ametista | `#54317B` | A |
| Safira | `#1C5A95` | S |
| Âmbar | `#754D17` | Â |
| Esmeralda | `#106943` | E |
| Rubi | `#711533` | R |

Freevix Colors: G15 `#3F4A3C` (G), Black `#1A1A1A` (B), Marrom reaproveita o hex acima.

Espelhado, com sigla de 3 letras — hex confirmados pelo Otávio em 02/09/2026: Prata `#9EADB0` (REP), Dourado `#BDB024` (RED), Azul `#0538D9` (REA), Rosa `#FFA1FF` (RER).

## Pendências não fechadas com o usuário

Confirme antes de assumir:

1. **Siglas de 3 letras** — hoje só o Espelhado usa. Se o padrão valer para Freevix Colors e Transitions, resolveria a colisão de iniciais: Ametista e Azul são ambas `A`, Rubi e Rosa são ambas `R`.

