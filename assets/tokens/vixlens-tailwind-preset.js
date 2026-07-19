// Vixlens DS — Tailwind preset. GERADO por scripts/build-tokens.mjs (fonte: vixlens-tokens.json).
// uso: presets: [require('./vixlens-tailwind-preset.js')]
module.exports = {
  theme: {
    extend: {
      colors: {
        'vix-preto': '#1D1D1F',
        'vix-branco': '#FFFFFF',
        'vix-cinza-card': '#F5F5F7',
        'vix-amarelo': '#FAC617',
        'vix-amarelo-hover': '#E5A800',
        'vix-azul': '#0439D9',
        'vix-azul-10': '#EAF0FF',
        'vix-azul-20': '#C0CDFA',
        'vix-amarelo-light': '#FEF3C7',
        'vix-cinza-borda': '#606F7F',
        'vix-gray': {
          '50': '#F9FAFB',
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '700': '#374151'
        },
        'reflecta': {
          'guard': '#00782D',
          'express': '#92BB36',
          'blue-protect-sh': '#134B97'
        },
        'vix-chart': {
          '1': '#FAC617',
          '2': '#0439D9',
          '3': '#615FFF',
          '4': '#30D389',
          '5': '#606F7F'
        }
      },
      borderRadius: {
        'vix-card': '32px',
        'vix-button': '32px',
        'vix-input': '24px',
        'vix-chip': '12px'
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '30px',
        '8': '40px',
        '9': '48px',
        '10': '60px',
        '11': '64px',
        '12': '80px'
      },
      maxWidth: {
        'vix-produto': '1422px',
        'vix-site': '1100px'
      },
      fontFamily: { vix: ['Host Grotesk', 'sans-serif'], 'vix-print': ['Montserrat', 'Mont', 'sans-serif'] },
    },
  },
}
