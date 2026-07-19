# Contribuir com o Vixlens Design System

Guia de como propor e aplicar mudanças no DS. Vale para dev e design.
Repo: https://github.com/vixlenslab/vixlens-ds · No ar: https://ds.vixlens.com.br

## Regras de ouro

1. **Fonte única de token é o JSON.** `assets/tokens/vixlens-tokens.json`. Os arquivos `.css` e o preset Tailwind são **gerados** — nunca edite na mão.
2. **Toda mudança passa por PR.** `main` faz deploy automático (Vercel). O CI (GitHub Actions) roda a guarda de drift de token + build; PR não passa se algo estiver fora de sync.
3. **Deploy sempre com autor `vixlens-lab-bot <bot@vixlens.com.br>`.**
4. **Mudança grande (novo token, novo componente, quebra):** abra uma _issue_ / RFC curta antes, pra alinhar. Pequena (texto, fix): PR direto.

## Mudar um token (cor, raio, espaçamento, tipografia)

```bash
# 1. edite o JSON
assets/tokens/vixlens-tokens.json

# 2. regenere os exports (CSS + preset Tailwind)
npm run tokens:build

# 3. confira que ficou em sync
npm run tokens:check

# 4. commit do JSON + dos gerados juntos
git add assets/tokens/
```

Nunca edite `vixlens-tokens.css` nem `vixlens-tailwind-preset.js` diretamente — o `tokens:check` (e o CI) vão barrar.

## Adicionar um componente

1. Base é o preset shadcn **luma**: `npx shadcn@latest init --preset b6GgLgzgW` (estilo já decidido). Aplique os tokens Vixlens por cima.
2. Crie a seção em `src/components/<grupo>/<Nome>Section.jsx` usando `<Section id=... eyebrow=... title=... desc=...>`.
3. Documente: `PropsTable` + `DosDonts` (de `componentes/ComponentDocs.jsx`) e um bloco `CodeBlock` (de `Copy.jsx`) com o snippet de uso.
4. Registre em `src/App.jsx` (import + render, na ordem visual) e em `src/data/nav.js` (item + `eyebrow` sequencial, sem duplicar número).

## Versionamento (SemVer)

`MAJOR.MINOR.PATCH` — **MAJOR** quebra, **MINOR** adiciona compatível, **PATCH** corrige.

Ao lançar uma versão:

1. Bump em **3 lugares**: `src/data/nav.js` (`version`), rodapé em `src/App.jsx`, e `package.json`.
2. Adicione a entrada no topo da timeline em `src/components/sobre/ChangelogSection.jsx`.
3. Depois do merge, crie a tag:
   ```bash
   git tag -a v0.7.0 -m "v0.7.0"
   git push origin v0.7.0
   ```

## Rodar local

```bash
npm install
npm run dev          # dev server
npm run build        # build de produção (roda tokens:check antes)
npm run tokens:build # regenera os exports de token
```
