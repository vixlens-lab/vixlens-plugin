// Construtor de página de família — cole em use_figma.
// Ajuste CONFIG e DADOS. O resto é fixo.
//
// DADOS: uma linha por registro, campos separados por ~
//   produto: cod~indice~nome~diam~esfMais~esfMenos~p1~p2~p3~p4[~altura]
//   cores:   SUB~codigo Cor | codigo Cor | ...
//
// O 11o campo, altura, é obrigatório quando CONFIG.altura === 'varia' e
// ignorado nos outros casos. Ver "Altura" em referencia-tabela.md.
// Campo de preço vazio vira travessão. Cod vazio vira seta quando houver linha
// de cores logo abaixo.

const CONFIG = {
  pagina: '04 Freevix Premium',
  familia: 'FREEVIX PREMIUM',
  tipo: 'LENTES MULTIFOCAIS SURFAÇADAS',
  cor: '#D94F2B',
  altura: '16 mm',
  cilindro: '-6.00',
  adicao: '0.50 a 5.00',
  alturaImagem: 120
};

const DADOS = `0027~1.49~Resina~80~+6~-10~R$ 1.075,50~R$ 1.300,50~R$ 1.458,00~R$ 1.971,00
SUB~0029 Cinza | 0681 Marrom`;

// ---------------------------------------------------------------- utilidades

const LS = String.fromCharCode(8232);
const rgb = h => ({ r: parseInt(h.slice(1, 3), 16) / 255, g: parseInt(h.slice(3, 5), 16) / 255, b: parseInt(h.slice(5, 7), 16) / 255 });
const fill = h => [{ type: 'SOLID', color: rgb(h) }];
const lum = h => { const c = rgb(h); return 0.299 * c.r + 0.587 * c.g + 0.114 * c.b; };
const contraste = h => (lum(h) > 0.6 ? '#000000' : '#FFFFFF');
const dec = s => {
  const neg = s.indexOf('-') > -1 || s.indexOf('−') > -1;
  const n = parseFloat(s.replace('−', '').replace('-', '').replace('+', ''));
  return (neg ? '-' : '+') + n.toFixed(2);
};

const CORES = {
  'Cinza': ['#6C6C6C', 'C'], 'Marrom': ['#69401C', 'M'], 'Verde': ['#3B5424', 'V'],
  'Ametista': ['#54317B', 'A'], 'Safira': ['#1C5A95', 'S'], 'Âmbar': ['#754D17', 'Â'],
  'Esmeralda': ['#106943', 'E'], 'Rubi': ['#711533', 'R'], 'G15': ['#3F4A3C', 'G'],
  'Black': ['#1A1A1A', 'B'],
  'Prata': ['#9EADB0', 'REP'], 'Dourado': ['#BDB024', 'RED'],
  'Azul': ['#0538D9', 'REA'], 'Rosa': ['#FFA1FF', 'RER']
};
const ESPELHADO = ['Prata', 'Dourado', 'Azul', 'Rosa'];

const W = [24, 26, 136, 122];
const PW = 45;
const TITULOS = [['Sem', 'tratamento'], ['Reflecta', 'Express'], ['Reflecta', 'Guard'], ['Reflecta', 'Blue Protect']];

// ---------------------------------------------------------------- construção

for (const s of ['Regular', 'Medium', 'Bold', 'ExtraBold']) {
  await figma.loadFontAsync({ family: 'Host Grotesk', style: s });
}

const page = figma.currentPage.children.find(n => n.type === 'FRAME' && n.name === CONFIG.pagina);
if (!page) throw new Error('pagina nao encontrada: ' + CONFIG.pagina);
for (const c of page.children.slice()) {
  if (c.type === 'FRAME' && (c.name === 'Header' || c.name.indexOf('Tabela') === 0 || c.name.indexOf('IMG // ') === 0)) c.remove();
}

const corTitulo = contraste(CONFIG.cor);

