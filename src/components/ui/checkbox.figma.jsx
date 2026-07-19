// Code Connect — Vixlens DS · Luma
// Gerado como pré-trabalho. Publica com: npx figma connect publish (requer plano Org/Enterprise).
import figma from "@figma/code-connect"
import { Checkbox } from "./checkbox"

figma.connect(Checkbox, "https://www.figma.com/design/xVXZpMF3PY5khaGElq0Mvz/Vixlens-DS-Luma?node-id=17-11", {
  props: {
    checked: figma.enum("State", { Checked: true, Unchecked: false }),
  },
  example: (props) => <Checkbox checked={props.checked} />,
})
