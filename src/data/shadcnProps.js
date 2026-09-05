/**
 * shadcnProps — documentação das props essenciais de cada componente shadcn/ui
 * mostrado em ShadcnShowcase.jsx. Props reais do Radix/shadcn (não inventadas).
 *
 * Formato:
 *   chave (minúsculo) => {
 *     uso:   'quando usar, em 1 frase',
 *     props: [ { prop, tipo, padrao, desc }, ... ]   // 3–6 essenciais
 *   }
 */
const shadcnProps = {
  switch: {
    uso: 'Ligar/desligar uma única opção com efeito imediato (sem confirmar).',
    props: [
      { prop: 'checked', tipo: 'boolean', padrao: '—', desc: 'Estado controlado (ligado/desligado).' },
      { prop: 'defaultChecked', tipo: 'boolean', padrao: 'false', desc: 'Estado inicial no modo não controlado.' },
      { prop: 'onCheckedChange', tipo: '(checked) => void', padrao: '—', desc: 'Dispara quando o valor muda.' },
      { prop: 'disabled', tipo: 'boolean', padrao: 'false', desc: 'Desabilita a interação.' },
    ],
  },
  checkbox: {
    uso: 'Marcar itens de uma lista ou aceitar um termo (seleção múltipla).',
    props: [
      { prop: 'checked', tipo: "boolean | 'indeterminate'", padrao: '—', desc: 'Estado controlado; aceita indeterminado.' },
      { prop: 'defaultChecked', tipo: 'boolean', padrao: 'false', desc: 'Estado inicial no modo não controlado.' },
      { prop: 'onCheckedChange', tipo: '(checked) => void', padrao: '—', desc: 'Dispara quando marca/desmarca.' },
      { prop: 'disabled', tipo: 'boolean', padrao: 'false', desc: 'Desabilita a interação.' },
    ],
  },
  radio: {
    uso: 'Escolher uma única opção entre poucas alternativas visíveis.',
    props: [
      { prop: 'value', tipo: 'string', padrao: '—', desc: 'RadioGroup: opção selecionada (controlado).' },
      { prop: 'defaultValue', tipo: 'string', padrao: '—', desc: 'RadioGroup: opção inicial (não controlado).' },
      { prop: 'onValueChange', tipo: '(value) => void', padrao: '—', desc: 'RadioGroup: dispara ao trocar a opção.' },
      { prop: 'value (Item)', tipo: 'string', padrao: '—', desc: 'RadioGroupItem: valor único da opção (obrigatório).' },
      { prop: 'disabled', tipo: 'boolean', padrao: 'false', desc: 'Desabilita o grupo ou um item.' },
    ],
  },
  select: {
    uso: 'Escolher uma opção de uma lista longa que abre em dropdown.',
    props: [
      { prop: 'value', tipo: 'string', padrao: '—', desc: 'Valor selecionado (controlado).' },
      { prop: 'defaultValue', tipo: 'string', padrao: '—', desc: 'Valor inicial (não controlado).' },
      { prop: 'onValueChange', tipo: '(value) => void', padrao: '—', desc: 'Dispara ao selecionar um item.' },
      { prop: 'disabled', tipo: 'boolean', padrao: 'false', desc: 'Desabilita o campo inteiro.' },
      { prop: 'value (Item)', tipo: 'string', padrao: '—', desc: 'SelectItem: valor de cada opção (obrigatório).' },
    ],
  },
  slider: {
    uso: 'Ajustar um valor numérico dentro de um intervalo contínuo.',
    props: [
      { prop: 'value', tipo: 'number[]', padrao: '—', desc: 'Valor(es) controlado(s); array mesmo com 1 thumb.' },
      { prop: 'defaultValue', tipo: 'number[]', padrao: '—', desc: 'Valor inicial (não controlado).' },
      { prop: 'onValueChange', tipo: '(value) => void', padrao: '—', desc: 'Dispara ao arrastar; recebe array.' },
      { prop: 'min', tipo: 'number', padrao: '0', desc: 'Valor mínimo do intervalo.' },
      { prop: 'max', tipo: 'number', padrao: '100', desc: 'Valor máximo do intervalo.' },
      { prop: 'step', tipo: 'number', padrao: '1', desc: 'Incremento por passo.' },
    ],
  },
  textarea: {
    uso: 'Capturar texto livre de várias linhas (observações, descrições).',
    props: [
      { prop: 'value', tipo: 'string', padrao: '—', desc: 'Conteúdo controlado do campo.' },
      { prop: 'defaultValue', tipo: 'string', padrao: '—', desc: 'Conteúdo inicial (não controlado).' },
      { prop: 'onChange', tipo: '(e) => void', padrao: '—', desc: 'Dispara a cada digitação.' },
      { prop: 'placeholder', tipo: 'string', padrao: '—', desc: 'Texto de dica quando vazio.' },
      { prop: 'disabled', tipo: 'boolean', padrao: 'false', desc: 'Desabilita a edição.' },
    ],
  },
  badge: {
    uso: 'Rotular status, categoria ou contagem em um selo compacto.',
    props: [
      { prop: 'variant', tipo: "'default' | 'secondary' | 'destructive' | 'outline-solid'", padrao: "'default'", desc: 'Estilo visual do selo.' },
      { prop: 'className', tipo: 'string', padrao: '—', desc: 'Classes extras para ajustes pontuais.' },
      { prop: 'children', tipo: 'ReactNode', padrao: '—', desc: 'Conteúdo (texto ou ícone + texto).' },
    ],
  },
  progress: {
    uso: 'Mostrar o andamento de uma tarefa determinada (0–100%).',
    props: [
      { prop: 'value', tipo: 'number', padrao: '—', desc: 'Percentual atual (0 a max).' },
      { prop: 'max', tipo: 'number', padrao: '100', desc: 'Valor que representa 100%.' },
      { prop: 'className', tipo: 'string', padrao: '—', desc: 'Classes extras (altura, cor).' },
    ],
  },
  avatar: {
    uso: 'Representar um usuário ou marca com imagem ou iniciais.',
    props: [
      { prop: 'src', tipo: 'string', padrao: '—', desc: 'AvatarImage: URL da imagem.' },
      { prop: 'alt', tipo: 'string', padrao: '—', desc: 'AvatarImage: texto alternativo.' },
      { prop: 'delayMs', tipo: 'number', padrao: '—', desc: 'AvatarFallback: espera antes de exibir o fallback.' },
      { prop: 'children', tipo: 'ReactNode', padrao: '—', desc: 'AvatarFallback: iniciais quando não há imagem.' },
    ],
  },
  separator: {
    uso: 'Dividir visualmente grupos de conteúdo ou controles.',
    props: [
      { prop: 'orientation', tipo: "'horizontal' | 'vertical'", padrao: "'horizontal'", desc: 'Direção da linha divisória.' },
      { prop: 'decorative', tipo: 'boolean', padrao: 'true', desc: 'Se puramente visual (oculto para leitores de tela).' },
      { prop: 'className', tipo: 'string', padrao: '—', desc: 'Classes extras (margens, cor).' },
    ],
  },
  alert: {
    uso: 'Comunicar um aviso ou informação contextual dentro da página.',
    props: [
      { prop: 'variant', tipo: "'default' | 'destructive'", padrao: "'default'", desc: 'Tom do alerta (neutro ou de erro).' },
      { prop: 'className', tipo: 'string', padrao: '—', desc: 'Classes extras.' },
      { prop: 'AlertTitle', tipo: 'componente', padrao: '—', desc: 'Título curto do alerta.' },
      { prop: 'AlertDescription', tipo: 'componente', padrao: '—', desc: 'Texto de detalhe do alerta.' },
    ],
  },
  dialog: {
    uso: 'Interromper o fluxo para confirmar ação ou coletar dados focados.',
    props: [
      { prop: 'open', tipo: 'boolean', padrao: '—', desc: 'Abertura controlada do modal.' },
      { prop: 'defaultOpen', tipo: 'boolean', padrao: 'false', desc: 'Estado inicial (não controlado).' },
      { prop: 'onOpenChange', tipo: '(open) => void', padrao: '—', desc: 'Dispara ao abrir/fechar.' },
      { prop: 'modal', tipo: 'boolean', padrao: 'true', desc: 'Bloqueia interação com o resto da tela.' },
    ],
  },
  popover: {
    uso: 'Exibir conteúdo flutuante rico ancorado a um gatilho, sem sair da tela.',
    props: [
      { prop: 'open', tipo: 'boolean', padrao: '—', desc: 'Root: abertura controlada.' },
      { prop: 'onOpenChange', tipo: '(open) => void', padrao: '—', desc: 'Root: dispara ao abrir/fechar.' },
      { prop: 'align', tipo: "'start' | 'center' | 'end'", padrao: "'center'", desc: 'Content: alinhamento ao gatilho.' },
      { prop: 'side', tipo: "'top' | 'right' | 'bottom' | 'left'", padrao: "'bottom'", desc: 'Content: lado onde aparece.' },
      { prop: 'sideOffset', tipo: 'number', padrao: '4', desc: 'Content: distância do gatilho.' },
    ],
  },
  tooltip: {
    uso: 'Dar uma dica curta ao passar o mouse sobre um elemento.',
    props: [
      { prop: 'open', tipo: 'boolean', padrao: '—', desc: 'Root: abertura controlada.' },
      { prop: 'onOpenChange', tipo: '(open) => void', padrao: '—', desc: 'Root: dispara ao mostrar/ocultar.' },
      { prop: 'delayDuration', tipo: 'number', padrao: '700', desc: 'Provider/Root: espera (ms) antes de aparecer.' },
      { prop: 'side', tipo: "'top' | 'right' | 'bottom' | 'left'", padrao: "'top'", desc: 'Content: lado onde aparece.' },
      { prop: 'sideOffset', tipo: 'number', padrao: '4', desc: 'Content: distância do gatilho.' },
    ],
  },
  tabs: {
    uso: 'Alternar entre seções de conteúdo no mesmo espaço.',
    props: [
      { prop: 'defaultValue', tipo: 'string', padrao: '—', desc: 'Aba ativa inicial (não controlado).' },
      { prop: 'value', tipo: 'string', padrao: '—', desc: 'Aba ativa (controlado).' },
      { prop: 'onValueChange', tipo: '(value) => void', padrao: '—', desc: 'Dispara ao trocar de aba.' },
      { prop: 'orientation', tipo: "'horizontal' | 'vertical'", padrao: "'horizontal'", desc: 'Direção da lista de abas.' },
      { prop: 'value (Trigger/Content)', tipo: 'string', padrao: '—', desc: 'Liga cada TabsTrigger ao seu TabsContent.' },
    ],
  },
  accordion: {
    uso: 'Empilhar seções expansíveis para economizar espaço vertical.',
    props: [
      { prop: 'type', tipo: "'single' | 'multiple'", padrao: '—', desc: 'Uma seção aberta por vez ou várias.' },
      { prop: 'collapsible', tipo: 'boolean', padrao: 'false', desc: "Permite fechar tudo (só com type='single')." },
      { prop: 'defaultValue', tipo: 'string | string[]', padrao: '—', desc: 'Item(ns) aberto(s) inicialmente.' },
      { prop: 'onValueChange', tipo: '(value) => void', padrao: '—', desc: 'Dispara ao abrir/fechar itens.' },
      { prop: 'value (Item)', tipo: 'string', padrao: '—', desc: 'AccordionItem: identificador único (obrigatório).' },
    ],
  },
  table: {
    uso: 'Apresentar dados tabulares; monte por composição das subpartes.',
    props: [
      { prop: 'TableHeader', tipo: 'componente', padrao: '—', desc: 'Cabeçalho da tabela (linha de títulos).' },
      { prop: 'TableBody', tipo: 'componente', padrao: '—', desc: 'Corpo com as linhas de dados.' },
      { prop: 'TableRow', tipo: 'componente', padrao: '—', desc: 'Uma linha; hover e data-[state=selected].' },
      { prop: 'TableHead', tipo: 'componente', padrao: '—', desc: 'Célula de cabeçalho (título de coluna).' },
      { prop: 'TableCell', tipo: 'componente', padrao: '—', desc: 'Célula de dado.' },
      { prop: 'className', tipo: 'string', padrao: '—', desc: 'Classes extras em qualquer subparte.' },
    ],
  },
}

export default shadcnProps
