# Vixlens — Design System

Design system local consolidado. Fonte oficial online: **https://ds.vixlens.com.br**

## Estrutura

```
design-system/
├── README.md                ← este arquivo
├── paleta-cores.md          ← regra 60-30-10 + paleta oficial
├── paleta-tipografia.md     ← Host Grotesk (digital) + Mont/Montserrat (print)
├── referencia-online.md     ← link e prints do DS hospedado
└── logo/
    ├── vixlens.svg          ← original vetorial (cores brancas + accent amarelo)
    ├── vixlens.png          ← raster 440x130, fundo preto (para uso em Sheets/email)
    └── variantes/           ← versões futuras (light, dark, monocrômico, etc.)
```

## Princípios resumidos

### Cores (60-30-10)
- **60% Primárias:** Preto `#000000` + Branco `#FFFFFF`
- **30% Neutros:** cinzas para hierarquia secundária
- **10% Accents:** Amarelo `#FAC617` (pontual) + Azul `#0439D9` (max 1 elemento/documento)
- **Regra de ouro:** na dúvida, usa preto. Amarelo e azul ganham força aparecendo pouco.

### Tipografia
- **Digital:** Host Grotesk (Google Fonts)
- **Print/Documentos:** Mont (paga) ou Montserrat (substituto Google Fonts)
- Hierarquia via peso + tamanho, nunca via cor

## Onde o DS já está aplicado

- **`forms/marca-propria/`** — formulário V2 com Host Grotesk + paleta 60-30-10 + logo SVG oficial
- **`apps-scripts/pedidos-marca-propria/`** — cards da aba "Pedidos" no Google Sheets

## Para futuras atualizações do DS

Abra uma nova sessão Claude Code vinculada a esta pasta. A memória do projeto já carrega:
- Paleta + tipografia
- Histórico do form de marca própria
- Logo oficial

Edite os arquivos `paleta-*.md` e o Claude vai aplicar automaticamente em novos artefatos.
