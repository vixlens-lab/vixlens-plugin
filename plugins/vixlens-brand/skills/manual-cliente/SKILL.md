---
name: manual-cliente
description: Gera um manual operacional para clientes ópticos no padrão Vixlens. Use quando o usuário digitar /manual-cliente ou pedir "criar manual para cliente", "manual operacional Vixlens", "documentação para cliente óptico". Segue a mesma estrutura do Manual de Pedidos Marca Própria.
---

# Skill /manual-cliente

Gere um manual operacional para clientes ópticos seguindo exatamente o padrão Vixlens de documentos.

## Antes de começar

Pergunte ao usuário (se não informado):
1. **Tema do manual** — ex: "pedidos de marca própria", "uso do portal Vixlens", "processo de devolução"
2. **Público-alvo** — tipo de cliente óptico (independente pequeno, médio, grande)
3. **Versão e data** — para o rodapé

Se o usuário não souber, use: público = óptica independente, versão = 1.0, data = mês e ano atual.

## Estrutura obrigatória do manual

### 1. Capa
```
VIXLENS
LABORATÓRIO ÓPTICO INDUSTRIAL

[Título do Manual]
[Subtítulo descritivo]

EM UMA FRASE
[Síntese em 1-2 linhas. Direto ao ponto. Use frase-âncora canônica se aplicável.]

Versão X.X — [Mês/Ano]
Espírito Santo, Brasil
```

### 2. Abertura — "Por que estamos mudando" (ou equivalente)
- 1 parágrafo contextual: o que muda e por quê
- Destacar o grande diferencial em callout com barra Amber

### 3. Benefícios (4 itens máximo)
- Bullet curto + 1-2 frases de desenvolvimento
- Foco em benefício concreto para o cliente, não em qualidade da Vixlens

### 4. Passo a passo (steps numerados)
- Badge Blue numerado para cada etapa
- Máximo 9 steps
- Linguagem imperativa: "Acesse", "Selecione", "Confirme"
- Callout ATENÇÃO ao final se houver regra crítica

### 5. FAQ (Perguntas frequentes)
- Formato: pergunta em negrito + resposta direta no parágrafo
- 6 a 10 perguntas cobrindo dúvidas operacionais previsíveis

### 6. Suporte e contato
Tabela com: Canal | Para que serve | Tempo de resposta
Sempre incluir: Comercial/Consultor, Suporte técnico, WhatsApp Vixlens, Atendimento ao Cliente
Horário: Segunda a sexta 8h-18h, Sábado 8h-12h

## Tom de voz para manuais de cliente

Use V2 (Consultoria de balcão) como base:
- Linguagem próxima e direta
- Frases curtas, imperativas
- Antecipe a dúvida antes que o cliente precise perguntar
- Cliente é protagonista; Vixlens facilita o processo

## Callouts disponíveis

**ATENÇÃO** (barra Navy): regras críticas, proibições, consequências de erro
**IMPORTANTE** (barra Amber): destaques comerciais, benefícios principais
**DICA** (barra Blue): atalhos, boas práticas operacionais
**O GRANDE DIFERENCIAL** (barra Amber): argumento comercial central — usar para o pitch do portfólio campeão

## Checklist antes de entregar

- [ ] Frase "Em uma frase" na capa é direta e usa vocabulário canônico
- [ ] Steps usam verbos imperativos
- [ ] FAQ cobre o erro mais comum do processo
- [ ] Nenhum travessão no texto
- [ ] Tabela de suporte preenchida
- [ ] Versão e data no rodapé
