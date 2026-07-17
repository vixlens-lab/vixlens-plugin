// Vixlens DS 3.0 — Tailwind preset. Fonte: vixlens-tokens.json
// uso: presets: [require('./vixlens-tailwind-preset.js')]
module.exports = {
  theme: {
    extend: {
      colors: {
        'vix-preto': '#1D1D1F', 'vix-branco': '#FFFFFF',
        'vix-cinza-card': '#F5F5F7', 'vix-amarelo': '#FAC617',
        'vix-azul': '#0439D9', 'vix-cinza-borda': '#606F7F',
        reflecta: { 'guard': '#00782D', 'express': '#92BB36', 'blue-protect-sh': '#134B97' },
      },
      borderRadius: { 'vix-card': '57px', 'vix-button': '30px', 'vix-input': '12px', 'vix-chip': '6px' },
      spacing: { '1': '4px', '2': '8px', '3': '12px', '4': '16px', '5': '20px', '6': '24px', '7': '30px', '8': '40px', '9': '48px', '10': '60px', '11': '64px', '12': '80px' },
      maxWidth: { 'vix-produto': '1422px', 'vix-site': '1100px' },
      fontFamily: { vix: ['Host Grotesk', 'sans-serif'] },
    },
  },
}
