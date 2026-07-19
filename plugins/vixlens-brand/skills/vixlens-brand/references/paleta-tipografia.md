# Paleta e Tipografia Vixlens — DS 5.0

> **Regra de ouro (60-30-10):** Preto e Branco são a base dominante (~60%). Amarelo é secondary — faixas finas, CTAs, labels de alto impacto (~15%). Azul é accent de último recurso — apenas em visualizações de dados ou 1 elemento por documento (~5%). Cor usada em excesso perde exclusividade e impacto.

## Paleta primária de marca — Hierarquia 60-30-10

| Nível      | Nome         | HEX       | Peso visual | Uso principal                                                              |
|------------|--------------|-----------|-------------|----------------------------------------------------------------------------|
| Primária   | Preto        | #1D1D1F   | ~60%        | Capa, header, fundos escuros, texto principal, badges de step, estrutura   |
| Primária   | Branco       | #FFFFFF   | ~60%        | Fundo geral de página, texto sobre preto, áreas de respiro                 |
| Secondary  | Amarelo      | #FAC617   | ~15%        | Faixas finas de capa/conclusão, labels de alto impacto, CTAs, número em badge |
| Accent     | Azul         | #0439D9   | ~5%         | APENAS: fatia em gráfico de dados (3ª cor) ou 1 elemento por documento inteiro |
| Suporte    | BG Cinza     | #F5F5F7   | —           | Fundo de seção, cards, callouts — nunca dominante de página                |
| Suporte    | Cinza médio  | #606F7F   | —           | Texto secundário, bordas, metadados                                        |

### Combinações aprovadas (revisadas DS 3.1)
| Fundo    | Texto    | Uso                                                                 |
|----------|----------|---------------------------------------------------------------------|
| #1D1D1F  | #FFFFFF  | Capa, headers, slides escuros, elementos âncora — uso dominante     |
| #FFFFFF  | #1D1D1F  | Fundo geral de slides, cards, corpo de texto — uso dominante        |
| #FAC617  | #1D1D1F  | Faixas finas de accent, labels de alto impacto                      |
| #1D1D1F  | #FAC617  | Badge de step, número em destaque sobre preto                       |
| #F5F5F7  | #1D1D1F  | Cards, blocos secundários                                           |
| #FAC617  | #0439D9  | Callout de altíssimo impacto — usar com extrema moderação           |

### Elementos que usam Amarelo (aceitável)
- Faixas finas no topo/base da capa e conclusão
- Label "EM UMA FRASE" na capa
- Linha divisória em slides escuros
- Badge de numeração (número sobre fundo Preto)
- Borda de destaque em card "CENÁRIO RECOMENDADO"
- CTAs de alto impacto (máximo 1 por slide)

### Elementos que NÃO devem usar Amarelo nem Azul
- Bullets de listas → Preto
- Labels de seção (TÁTICAS, FORMATOS, MÉTRICAS etc.) → Preto
- Headers de cards e colunas → Preto
- Barras laterais de conteúdo → Preto
- Badges de step em slides de conteúdo → Preto com número Amarelo

