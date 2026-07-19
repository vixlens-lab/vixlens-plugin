import { ArrowSquareOut, GitBranch, Package, Tag } from '@phosphor-icons/react'
import { Section, SubTitle } from '../Section.jsx'
import { CodeBlock } from '../Copy.jsx'

const REPO = 'https://github.com/vixlenslab/vixlens-ds'

function Rule({ Icon, title, children }) {
  return (
    <div className="flex items-start gap-3 rounded-vix-input border border-gray-200 p-5">
      <Icon size={20} weight="bold" className="mt-0.5 shrink-0 text-vix-azul" />
      <div>
        <div className="text-[14px] font-bold text-vix-preto">{title}</div>
        <div className="mt-0.5 text-[13px] leading-relaxed text-gray-500">{children}</div>
      </div>
    </div>
  )
}

export default function ContribuirSection() {
  return (
    <Section
      id="contribuir"
      eyebrow="— Sobre o sistema"
      title="Contribuir"
      desc="Como propor e aplicar mudanças no DS. A fonte única de token é o JSON — o resto é gerado, e o CI garante que não saia de sync."
    >
      <SubTitle>Mudar um token</SubTitle>
      <p className="-mt-2 mb-4 max-w-2xl text-[13px] leading-relaxed text-gray-500">
        Cor, raio, espaçamento e tipografia saem de <b className="text-vix-preto">vixlens-tokens.json</b>. Os
        arquivos <span className="font-mono text-[12px]">.css</span> e o preset Tailwind são gerados — nunca edite na
        mão (o <span className="font-mono text-[12px]">tokens:check</span> barra).
      </p>
      <CodeBlock
        code={`# 1. edite a fonte
assets/tokens/vixlens-tokens.json

# 2. regenere os exports (CSS + preset)
npm run tokens:build

# 3. confira o sync (o CI roda isso também)
npm run tokens:check`}
      />

      <SubTitle className="mt-12">Regras</SubTitle>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Rule Icon={GitBranch} title="Tudo por PR">
          <span className="font-mono text-[12px]">main</span> faz deploy automático. O CI roda a guarda de drift +
          build — PR não passa se algo estiver fora de sync. Deploy sempre com autor{' '}
          <span className="font-mono text-[12px]">vixlens-lab-bot</span>.
        </Rule>
        <Rule Icon={Package} title="Novo componente">
          Base é o preset shadcn luma. Crie a seção, documente com Props + Do/Don't + snippet, e registre em{' '}
          <span className="font-mono text-[12px]">App.jsx</span> e <span className="font-mono text-[12px]">nav.js</span>.
        </Rule>
        <Rule Icon={Tag} title="Versionamento (SemVer)">
          MAJOR quebra · MINOR adiciona · PATCH corrige. Bump em nav + rodapé + package.json, entrada no{' '}
          <a href="#changelog" className="font-semibold text-vix-azul hover:underline">Changelog</a>, e tag{' '}
          <span className="font-mono text-[12px]">vX.Y.Z</span>.
        </Rule>
        <Rule Icon={GitBranch} title="Mudança grande = RFC">
          Novo token, novo componente ou quebra: abra uma issue curta antes pra alinhar. Fix pequeno: PR direto.
        </Rule>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <a
          href={`${REPO}/blob/main/CONTRIBUTING.md`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-vix-button bg-vix-preto px-4 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#333333]"
        >
          <ArrowSquareOut size={15} weight="bold" /> Guia completo (CONTRIBUTING.md)
        </a>
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-vix-button border border-gray-200 px-4 py-2.5 text-[13px] font-bold text-vix-preto transition-colors hover:bg-gray-50"
        >
          <ArrowSquareOut size={15} weight="bold" /> Repositório
        </a>
      </div>
    </Section>
  )
}
