---
name: tabela-optica-figma
description: Use when building or updating a Vixlens lens price table in Figma from a CSV — catálogo A4, tabela de preço marca própria, tabela por ótica, página de família de lente, atualização mensal de preços. Also use when a table page overflows the footer, when columns truncate text, when a lens family no longer fits one page, or when text on a family colour is hard to read.
---

# Tabela de lentes em Figma

Constrói o catálogo A4 inteiro no Figma a partir do CSV de tabela de preço por ótica.

**Estrutura:** capa, índice com matriz de compatibilidade, uma ou mais páginas por família de lente, contracapa. Cada página de família = cabeçalho + slot de imagem + tabela.

**O número de páginas não é fixo.** Depende de quantas famílias precisam quebrar. O catálogo Vixlens de 2026 fechou em 15 páginas no formato antigo; o Native de 2026, com os separadores de índice, fechou em 20.

## Pré-requisitos

- **MCP do Figma conectado** e autenticado numa conta com permissão de **edição** no arquivo de destino. Conta só com acesso de visualização falha na primeira chamada de escrita.
- **Host Grotesk** disponível no Figma, nos estilos Regular, Medium, Bold e ExtraBold. Confirme com `listAvailableFontsAsync` antes de construir.
- **PRÉ-REQUISITO DE SKILL:** carregue `figma-use` (ou o recurso `skill://figma/figma-use/SKILL.md`) antes de qualquer chamada `use_figma`.

## Quando usar

- Gerar o catálogo inteiro a partir de um CSV novo (troca de tabela, nova ótica, novo mês)
- Regerar uma família só depois de mudança de preço
- Ajustar o grid quando texto trunca ou a tabela invade o rodapé

**Não usar para:** o formato antigo de 12 colunas; peças que não sejam tabela de preço.

## Entrada

**CSV** no layout de 28 colunas do simulador: `Lente;Descrição;cod.;Diâm;Altura;Esf +;Esf -;Cilíndrico;Adição;Tabelão×4;Desconto;Custo×4;Markup Sem AR;Markup Com AR;Venda×4;Lucro×4`, separador `;`. Linhas cujo primeiro campo é vazio e o segundo começa com `cod. por cor:` são continuação da linha anterior.

## Perguntas antes de rodar

**Faça as três de uma vez, numa rodada só.** Espalhá-las pelo processo confunde quem está pedindo a tabela.

### 1. Para quem é a peça

Decide qual das três bases de preço do CSV entra — e muda a nota legal da capa.

| Resposta | Colunas | Nota da capa |
|---|---|---|
| Balcão da ótica → consumidor final | `Venda por par …` | valores são sugestão; o preço final é livre da ótica |
| Vixlens → ótica, tabela cheia | `Tabelão por par …` | condição comercial, com validade; sem desconto no cabeçalho |
| Vixlens → ótica, com o desconto dela | `Custo pago por par …` | condição comercial, com validade; o desconto aparece no cabeçalho |

**Markup e Lucro nunca entram na peça**, em nenhuma das três.

### 2. Destino no Figma

Arquivo novo ou link de um existente. Não dá para inferir — pergunte sempre.

### 3. Centavos

`R$ 2.826` ou `R$ 2.826,40`. `CONFIG.centavos`, padrão `false` (corta por truncamento, não arredonda).

## Pergunte só quando o dado exigir

- **Família fora das 12 conhecidas** (marca própria de terceiro, como a linha OPTIMA das Óticas Native): para qual família Vixlens ela mapeia. Isso define cor, tipo e as specs de receita que a planilha da ótica normalmente não traz.
- **Achados de qualidade no CSV**: preço divergente entre cores da mesma lente, dobras exatas de 2×, descrições duplicadas. Reporte os números e pergunte **uma vez**, com o diagnóstico pronto — nunca linha a linha.

## Resolva sozinho, não pergunte

| Item | Como |
|---|---|
| Cor e tipo da família | Bate o nome contra as 12 famílias de `referencia-tabela.md` |
| Dados da ótica na capa | Saem do cabeçalho do CSV; só pergunte se vierem vazios |
| Quantas páginas e onde quebrar | Automático, pela altura da tabela |
| Modo de altura (fixa / varia / null) | Sai da checagem de variância |
| Símbolos Ø e ↕ | Padrão da casa. O índice traz a legenda. `CONFIG.simbolos: false` volta para "Diâm." e "Alt." se alguém pedir |