### Quando usar Azul
O Azul (#0439D9) é reservado para:
- Fatia em gráfico de dados (onde é necessária 3ª cor distinta)
- Máximo 1 elemento de destaque por documento inteiro, quando nem Amarelo nem Preto resolverem o problema visual

---

## Paleta de dashboard — estados semânticos

Usada em interfaces digitais, dashboards e callouts de documentos.

| Nome        | HEX     | Estado                              |
|-------------|---------|-------------------------------------|
| Roxo        | #615FFF | Informativo / neutro UI             |
| Coral       | #FF6566 | Crítico / alerta / erro             |
| Amarelo     | #FCD341 | Destaque / atenção / pendente       |
| Verde       | #30D389 | Sucesso / confirmação / ativo       |
| Stroke      | #3E4D62 | Bordas e divisores no dashboard     |
| BG Escuro   | #0B1220 | Background escuro dashboard         |
| BG Card     | #2B3037 | Cards cinza escuro dashboard        |

### Callouts de documentos — cores atualizadas
| Tipo        | Barra lateral | Fundo   | Label (texto) |
|-------------|---------------|---------|---------------|
| Destaque    | #FCD341       | #FFFBEB | #92730A       |
| Informativo | #615FFF       | #EFEFFF | #615FFF       |
| Crítico     | #FF6566       | #FFF0F0 | #E03535       |
| Sucesso     | #30D389       | #EDFBF4 | #1A9960       |

---

## Paleta secundária — Linha Reflecta

Cada cor representa o **residual visual do tratamento antirreflexo** — a tonalidade percebida em reflexo na lente quando exposta à luz. Uso restrito a materiais da linha Reflecta.

| Produto               | HEX     | Residual de cor       |
|-----------------------|---------|-----------------------|
| Reflecta BlueProtect SH | #134B97 | Residual azul       |
| Reflecta Guard        | #00782D | Residual verde        |
| Reflecta Express      | #92BB36 | Residual verde-limão  |

---

## Tipografia

### Família principal — Mont (documentos e identidade)

Font geométrica sem serifa. Pesos: Thin · ExtraLight · Light · Regular · SemiBold · Bold · ExtraBold · Heavy

| Nível              | Peso Mont   | Tamanho | Caixa  | Uso                                           |
|--------------------|-------------|---------|--------|-----------------------------------------------|
| Display / Logo     | Heavy       | 48pt    | Alta   | "VIXLENS" na capa                             |
| Tagline capa       | SemiBold    | 13pt    | Alta   | "LABORATÓRIO ÓPTICO INDUSTRIAL"               |
| Título documento   | ExtraBold   | 24pt    | Título | Nome do documento na capa                    |
| H1                 | Bold        | 20pt    | Título | Seções principais                            |
| H2                 | SemiBold    | 15pt    | Título | Subseções                                    |
| H3 / Label callout | SemiBold    | 11pt    | Alta   | Labels de callout, rótulos de tabela          |
| Corpo              | Regular     | 11pt    | Normal | Parágrafos, listas, FAQ                      |
| Corpo destaque     | SemiBold    | 11pt    | Normal | Termos canônicos em negrito no corpo         |
| Caption / Footer   | Light       | 9pt     | Normal | Rodapé, legendas, notas de versão            |
| Badge step         | Bold        | 12pt    | Normal | Número dentro do badge de step               |

### Família secundária — Host Grotesk (interfaces digitais e web)

Usada exclusivamente em contextos digitais: site, plataformas, dashboards, apresentações em tela.

| Nível           | Peso          | Tamanho   | Uso                              |
|-----------------|---------------|-----------|----------------------------------|
| Display/Hero    | ExtraBold 800 | 48–64px   | Headlines principais             |
| H1              | Bold 700      | 36–48px   | Títulos de seção                |
| H2              | Bold 700      | 28–36px   | Subtítulos                      |
| H3              | SemiBold 600  | 22–24px   | Cabeçalhos de card              |
| Corpo grande    | Regular 400   | 18px      | Intro, lead                     |
| Corpo padrão    | Regular 400   | 16px      | Texto principal                 |
| Label / Caption | SemiBold 600  | 12–14px   | Labels, badges, navegação       |
| Micro           | Regular 400   | 11px      | Metadados, notas                |

**Regra:** Mont em documentos (Word, PDF, impressão). Host Grotesk em digital (HTML, app, dashboards). Nunca misturar na mesma peça.

### Regras de tipografia

- **Nunca** usar Thin ou ExtraLight em corpo de texto — legibilidade comprometida
- **Heavy** reservado para display e logo
- **Caixa alta** apenas em: logo, tagline, labels de callout, títulos de alto impacto
- **Itálico** não faz parte da identidade Vixlens
- **Line-height:** 1.6× para corpo; 1.2× para títulos
- **Letter-spacing:** +0.1em em labels caixa alta; 0 no corpo

---

## Iconografia

### Ícones de linha de produto (Cards Hero)
SVG customizados do Figma Vixlens 5.0. Cada ícone é fixo à sua linha:
- Freevix — círculo (lente)
- AR Reflecta — símbolo AR (flocos)
- Essilor — olho (eye)
- Vix Academy — bookmark

### Ícones de UI — Phosphor Icons
Biblioteca padrão para interfaces digitais. CDN: `https://unpkg.com/@phosphor-icons/web@2.1.1/src/index.js`
- Peso padrão: **Regular** (`ph ph-nome`)
- Peso em botões: **Bold** (`ph-bold ph-nome`)
- Estado ativo: **Fill** (`ph-fill ph-nome`)
- Tamanho padrão: **24px**
- Ícones de status usam cores do dashboard semântico

---

## Estrutura de documento padrão

### Capa
- Fundo: Preto (#1D1D1F)
- Faixas Amarelo (#FAC617) finas no topo e na base (altura ~7% — faixas estreitas, não largas)
- Logo "VIXLENS" em Branco, Mont Heavy 48pt, centralizado
- Tagline: Branco, Mont SemiBold 13pt, tracking +60
- Caixa "EM UMA FRASE": fundo Preto (#1D1D1F) com borda Amarelo, label Amarelo Mont SemiBold 9pt caixa alta, texto Branco Mont Regular 12pt

### Header de páginas internas
- Barra Preto (#1D1D1F), altura ~10mm
- "VIXLENS" Branco Mont Bold à esquerda · Título do documento Amarelo Mont Bold à direita

### Footer de páginas internas
- Linha divisória #D1D5DB
- "Vixlens Laboratório Óptico — [mês/ano]" Mont Light 9pt, #606F7F · "Página N" à direita

### Callouts — cores atualizadas (DS 5.0)
- **Destaque** → barra #FCD341, fundo #FFFBEB, label #92730A
- **Informativo** → barra #615FFF, fundo #EFEFFF, label #615FFF
- **Crítico** → barra #FF6566, fundo #FFF0F0, label #E03535
- **Sucesso** → barra #30D389, fundo #EDFBF4, label #1A9960
- Estrutura: border-radius 0 12px 12px 0 · borda lateral 4px · padding 16px 20px
- Label: SemiBold 9pt · caixa alta · cor conforme tipo

### Steps numerados
- Badge 24×24px, fundo Preto (#1D1D1F), radius 4px
- Número: Mont Bold 12pt, Amarelo (#FAC617)

---

## Design System — Links de referência

| Recurso                    | URL                                                      |
|----------------------------|----------------------------------------------------------|
| DS publicado (produção)    | https://ds.vixlens.com.br                        |
| Repositório GitHub         | https://github.com/vixlenslab/vixlens-ds                 |
| Branch principal           | `main` — deploy automático via Vercel a cada push        |

> Versão atual: DS 5.0 · Plugin v0.2.0 · Deploy: 08/05/2026
