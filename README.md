# Vixlens Plugin Marketplace

Marketplace oficial de plugins Vixlens para Claude Code e Cowork.

## Instalação via Claude Code

```bash
claude plugin marketplace add vixlens-lab/vixlens-plugin
claude plugin install vixlens-brand
```

## Plugins disponíveis

### `vixlens-brand`
Sistema completo de marca Vixlens. Inclui 4 skills:

- **vixlens-brand** — skill mestre que carrega paleta, tipografia, voz e vocabulário canônico
- **comunicado-interno** — comunicados para o time no padrão institucional
- **manual-cliente** — manuais operacionais para clientes ópticos B2B
- **proposta-comercial** — propostas comerciais para varejistas ópticos independentes

## Estrutura do repositório

```
.claude-plugin/
  marketplace.json          ← manifesto do marketplace
plugins/
  vixlens-brand/
    .claude-plugin/
      plugin.json           ← manifesto do plugin
    skills/
      vixlens-brand/        ← skill mestre de marca
        SKILL.md
        references/
          paleta-tipografia.md
          voz-tom.md
          vocabulario-canonico.md
      comunicado-interno/
        SKILL.md
      manual-cliente/
        SKILL.md
      proposta-comercial/
        SKILL.md
```

## Versionamento

| Versão | Data | Notas |
|---|---|---|
| 0.1.0 | Mai/2026 | Release inicial — 4 skills de marca e documentos |

---

Vixlens Laboratório Óptico · Vila Velha, ES · www.vixlens.com.br
