// Code Connect — Vixlens DS · Luma
// Gerado como pré-trabalho. Publica com: npx figma connect publish (requer plano Org/Enterprise).
import figma from "@figma/code-connect"
import { Badge } from "./badge"

figma.connect(Badge, "https://www.figma.com/design/xVXZpMF3PY5khaGElq0Mvz/Vixlens-DS-Luma?node-id=16-17", {
  props: {
    variant: figma.enum("Variant", { Default: "default", Secondary: "secondary", Outline: "outline-solid", Destructive: "destructive" }),
  },
  example: (props) => <Badge variant={props.variant}>Novo</Badge>,
})
