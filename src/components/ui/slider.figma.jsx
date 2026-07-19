// Code Connect — Vixlens DS · Luma
// Gerado como pré-trabalho. Publica com: npx figma connect publish (requer plano Org/Enterprise).
import figma from "@figma/code-connect"
import { Slider } from "./slider"

figma.connect(Slider, "https://www.figma.com/design/xVXZpMF3PY5khaGElq0Mvz/Vixlens-DS-Luma?node-id=17-29", {
  props: {
    
  },
  example: () => <Slider defaultValue={[50]} max={100} />,
})
