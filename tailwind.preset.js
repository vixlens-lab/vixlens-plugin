// Preset do Tailwind 3 do DS — o que as telas herdam.
//
// O conteudo NAO mora aqui: e gerado em assets/tokens/vixlens-tailwind-preset.cjs
// a partir de vixlens-tokens.json, junto com o equivalente Tailwind 4
// (vixlens-theme-v4.css). Fonte unica, e o `npm run tokens:check` barra drift.
//
// Este arquivo existe so pra somar o que nao da pra serializar num arquivo
// gerado: o plugin. Se voce quer mudar cor, raio, espacamento ou tipografia,
// edite o JSON e rode `npm run tokens:build`.
//
// Nas telas em Tailwind 3 (tailwind.config.js):
//
//   import vixlens from 'vixlens-ds/tailwind.preset.js'
//   export default {
//     presets: [vixlens],
//     content: [
//       './src/**/*.{js,jsx,ts,tsx}',
//       './node_modules/vixlens-ds/dist-lib/**/*.js', // <- sem isto as classes
//     ],                                              //    dos componentes somem
//   }
//
// Nas telas em Tailwind 4, que nao tem a chave `presets`, use no globals.css:
//
//   @import "tailwindcss";
//   @import "vixlens-ds/theme.css";
//   @import "vixlens-ds/tailwind.css";

import { createRequire } from 'node:module'
import tailwindcssAnimate from 'tailwindcss-animate'

const require = createRequire(import.meta.url)
const gerado = require('./assets/tokens/vixlens-tailwind-preset.cjs')

export default {
  ...gerado,
  plugins: [tailwindcssAnimate],
}
