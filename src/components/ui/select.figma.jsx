// Code Connect — Vixlens DS · Luma
// Gerado como pré-trabalho. Publica com: npx figma connect publish (requer plano Org/Enterprise).
import figma from "@figma/code-connect"
import { Select } from "./select"

figma.connect(Select, "https://www.figma.com/design/xVXZpMF3PY5khaGElq0Mvz/Vixlens-DS-Luma?node-id=17-17", {
  props: {
    
  },
  example: () => <Select><SelectTrigger><SelectValue placeholder="Escolha uma lente" /></SelectTrigger></Select>,
})
