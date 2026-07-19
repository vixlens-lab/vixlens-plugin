<!-- PR do Vixlens DS. O CI roda tokens:check + lint + build + auditoria a11y. -->

## O que muda
<!-- 1-3 linhas. -->

## Tipo
- [ ] Novo (feature compatível → bump MINOR)
- [ ] Correção (→ bump PATCH)
- [ ] Quebra (→ bump MAJOR, precisa de RFC)
- [ ] Doc / interno (sem release)

## Checklist
- [ ] Se mexi em token: editei o **JSON** e rodei `npm run tokens:build` (não editei CSS/preset na mão)
- [ ] `npm run tokens:check` passa (sem drift)
- [ ] `npm run lint` passa
- [ ] `npm run build` passa
- [ ] Se é componente novo: tem Props + Do/Don't + snippet de código
- [ ] Se é release: bump em nav.js + rodapé + package.json, entrada no Changelog, e tag `vX.Y.Z`

## RFC / contexto
<!-- Link da issue/RFC se for mudança grande. -->