const hdr = figma.createAutoLayout('VERTICAL', { name: 'Header' });
hdr.fills = fill(CONFIG.cor); hdr.cornerRadius = 20;
hdr.paddingTop = 12; hdr.paddingBottom = 12; hdr.paddingLeft = 16; hdr.paddingRight = 16; hdr.itemSpacing = 2;
page.appendChild(hdr);
hdr.x = 10; hdr.y = 44; hdr.resize(575, hdr.height); hdr.layoutSizingHorizontal = 'FIXED';

const linhaTitulo = figma.createAutoLayout('HORIZONTAL', { name: 'titulo' });
linhaTitulo.itemSpacing = 10; linhaTitulo.counterAxisAlignItems = 'CENTER'; linhaTitulo.fills = [];
hdr.appendChild(linhaTitulo);
const texto = (parent, chars, style, size, cor) => {
  const t = figma.createText();
  t.fontName = { family: 'Host Grotesk', style };
  t.fontSize = size; t.characters = chars; t.fills = fill(cor);
  parent.appendChild(t);
  return t;
};
texto(linhaTitulo, CONFIG.familia, 'ExtraBold', 22, corTitulo);
// altura: 'NN mm' = igual na família inteira, vale a pílula.
//         'varia'  = cada linha traz a sua, a pílula só avisa.
//         null     = visão simples, não tem altura de montagem.
if (CONFIG.altura) {
  const pilula = figma.createAutoLayout('HORIZONTAL', { name: 'altura' });
  pilula.fills = fill('#000000'); pilula.cornerRadius = 100;
  pilula.paddingTop = 4; pilula.paddingBottom = 4; pilula.paddingLeft = 10; pilula.paddingRight = 10;
  linhaTitulo.appendChild(pilula);
  const rotulo = CONFIG.altura === 'varia' ? 'Alt. mín. varia por lente' : 'Alt. mín. ' + CONFIG.altura;
  texto(pilula, rotulo, 'Bold', 9, '#FFFFFF');
}
texto(hdr, CONFIG.tipo + '  //  MARCA PRÓPRIA VIXLENS', 'Medium', 8, corTitulo);

// alturaImagem: 0 = família densa, sem slot de foto (ver referencia-tabela.md)
let img = null, legendaImg = null;
if (CONFIG.alturaImagem > 0) {
  img = figma.createFrame();
  img.name = 'IMG // ' + CONFIG.familia;
  img.resize(575, CONFIG.alturaImagem);
  img.fills = fill('#F0F0F0'); img.strokes = fill('#6C6C6C'); img.strokeWeight = 1;
  img.dashPattern = [4, 4]; img.cornerRadius = 12;
  page.appendChild(img); img.x = 10; img.y = hdr.y + hdr.height + 14;
  legendaImg = texto(img, '[ IMAGEM FAMÍLIA ]', 'Bold', 9, '#6C6C6C');
  legendaImg.x = (575 - legendaImg.width) / 2;
  legendaImg.y = (CONFIG.alturaImagem - legendaImg.height) / 2;
}

const tbl = figma.createAutoLayout('VERTICAL', { name: 'Tabela ' + CONFIG.familia });
tbl.fills = fill(CONFIG.cor); tbl.cornerRadius = 20;
tbl.paddingTop = 8; tbl.paddingBottom = 6; tbl.paddingLeft = 10; tbl.paddingRight = 10; tbl.itemSpacing = 0;
page.appendChild(tbl);
tbl.x = 10;
tbl.y = img ? img.y + img.height + 14 : hdr.y + hdr.height + 16;
tbl.resize(575, tbl.height); tbl.layoutSizingHorizontal = 'FIXED';

const celula = (parent, chars, w, o) => {
  o = o || {};
  const t = figma.createText();
  t.fontName = { family: 'Host Grotesk', style: o.style || 'Regular' };
  t.fontSize = o.size || 8;
  t.characters = chars && chars.length ? chars : '—';
  t.fills = fill(o.cor || '#000000');
  t.letterSpacing = { unit: 'PERCENT', value: o.ls === undefined ? -4 : o.ls };
  parent.appendChild(t);
  t.textAutoResize = 'NONE'; t.textTruncation = 'ENDING';
  t.resize(w, o.h || 11);
  if (o.alinha) t.textAlignHorizontal = o.alinha;
  return t;
};

