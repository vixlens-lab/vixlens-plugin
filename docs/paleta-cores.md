# Prompt — Atualização do DS Vixlens: Hierarquia de Cores

Preciso que você atualize o arquivo `paleta-tipografia.md` do Design System da Vixlens com as seguintes correções. As regras abaixo substituem as anteriores.

---

## Correções a aplicar

### 1. Hierarquia de cores (regra irrefutável)

A paleta Vixlens segue a regra **60-30-10**:

| Nível | Cor | HEX | Peso visual | Uso |
|-------|-----|-----|-------------|-----|
| Primária | Preto | #000000 | ~60% | Backgrounds escuros, texto principal, elementos estruturais dominantes |
| Primária | Branco | #FFFFFF | ~60% | Fundo geral, texto sobre preto, áreas de respiro |
| Secondary | Amarelo | #FAC617 | ~15–20% | Faixas finas de capa/conclusão, labels de alto impacto, CTAs principais |
| Accent | Azul | #0439D9 | ~5% | Usado com extrema parcimônia — apenas em visualizações de dados onde é necessária uma terceira cor distinta, ou em 1 elemento de destaque máximo por documento |

> **Regra de ouro:** Se você está em dúvida entre usar amarelo ou azul, use preto. Se está em dúvida entre usar amarelo ou preto, use preto. Amarelo e azul ganham força exatamente por aparecerem pouco.

---

### 2. Fundo da capa

- **Correto:** Preto (#000000)
- **Errado:** Azul (#0439D9) — o azul não deve ser fundo dominante
- Faixas amarelas no topo e base devem ser **finas** (~0.42" / 7% da altura), não largas

### 3. Header de páginas internas

- Barra de cabeçalho: **Preto**, não Azul
- "VIXLENS" em Branco sobre Preto
- O azul não aparece no header padrão

### 4. Elementos que usam Amarelo (aceitável)

- Faixas finas na capa e conclusão
- Label "EM UMA FRASE" na capa
- Linha divisória em slides escuros
- Badge de numeração em slides de pilares/steps (onde é o único elemento colorido)
- Borda de destaque em cards de recomendação (ex: "CENÁRIO RECOMENDADO")
- CTAs de alto impacto (apenas 1 por slide)

### 5. Elementos que NÃO devem usar Amarelo nem Azul

- Bullets de listas — usar Preto
- Labels de seção (TATICAS, FORMATOS, MÉTRICAS, etc.) — usar Preto
- Headers de cards e colunas — usar Preto
- Barras laterais de conteúdo — usar Preto
- Badges de step em slides de conteúdo — usar Preto

### 6. Azul: quando usar

O Azul (#0439D9) é reservado para:
- Fatia em gráfico de dados (onde é necessária 3ª cor distinta)
- Máximo 1 elemento de destaque por documento inteiro, quando nem amarelo nem preto resolverem o problema visual

### 7. Referência de boas práticas aplicada

Aplicar princípio do guia **"Utilize a cor primária com sabedoria"**:
> Cor usada em excesso perde exclusividade e impacto. Amarelo e azul devem causar reação — se aparecem em todo slide, viram ruído.

---

## O que remover do DS atual

No arquivo `paleta-tipografia.md`, remover ou corrigir:
- A linha que diz que a capa tem fundo Azul → corrigir para Preto
- A linha que diz que o header interno é Azul → corrigir para Preto
- Qualquer combinação aprovada que use Azul como fundo de área grande
- A referência ao logo "sempre Branco sobre fundo Azul" → atualizar para "sempre Branco sobre fundo Preto ou sobre fundo Azul quando Azul for absolutamente necessário"

---

## Combinações aprovadas (revisadas)

| Fundo | Texto | Uso |
|-------|-------|-----|
| #000000 | #FFFFFF | Capa, slides escuros, headers, elementos âncora |
| #FFFFFF | #000000 | Fundo geral de slides, cards, corpo de texto |
| #FAC617 | #000000 | Faixas finas de accent, labels de alto impacto |
| #000000 | #FAC617 | Badge de step, número em destaque sobre preto |
| #FAC617 | #0439D9 | Callout de altíssimo impacto — usar com extrema moderação |

---

Após aplicar essas correções, confirme as mudanças e atualize também o `SKILL.md` com a nota:

> "Cores primárias: Preto e Branco. Amarelo e Azul são accent colors — 60-30-10. Fundo da capa: Preto."
