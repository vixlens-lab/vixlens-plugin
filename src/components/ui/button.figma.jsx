// Code Connect — Vixlens DS · Luma
// Gerado como pré-trabalho. Publica com: npx figma connect publish (requer plano Org/Enterprise).
import figma from "@figma/code-connect"
import { Button } from "./button"

figma.connect(Button, "https://www.figma.com/design/xVXZpMF3PY5khaGElq0Mvz/Vixlens-DS-Luma?node-id=13-15", {
  props: {
    variant: figma.enum("Variant", { Default: "default", Dark: "dark", Secondary: "secondary", Outline: "outline-solid", Ghost: "ghost", Destructive: "destructive" }),
  },
  example: (props) => <Button variant={props.variant}>Ação</Button>,
})
