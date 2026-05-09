# Paleta e Tipografia Vixlens — DS 3.0

## Paleta primária de marca

| Nome         | HEX       | Uso principal                                                  |
|--------------|-----------|----------------------------------------------------------------|
| Preto        | #1D1D1F   | Texto principal, fundos escuros, elementos de alto contraste   |
| Amarelo      | #FAC617   | CTAs, faixas de capa, labels de destaque, identidade de marca  |
| Azul         | #0439D9   | Headers, badges, elementos âncora, documentos institucionais   |
| Branco       | #FFFFFF   | Texto sobre Azul/Preto, fundo padrão de página                 |
| BG Cinza     | #F5F5F7   | Fundo de seção, cards, callouts — nunca dominante de página    |
| Cinza médio  | #606F7F   | Texto secundário, bordas, metadados                            |

### Combinações aprovadas
| Fundo    | Texto    | Uso                             |
|----------|----------|---------------------------------|
| #1D1D1F  | #FFFFFF  | Fundos escuros, caixas âncora   |
| #1D1D1F  | #FAC617  | Amarelo sobre preto — destaque  |
| #0439D9  | #FFFFFF  | Capa, header, badges            |
| #FAC617  | #1D1D1F  | Faixas de destaque, CTAs        |
| #FFFFFF  | #1D1D1F  | Corpo de texto, fundo padrão    |
| #F5F5F7  | #1D1D1F  | Cards, blocos secundários       |

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
SVG customizados do Figma Vixlens 3.0. Cada ícone é fixo à sua linha:
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
- Fundo: Azul (#0439D9)
- Faixas Amarelo (#FAC617) no topo e na base (altura ~12%)
- Logo "VIXLENS" em Branco, Mont Heavy 48pt, centralizado
- Tagline: Branco, Mont SemiBold 13pt, tracking +60
- Caixa "EM UMA FRASE": fundo Preto (#1D1D1F), label Amarelo Mont SemiBold 9pt caixa alta, texto Branco Mont Regular 12pt

### Header de páginas internas
- Barra Azul (#0439D9), altura ~10mm
- "VIXLENS" Branco Mont Bold à esquerda · Título do documento Branco Mont Regular à direita

### Footer de páginas internas
- Linha divisória #D1D5DB
- "Vixlens Laboratório Óptico — [mês/ano]" Mont Light 9pt, #606F7F · "Página N" à direita

### Callouts — cores atualizadas (DS 3.0)
- **Destaque** → barra #FCD341, fundo #FFFBEB, label #92730A
- **Informativo** → barra #615FFF, fundo #EFEFFF, label #615FFF
- **Crítico** → barra #FF6566, fundo #FFF0F0, label #E03535
- **Sucesso** → barra #30D389, fundo #EDFBF4, label #1A9960
- Estrutura: border-radius 0 12px 12px 0 · borda lateral 4px · padding 16px 20px
- Label: SemiBold 9pt · caixa alta · cor conforme tipo

### Steps numerados
- Badge 24×24px, fundo Azul (#0439D9), radius 4px
- Número: Mont Bold 12pt, Branco
