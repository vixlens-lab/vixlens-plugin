---
name: tabela-optica-figma
description: Use when building or updating a Vixlens lens price table in Figma from a CSV — catálogo A4, tabela de preço marca própria, tabela por ótica, página de família de lente, atualização mensal de preços. Also use when a table page overflows the footer, when columns truncate text, or when color codes per lens need dots.
---

# Tabela de lentes em Figma

Constrói o catálogo A4 inteiro no Figma a partir do CSV de tabela de preço por ótica, no formato fechado em 02/09/2026 (página "07 FINAL" do arquivo piloto `Lxb2pgDSHLvElg24Vp4072`).

**15 páginas:** capa, índice com matriz de compatibilidade, uma por família de lente, contracapa. Cada página de família = cabeçalho + slot de imagem + tabela.

Referência do catálogo pronto: `CE9fJPqUCK5maJF4CasREo`.

## Pré-requisitos

- **MCP do Figma conectado** e autenticado numa conta com permissão de **edição** no arquivo de destino. Conta só com acesso de visualização falha na primeira chamada de escrita.
- **Host Grotesk** disponível no Figma, nos estilos Regular, Medium, Bold e ExtraBold. Confirme com `listAvailableFontsAsync` antes de construir.
- **PRÉ-REQUISITO DE SKILL:** carregue `figma-use` (ou o recurso `skill://figma/figma-use/SKILL.md`) antes de qualquer chamada `use_figma`.

## Quando usar

- Gerar o catálogo inteiro a partir de um CSV novo (troca de tabela, nova ótica, novo mês)
- Regerar uma família só depois de mudança de preço
- Ajustar o grid quando texto trunca ou a tabela invade o rodapé

**Não usar para:** o formato antigo de 12 colunas; peças que não sejam tabela de preço.

## Entrada obrigatória

Antes de construir, tenha:

1. **CSV** no layout `Lente;Descrição;cod.;Diâm;Altura;Esf +;Esf -;Cilíndrico;Adição;Custo…;Markup;Venda…;Lucro…` com separador `;`. Linhas cujo primeiro campo é vazio e o segundo começa com `cod. por cor:` são continuação da linha anterior.
2. **Quais colunas de preço** entram. Padrão: só as `Venda`. Custo, Markup e Lucro **nunca** vão para a peça — são dado interno da ótica.
3. **Cor da família** (ver `referencia-tabela.md`).

Se algum dos três estiver faltando, pergunte antes de construir.

## Fluxo

1. **Parsear o CSV** para linhas normalizadas, separando produtos de linhas `cod. por cor`. O índice de refração sai do começo da descrição e vira campo próprio: `1.49 Resina Sun+` → `1.49` + `Resina Sun+`.
2. **Conferir constantes por família**: Cilíndrico, Adição e Altura costumam ter um único valor por família. Rode a checagem de variância — se aparecer mais de um valor, é exceção real ou erro de digitação na fonte, e precisa ser reportado ao usuário antes de seguir.
3. **Criar as 15 páginas** com rodapé numerado, depois capa e contracapa.
4. **Construir cada família** com `construtor.js`. Uma chamada `use_figma` por família, ou duas famílias por chamada — não mais que isso, o script fica grande demais.
5. **Construir o índice** com a matriz de compatibilidade, o bloco "como ler" e a legenda das bolinhas.
6. **Validar** — obrigatório, ver abaixo.
7. **Screenshot** da página inteira e conferência visual.

Ao passar de família em família, só mudam `CONFIG` e `DADOS`. As famílias de visão simples têm `altura: null` e `adicao: null` — a pílula do cabeçalho some e a segunda linha da Disponibilidade fica só com o diâmetro.

## Parser do CSV

Duas passadas de `awk`. A primeira normaliza o CSV; a segunda quebra por família no formato que `construtor.js` consome. Rode no diretório de scratch, não no projeto.

```bash
awk -F';' 'NR>8 {
  gsub(/\r/,"");
  if ($1 != "") { fam=$1; printf "%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\n", fam,$3,$2,$4,$5,$6,$7,$8,$9,$15,$16,$17,$18 > "rows.tsv" }
  else if ($2 != "") { printf "%s\tSUB\t%s\n", fam, $2 > "rows.tsv" }
}' tabela.csv
```

Campos 15 a 18 são as quatro colunas `Venda`. Trocar aqui muda quais preços entram na peça.

```bash
mkdir -p fam && awk -F'\t' '{
  fam=$1; gsub(/[^A-Za-z0-9]/,"_",fam); arq="fam/" fam ".txt";
  if ($2=="SUB") { t=$3; sub(/^cod\. por cor: /,"",t); print "SUB~" t > arq }
  else { ind=$3; sub(/ .*/,"",ind); nome=$3; sub(/^[^ ]+ /,"",nome);
    printf "%s~%s~%s~%s~%s~%s~%s~%s~%s~%s\n", $2,ind,nome,$4,$6,$7,$10,$11,$12,$13 > arq }
}' rows.tsv
```

Confira `wc -l fam/*.txt` contra o CSV antes de construir. No CSV de 2026: 241 linhas, sendo 174 produtos e 67 linhas de cor.

Para a checagem de variância do passo 2:

```bash
awk -F'\t' '$2!="SUB"{print $1" | cil="$8" | adi="$9" | alt="$5}' rows.tsv | sort -u
```

Uma linha por família significa constante. Duas ou mais, investigue antes de seguir.

## Validação (não pule)

Rode as três antes de dizer que terminou:

| Checagem | Como | Critério |
|---|---|---|
| Texto não trunca | Nó de teste medindo o texto mais largo por coluna | `precisa <= largura` em todas |
| Tabela não invade o rodapé | `tbl.y + tbl.height` | `<= 796` (rodapé fica em 812) |
| Nenhum dado perdido | Contar linhas de produto e códigos de cor contra o CSV | contagens idênticas |

Nunca chute largura de coluna. Meça. `0.00 a -4.00` estourou uma coluna de 44px por 1px e só apareceu na medição.

## Erros que já custaram retrabalho

| Sintoma | Causa | Correção |
|---|---|---|
| Rodapé e imagem saltam de posição | `findOne(n => n.name.indexOf('Tabela ')===0)` casou com um nó de TEXTO — o Figma nomeia texto pelo conteúdo | Sempre filtrar por `n.type === 'FRAME'` |
| `Failed to parse SSE message: Invalid JSON` | O `return` levou texto contendo U+2028 (separador de linha usado nas células de 2 linhas) | Nunca retornar `.characters` cru; trocar U+2028 por espaço antes de retornar |
| `Cannot write to node with unloaded font` ao só alinhar texto | `textAlignHorizontal` também exige fonte carregada | `loadFontAsync` de todos os estilos usados no início do script |
| `layoutSizingHorizontal` rejeitado | Setado antes do `appendChild` | Anexar primeiro, dimensionar depois |
| Iteração sobre a página quebra com `children of undefined` | Nó de teste de medição ficou solto na página | Filtrar `type === 'FRAME'` e remover o nó de teste no fim |

## Referências

- `referencia-tabela.md` — grid, paleta das 12 famílias, regras de formatação de conteúdo, siglas das bolinhas
- `construtor.js` — código da Plugin API pronto para `use_figma`