const linha = (bg, pad) => {
  const r = figma.createAutoLayout('HORIZONTAL', { name: 'row' });
  r.itemSpacing = 5; r.paddingTop = pad; r.paddingBottom = pad; r.paddingLeft = 8; r.paddingRight = 8;
  r.cornerRadius = 30; r.fills = fill(bg); r.counterAxisAlignItems = 'CENTER';
  tbl.appendChild(r); r.layoutSizingHorizontal = 'FILL';
  return r;
};

const grupoValores = parent => {
  const g = figma.createAutoLayout('HORIZONTAL', { name: 'valores' });
  g.itemSpacing = 10; g.fills = []; g.counterAxisAlignItems = 'CENTER';
  parent.appendChild(g);
  return g;
};

const bolinha = (parent, nome, codigo, grande) => {
  const par = CORES[nome] || ['#6C6C6C', nome.charAt(0).toUpperCase()];
  const chip = figma.createAutoLayout('HORIZONTAL', { name: 'cor ' + nome });
  chip.itemSpacing = grande ? 3 : 2; chip.counterAxisAlignItems = 'CENTER'; chip.fills = [];
  parent.appendChild(chip);
  const d = grande ? 14 : 10;
  const dot = figma.createFrame();
  dot.name = nome; dot.resize(d, d); dot.cornerRadius = 100;
  dot.fills = fill(par[0]); dot.strokes = [];
  chip.appendChild(dot);
  const sigla = figma.createText();
  sigla.fontName = { family: 'Host Grotesk', style: 'Bold' };
  sigla.fontSize = grande ? 4.5 : 5;
  sigla.characters = grande ? par[1] : par[1].charAt(0);
  sigla.fills = fill(contraste(par[0]));
  sigla.letterSpacing = { unit: 'PERCENT', value: -4 };
  dot.appendChild(sigla);
  sigla.x = (d - sigla.width) / 2; sigla.y = (d - sigla.height) / 2;
  texto(chip, codigo, 'Regular', grande ? 7.5 : 6, '#000000');
};

const chipIndice = (parent, ind) => {
  const c = figma.createFrame();
  c.name = 'ind ' + ind; c.resize(26, 13); c.cornerRadius = 4;
  c.fills = fill(CONFIG.cor); c.strokes = [];
  parent.appendChild(c);
  const t = texto(c, ind, 'Bold', 6.5, contraste(CONFIG.cor));
  t.letterSpacing = { unit: 'PERCENT', value: -2 };
  t.x = (26 - t.width) / 2; t.y = (13 - t.height) / 2;
};

const cab = linha('#000000', 3);
['Cód', 'Índ.', 'Produto', 'Disponibilidade'].forEach((h, i) => {
  celula(cab, h, W[i], { style: 'Bold', cor: '#FFFFFF', ls: 0, size: i === 3 ? 7 : 8 });
});
const cabValores = grupoValores(cab);
for (const [a, b] of TITULOS) {
  const t = figma.createText();
  t.fontName = { family: 'Host Grotesk', style: 'Bold' };
  t.fontSize = 6.5; t.characters = a + LS + b; t.fills = fill('#FFFFFF');
  t.letterSpacing = { unit: 'PERCENT', value: 0 };
  cabValores.appendChild(t);
  t.textAutoResize = 'NONE'; t.textAlignHorizontal = 'RIGHT'; t.resize(PW, 16);
}

const registros = DADOS.trim().split('\n').map(l => l.split('~'));
let zebra = 0, ultimoProduto = null, ultimaCelulaCod = null, inline = 0, linhasCor = 0;

