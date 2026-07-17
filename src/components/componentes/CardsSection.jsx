import { Section } from '../Section.jsx'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card.jsx'
import { Button } from '../ui/button.jsx'
import { Eye } from '@phosphor-icons/react'

export default function CardsSection() {
  return (
    <Section
      id="cards"
      eyebrow="12 — Componentes"
      title="Cards"
      desc="Cards de conteúdo com radius Card Large (57px). Composição shadcn/ui (Header, Title, Content, Footer), skin nos tokens Vixlens. Fundo branco ou preto — nunca cinza dominante."
    >
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
        {/* card claro */}
        <Card>
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-vix-input bg-vix-amarelo">
              <Eye size={24} weight="regular" className="text-vix-preto" />
            </div>
            <CardTitle>Tratamento AR Reflecta</CardTitle>
            <CardDescription>
              Reflexo residual mínimo, transparência de qualidade. Cada cor representa um tipo de
              tratamento antirreflexo.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="primaryDark" size="sm">Saiba mais</Button>
            <Button variant="secondary" size="sm">Comparar</Button>
          </CardFooter>
        </Card>

        {/* card escuro */}
        <Card className="border-transparent bg-vix-preto">
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-vix-input bg-white/10">
              <Eye size={24} weight="regular" className="text-vix-amarelo" />
            </div>
            <CardTitle className="text-white">Linha de produto</CardTitle>
            <CardDescription className="text-white/60">
              Freevix, Reflecta, Vix Academy. Card escuro com acento amarelo para as linhas de produto
              do ecossistema.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="primary" size="sm">Ver linha</Button>
            <Button variant="secondaryDark" size="sm">Catálogo</Button>
          </CardFooter>
        </Card>
      </div>
    </Section>
  )
}
