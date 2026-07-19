// Code Connect — Vixlens DS · Luma
// Gerado como pré-trabalho. Publica com: npx figma connect publish (requer plano Org/Enterprise).
import figma from "@figma/code-connect"
import { Input } from "./input"

figma.connect(Input, "https://www.figma.com/design/xVXZpMF3PY5khaGElq0Mvz/Vixlens-DS-Luma?node-id=15-9", {
  props: {
    disabled: figma.enum("State", { Default: false, Focus: false, Disabled: true }),
  },
  example: (props) => <Input placeholder="Ex: Ótica Vixlens" disabled={props.disabled} />,
})