registros.forEach((d, i) => {
  if (d[0] === 'SUB') {
    const itens = d[1].split('|')
      .map(s => s.trim().match(/^(\S+)\s+(.+)$/))
      .filter(Boolean);
    if (itens.length === 1 && ultimoProduto) {
      bolinha(ultimoProduto, itens[0][2], itens[0][1], false);
      inline++;
      return;
    }
    if (ultimaCelulaCod && ultimaCelulaCod.characters === '—') {
      ultimaCelulaCod.characters = '↓';
      ultimaCelulaCod.textAlignHorizontal = 'CENTER';
    }
    const r = linha('#FAFAFA', 4);
    r.name = 'subrow';
    const esp = itens.some(m => ESPELHADO.indexOf(m[2]) > -1);
    const wrap = figma.createAutoLayout('HORIZONTAL', { name: 'cores' });
    wrap.itemSpacing = esp ? 10 : 6; wrap.counterAxisAlignItems = 'CENTER'; wrap.fills = [];
    r.appendChild(wrap);
    if (esp) texto(wrap, 'COD:', 'Bold', 7, '#4A4A4A');
    for (const m of itens) bolinha(wrap, m[2], m[1], esp);
    linhasCor++;
    return;
  }

  const r = linha(zebra++ % 2 === 0 ? '#FAFAFA' : '#F0F0F0', 3);
  ultimaCelulaCod = celula(r, d[0], W[0], { alinha: d[0] ? 'LEFT' : 'CENTER' });
  chipIndice(r, d[1]);

  const prod = figma.createAutoLayout('HORIZONTAL', { name: 'produto' });
  prod.itemSpacing = 5; prod.counterAxisAlignItems = 'CENTER'; prod.fills = [];
  r.appendChild(prod);
  prod.resize(W[2], prod.height); prod.layoutSizingHorizontal = 'FIXED';
  const nome = texto(prod, d[2], 'Regular', 8, '#000000');
  nome.letterSpacing = { unit: 'PERCENT', value: -4 };
  ultimoProduto = prod;

  // Visão simples não tem adição: a segunda linha fica só com o diâmetro.
  let l2 = (CONFIG.adicao ? 'Add. ' + CONFIG.adicao + ' | ' : '') + 'Diâm. ' + d[3] + 'mm';
  // Família com alturas diferentes: a altura é dado de linha, em toda linha.
  if (CONFIG.altura === 'varia') {
    if (!d[10]) throw new Error('altura varia na familia mas a linha nao traz a dela: ' + d[0] + ' ' + d[2]);
    l2 += ' | Alt. ' + d[10];
  }
  const disp = 'Esf. ' + dec(d[4]) + ' a ' + dec(d[5]) + ' | Cil. até ' + CONFIG.cilindro + LS + l2;
  celula(r, disp, W[3], { size: 6, h: 16, cor: '#4A4A4A' });

  const g = grupoValores(r);
  [d[6], d[7], d[8], d[9]].forEach(v => {
    celula(g, v, PW, { alinha: v && v.length ? 'RIGHT' : 'CENTER' });
  });
});

// Encaixe: encolhe o slot de imagem até a tabela liberar o rodapé.
let fim = tbl.y + tbl.height;
if (img && fim > 796) {
  const nova = Math.max(56, CONFIG.alturaImagem - Math.ceil(fim - 796));
  img.resize(575, nova);
  legendaImg.y = (nova - legendaImg.height) / 2;
  tbl.y = img.y + nova + 14;
  fim = tbl.y + tbl.height;
}

// Se ainda estourar, a família não comporta foto. Não encolha a tipografia:
// rode de novo com alturaImagem: 0, ou quebre em duas páginas.
return {
  criados: img ? [hdr.id, img.id, tbl.id] : [hdr.id, tbl.id],
  produtos: zebra,
  linhasDeCor: linhasCor,
  bolinhasInline: inline,
  alturaImagem: img ? Math.round(img.height) : 0,
  fimDaTabela: Math.round(fim),
  cabeNoRodape: fim <= 796,
  aviso: fim > 796 ? 'ESTOUROU o rodapé. Reportar ao usuário e rodar com alturaImagem: 0.' : null
};