## Fluxo

1. **Parsear o CSV** para linhas normalizadas, lendo a base de preco escolhida na pergunta 1 e separando produtos de linhas `cod. por cor`. O índice de refração sai do começo da descrição e vira campo próprio: `1.49 Resina Sun+` → `1.49` + `Resina Sun+`.
2. **Conferir constantes por família**: Cilíndrico, Adição e Altura costumam ter um único valor por família. Rode a checagem de variância. Cilindro e adição viram pílulas no cabeçalho; se **variarem dentro da família**, pare e reporte — o formato assume os dois constantes. Se a **altura** vier com mais de um valor, a família entra no modo `varia`.
3. **Empacotar em páginas.** Estime a altura (fórmula em `referencia-tabela.md`), corte em limites de índice e equilibre as metades. Só então numere as páginas.
4. **Criar os frames** de página com rodapé numerado, depois capa e contracapa.
5. **Construir cada família** com `construtor.js`. Uma chamada `use_figma` por família, ou duas por chamada — não mais que isso, o script fica grande demais.
6. **Construir o índice** com a matriz de compatibilidade, o bloco "como ler" e a legenda das bolinhas.
7. **Validar** — obrigatório, ver abaixo.
8. **Screenshot** da página inteira e conferência visual.

Ao passar de família em família, só mudam `CONFIG` e `DADOS`. Famílias de visão simples têm `altura: null` e `adicao: null` — as pílulas correspondentes somem e a Disponibilidade fica só com esférico e diâmetro.

## Validação (não pule)

Rode as quatro antes de dizer que terminou:

| Checagem | Como | Critério |
|---|---|---|
| Texto não trunca | Nó de teste medindo o texto mais largo por coluna | `precisa <= largura` em todas |
| Tabela não invade o rodapé | `fimDaTabela` que o construtor devolve | `<= 796` |
| Nenhum dado perdido | Contar linhas de produto e códigos de cor contra o CSV | contagens idênticas |
| Contraste | Razão WCAG de **todo** texto sobre cor | ≥ 4,5:1; ≥ 7:1 no que estiver abaixo de 8pt |

Nunca chute largura de coluna. Meça. `0.00 a -4.00` estourou uma coluna de 44px por 1px e só apareceu na medição.

Contraste é o único item que **sempre** exige número calculado, nunca olhômetro — e a conta é a WCAG, não a luminância perceptual. Ver "Contraste" em `referencia-tabela.md`.

## Erros que já custaram retrabalho

| Sintoma | Causa | Correção |
|---|---|---|
| Texto claro ilegível sobre a cor da família | Escolha por luminância perceptual `0.299/0.587/0.114 > 0.6` em vez de razão WCAG | Usar `razao()` e escolher o lado de maior contraste. Errava em 6 das 12 famílias |
| Número do chip de índice sumido | 4,5:1 é piso de 14pt; o chip tem 6.5pt | Fundo em 20% da cor + borda na cor cheia + texto `#2F2F2F` |
| Separador de índice apagado | Cor da família sobre branco reprova em 9 das 12 | Texto preto; a cor vai só na régua |
| Rodapé e imagem saltam de posição | `findOne(n => n.name.indexOf('Tabela ')===0)` casou com um nó de TEXTO — o Figma nomeia texto pelo conteúdo | Sempre filtrar por `n.type === 'FRAME'` |
| `Failed to parse SSE message: Invalid JSON` | O `return` levou texto contendo U+2028 (separador usado nas células de 2 linhas) | Nunca retornar `.characters` cru; trocar U+2028 por espaço antes de retornar |
| `Cannot write to node with unloaded font` ao só alinhar texto | `textAlignHorizontal` também exige fonte carregada | `loadFontAsync` de todos os estilos usados no início do script |
| `layoutSizingHorizontal` rejeitado | Setado antes do `appendChild` | Anexar primeiro, dimensionar depois |
| Iteração sobre a página quebra com `children of undefined` | Nó de teste de medição ficou solto na página | Filtrar `type === 'FRAME'` e remover o nó de teste no fim |
| Família que cabia numa página passou a estourar | Separadores de índice custam ~21px cada | Quebrar em duas num limite de índice; não encolher tipografia |

## Referências

- `referencia-tabela.md` — grid, contraste, paleta das 12 famílias, regras de formatação, capa/índice/contracapa
- `construtor.js` — código da Plugin API pronto para `use_figma`
