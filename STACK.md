# Stack Vixlens

Critérios para escolher tecnologia num projeto Vixlens. Existe para que a
decisão seja consultada, não relembrada.

A regra geral: **o que não está listado como escolha, não é escolha.** Divergir
é permitido, mas exige motivo escrito no README do projeto — divergência
examinada é arquitetura, divergência esquecida é bagunça.

---

## 1. O que não se decide por projeto

| | | Por quê |
|---|---|---|
| **Design System** | `vixlens-ds` como dependência | Componente copiado diverge do sistema na primeira mudança de token. O build cobra: `npm run ds:check`. |
| **Tailwind** | herdado do DS, nunca configurado à mão | O DS gera o preset (v3) e o `@theme` (v4) do mesmo `vixlens-tokens.json`. Configurar na tela recria o espelho manual que isto veio matar. |
| **React** | 19 | |
| **TypeScript** | sim | |
| **Deploy** | Vercel | |
| **Identidade de commit** | `vixlens-lab-bot` | A Vercel recusa deploy de autor sem conta linkada. Garantido pelo `includeIf` em `~/.gitconfig` casando `C:/vixlens/`. |

---

## 2. A única escolha real: Next ou Vite

Não force um framework só. São problemas diferentes, e fingir o contrário
custa mais que assumir os dois.

**Use Next 16 se a resposta for sim para qualquer uma:**

1. A tela guarda segredo? (token de API, chave, credencial que não pode chegar ao browser)
2. Precisa ser indexada pelo Google?
3. Precisa ler dado no servidor antes de renderizar?

**Três "não" → Vite.** E use Vite também quando for PWA offline-first: service
worker e cache em Next dá mais trabalho do que entrega.

**Next é o padrão para tela de produto.** Vite é a exceção com motivo escrito.

### Como está hoje

| Projeto | Framework | Por quê |
|---|---|---|
| `funil-investimento` | Next | Token de Meta Ads e Pipedrive lido só no servidor |
| `flow/dashboards` | Next | Lê dado do pipeline do flow |
| `site_vixlens` | Next | SEO |
| site do `vixlens-ds` | Vite | Página de documentação, sem servidor |
| `skills-hub` | Vite | Idem |
| `briefing` | Vite | Formulário de cliente — **revisar**: se passar a gravar resposta, vira Next |

---

## 3. Versão: linha de base, não última sempre

"Sempre na última" com sete projetos vira sete migrações por ano e um dia em
que o DS sobe uma major e quatro telas quebram sem ninguém ter pedido.

- **Patch e minor** — automático, sem cerimônia.
- **Major** — decisão. **O DS vai primeiro, as telas atrás, na mesma janela.**
  Ninguém sobe major sozinho: tela à frente do DS não tem o que consumir.

O DS pode servir duas majors de Tailwind ao mesmo tempo (é o que faz hoje, v3
e v4 do mesmo JSON). Isso existe para que a migração seja planejável, não para
virar estado permanente.

---

## 4. Repositório novo ou pasta?

Padrão: **tela nova é pasta em `vixlens-apps/apps/`.** Repositório novo custa
CI, `.gitignore`, deploy, permissão e mais um lugar para esquecer de dar push.

Abra repositório próprio só se valer uma destas:

- Tem ciclo de release próprio e é **consumido como dependência** por outros (é o caso do `vixlens-ds`)
- É **público** e o resto não é
- Tem dono ou permissão diferente do time

A Vercel deploya subpasta de monorepo nativamente: um projeto por tela
apontando o Root Directory. URL própria não exige repositório próprio.

---

## 5. O que nunca entra no Git

Credencial. Sem exceção por ser repositório privado — privado tem
colaborador, e histórico do Git é permanente.

- Chave de service account, `.env`, recovery code de 2FA → gerenciador de senha ou Doppler
- Máquina nova gera **chave nova**, não copia a da anterior
- Dado pessoal de cliente ou prospect: pense duas vezes. Entrou no histórico, sair exige reescrever a história do repositório.

---

## 6. Dívida conhecida

Registrada porque dívida não escrita vira surpresa:

- **DS em Tailwind 3** enquanto o padrão é 4. É o gargalo — tudo depende dele, então é a primeira migração da fila.
- **DS em `.jsx`, sem tipos.** As telas são TypeScript e consomem 142 exports sem autocomplete nem checagem.
- **`briefing` em React 18 e Vite**, fora do padrão nos dois eixos.
- **`site_vixlens` em Next 14**, duas majors atrás.
- **`npm run dev` do DS não monta** — um `.json` é servido como `application/json` onde deveria vir módulo JS. O `build` funciona, então a Vercel não é afetada.
