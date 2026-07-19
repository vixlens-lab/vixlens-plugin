// Code Connect — Vixlens DS · Luma
// Gerado como pré-trabalho. Publica com: npx figma connect publish (requer plano Org/Enterprise).
import figma from "@figma/code-connect"
import { Switch } from "./switch"

figma.connect(Switch, "https://www.figma.com/design/xVXZpMF3PY5khaGElq0Mvz/Vixlens-DS-Luma?node-id=17-7", {
  props: {
    checked: figma.enum("State", { On: true, Off: false }),
  },
  example: (props) => <Switch checked={props.checked} />,
})
