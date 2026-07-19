#!/usr/bin/env node
/**
 * Gera os exports de token (CSS + Tailwind preset) a partir da fonte única
 * `assets/tokens/vixlens-tokens.json`. NÃO edite os arquivos gerados na mão.
 *
 *   node scripts/build-tokens.mjs           # regenera os arquivos
 *   node scripts/build-tokens.mjs --check   # falha (exit 1) se estiverem fora de sync
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const JSON_PATH = join(root, 'assets/tokens/vixlens-tokens.json')
const CSS_PATH = join(root, 'assets/tokens/vixlens-tokens.css')
const PRESET_PATH = join(root, 'assets/tokens/vixlens-tailwind-preset.js')

const t = JSON.parse(readFileSync(JSON_PATH, 'utf8'))
const val = (x) => (x && typeof x === 'object' ? x.value : x) // aceita {value} ou string cru
const isColor = (x) => x && typeof x === 'object' && typeof x.value === 'string'

// ---------- CSS ----------
function buildCss() {
  const L = []
  L.push('/* Vixlens Design System — tokens canônicos. GERADO por scripts/build-tokens.mjs.')
  L.push('   Fonte: assets/tokens/vixlens-tokens.json — NÃO edite este arquivo na mão, edite o JSON. */')
  L.push(`@import url('${t.typography['font-digital'].import}');`)
  L.push('')
  L.push(':root {')

  L.push('  /* cor */')
  for (const [k, v] of Object.entries(t.color)) {
    if (k === 'comment') continue
    if (isColor(v)) {
      L.push(`  --vix-${k}: ${v.value};`)
    } else if (k === 'gray') {
      for (const [g, gv] of Object.entries(v)) if (g !== 'comment') L.push(`  --vix-gray-${g}: ${gv.value};`)
    } else if (k === 'reflecta') {
      for (const [r, rv] of Object.entries(v)) if (r !== 'comment') L.push(`  --vix-reflecta-${r}: ${rv.value};`)
    } else if (k === 'azul-tint') {
      for (const [a, av] of Object.entries(v)) if (a !== 'comment') L.push(`  --vix-azul-${a}: ${av.value};`)
    } else if (k === 'callout') {
      for (const [c, cv] of Object.entries(v)) {
        if (c === 'comment') continue
        L.push(`  --vix-callout-${c}-bg: ${cv.bg}; --vix-callout-${c}-bar: ${cv.bar};`)
      }
    }
  }

  L.push('  /* raio */')
  for (const [k, v] of Object.entries(t.radius)) if (k !== 'comment') L.push(`  --vix-radius-${k}: ${val(v)};`)

  L.push('  /* espaçamento (âncora 40px) */')
  for (const [k, v] of Object.entries(t.spacing)) {
    if (k === 'comment') continue
    if (k === 'anchor') L.push(`  --vix-anchor: ${val(v)};`)
    else L.push(`  --vix-${k}: ${val(v)};`)
  }

  L.push('  /* layout */')
  for (const [k, v] of Object.entries(t.layout)) if (k !== 'comment') L.push(`  --vix-${k}: ${val(v)};`)

  L.push('  /* tipografia */')
  L.push(`  --vix-font-digital: ${t.typography['font-digital'].value};`)
  L.push(`  --vix-font-print: ${t.typography['font-print'].value};`)
  for (const [lvl, s] of Object.entries(t.typography.scale)) {
    if (lvl === 'comment') continue
    L.push(`  --vix-font-${lvl}: ${s.desktop}; --vix-font-${lvl}-mobile: ${s.mobile};`)
  }

  L.push('}')
  return L.join('\n') + '\n'
}

// ---------- Tailwind preset ----------
function buildPreset() {
  const colors = {}
  for (const [k, v] of Object.entries(t.color)) {
    if (k === 'comment') continue
    if (isColor(v)) colors[`vix-${k}`] = v.value
    else if (k === 'gray') colors['vix-gray'] = Object.fromEntries(Object.entries(v).filter(([g]) => g !== 'comment').map(([g, gv]) => [g, gv.value]))
    else if (k === 'reflecta') colors.reflecta = Object.fromEntries(Object.entries(v).filter(([r]) => r !== 'comment').map(([r, rv]) => [r, rv.value]))
    else if (k === 'azul-tint') for (const [a, av] of Object.entries(v)) if (a !== 'comment') colors[`vix-azul-${a}`] = av.value
    else if (k === 'callout') {
      const co = {}
      for (const [c, cv] of Object.entries(v)) if (c !== 'comment') { co[`${c}-bg`] = cv.bg; co[`${c}-bar`] = cv.bar }
      colors['vix-callout'] = co
    }
  }
  const borderRadius = Object.fromEntries(Object.entries(t.radius).filter(([k]) => k !== 'comment').map(([k, v]) => [`vix-${k}`, val(v)]))
  const spacing = Object.fromEntries(Object.entries(t.spacing).filter(([k]) => k.startsWith('space-')).map(([k, v]) => [k.replace('space-', ''), val(v)]))
  const maxWidth = { 'vix-produto': val(t.layout['container-produto']), 'vix-site': val(t.layout['container-ds-site']) }

  const j = (o) => JSON.stringify(o, null, 2).replace(/"([\w-]+)":/g, "'$1':").replace(/"/g, "'")
  return (
    `// Vixlens DS — Tailwind preset. GERADO por scripts/build-tokens.mjs (fonte: vixlens-tokens.json).\n` +
    `// uso: presets: [require('./vixlens-tailwind-preset.js')]\n` +
    `module.exports = {\n` +
    `  theme: {\n` +
    `    extend: {\n` +
    `      colors: ${j(colors).replace(/\n/g, '\n      ')},\n` +
    `      borderRadius: ${j(borderRadius).replace(/\n/g, '\n      ')},\n` +
    `      spacing: ${j(spacing).replace(/\n/g, '\n      ')},\n` +
    `      maxWidth: ${j(maxWidth).replace(/\n/g, '\n      ')},\n` +
    `      fontFamily: { vix: ['Host Grotesk', 'sans-serif'], 'vix-print': ['Montserrat', 'Mont', 'sans-serif'] },\n` +
    `    },\n` +
    `  },\n` +
    `}\n`
  )
}

const outputs = [
  [CSS_PATH, buildCss()],
  [PRESET_PATH, buildPreset()],
]
const norm = (s) => s.replace(/\r\n/g, '\n')

if (process.argv.includes('--check')) {
  let drift = false
  for (const [path, content] of outputs) {
    const current = norm(readFileSync(path, 'utf8'))
    if (current !== norm(content)) {
      drift = true
      console.error(`✗ DRIFT: ${path.replace(root, '.')} está fora de sync com o JSON. Rode: npm run tokens:build`)
    }
  }
  if (drift) process.exit(1)
  console.log('✓ tokens em sync (CSS + preset batem com o JSON)')
} else {
  for (const [path, content] of outputs) {
    writeFileSync(path, content)
    console.log(`✓ gerado ${path.replace(root, '.')}`)
  }
}
