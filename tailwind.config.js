// O tema mora em tailwind.preset.js — mesmo preset que as telas Vixlens herdam.
// Aqui fica so o que e do site de documentacao: onde varrer classes.
import vixlens from './tailwind.preset.js'

export default {
  presets: [vixlens],
  content: ['./index.html', './src/**/*.{js,jsx}'],
}
