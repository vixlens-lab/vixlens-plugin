#!/usr/bin/env node
/**
 * Valida o frontmatter de todo SKILL.md dos plugins e a coerência das versões.
 *
 * Existe por causa de um bug silencioso: `description:` sem aspas contendo
 * dois-pontos seguido de espaço ("Triggers: ", "Para: ") faz o YAML inteiro
 * falhar. A skill carrega com metadata vazia e nunca dispara por contexto —
 * sem nenhum aviso. Quatro das sete skills ficaram semanas assim.
 *
 * Uso: node scripts/validate-skills.mjs
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { parse } from 'yaml'

const PLUGINS_DIR = 'plugins'
const MARKETPLACE = '.claude-plugin/marketplace.json'

const erros = []
const avisos = []
let skillsOk = 0

function lerJson(caminho) {
  return JSON.parse(readFileSync(caminho, 'utf8'))
}

function validarSkill(pluginNome, skillDir) {
  const caminho = join(skillDir, 'SKILL.md')
  const rel = caminho.replaceAll('\\', '/')

  if (!existsSync(caminho)) {
    erros.push(`${rel}: SKILL.md nao existe`)
    return
  }

  const bruto = readFileSync(caminho, 'utf8').replace(/\r\n/g, '\n')
  const m = bruto.match(/^---\n([\s\S]*?)\n---\n/)
  if (!m) {
    erros.push(`${rel}: sem frontmatter delimitado por ---`)
    return
  }

  let meta
  try {
    meta = parse(m[1])
  } catch (e) {
    erros.push(
      `${rel}: frontmatter nao e YAML valido (${e.message.split('\n')[0]}).\n` +
        `    Quase sempre e dois-pontos+espaco no description. Use um bloco:\n` +
        `      description: >-\n        seu texto aqui`,
    )
    return
  }

  if (!meta || typeof meta !== 'object') {
    erros.push(`${rel}: frontmatter nao virou um objeto`)
    return
  }
  if (!meta.name) erros.push(`${rel}: falta o campo name`)
  if (!meta.description) erros.push(`${rel}: falta o campo description`)

  const pasta = skillDir.split(/[\\/]/).pop()
  if (meta.name && meta.name !== pasta) {
    erros.push(`${rel}: name "${meta.name}" nao bate com a pasta "${pasta}"`)
  }
  if (meta.description && meta.description.length < 40) {
    avisos.push(`${rel}: description com ${meta.description.length} caracteres — curta demais pra disparar bem`)
  }

  // Referencias citadas no corpo precisam existir.
  const corpo = bruto.slice(m[0].length)
  for (const ref of corpo.matchAll(/`(references\/[\w./-]+)`/g)) {
    if (!existsSync(join(skillDir, ref[1]))) {
      erros.push(`${rel}: cita ${ref[1]}, que nao existe`)
    }
  }

  if (!erros.some((e) => e.startsWith(rel))) skillsOk++
}

const plugins = readdirSync(PLUGINS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)

const versoesPlugin = {}

for (const p of plugins) {
  const manifesto = join(PLUGINS_DIR, p, '.claude-plugin', 'plugin.json')
  if (!existsSync(manifesto)) {
    erros.push(`${p}: falta .claude-plugin/plugin.json`)
    continue
  }
  const meta = lerJson(manifesto)
  versoesPlugin[meta.name] = meta.version
  if (meta.name !== p) erros.push(`${p}: plugin.json diz name "${meta.name}"`)

  const skillsDir = join(PLUGINS_DIR, p, 'skills')
  if (!existsSync(skillsDir)) {
    avisos.push(`${p}: sem pasta skills/`)
    continue
  }
  for (const d of readdirSync(skillsDir, { withFileTypes: true })) {
    if (d.isDirectory()) validarSkill(p, join(skillsDir, d.name))
  }
}

// Versao do plugin.json tem que bater com a do marketplace — ja dessincronizou antes.
const mk = lerJson(MARKETPLACE)
for (const entrada of mk.plugins) {
  const noManifesto = versoesPlugin[entrada.name]
  if (!noManifesto) {
    erros.push(`marketplace.json lista "${entrada.name}", que nao existe em plugins/`)
  } else if (noManifesto !== entrada.version) {
    erros.push(
      `versao dessincronizada em "${entrada.name}": marketplace.json diz ${entrada.version}, plugin.json diz ${noManifesto}`,
    )
  }
  if (!String(entrada.source || '').startsWith('./')) {
    erros.push(`"${entrada.name}": source precisa comecar com "./" (o Claude recusa o marketplace inteiro sem isso)`)
  }
}

for (const a of avisos) console.warn(`aviso  ${a}`)

if (erros.length) {
  console.error(`\n${erros.length} erro(s):\n`)
  for (const e of erros) console.error(`  x ${e}`)
  console.error('')
  process.exit(1)
}

console.log(`ok — ${skillsOk} skills validas em ${plugins.length} plugins, versoes coerentes`)
