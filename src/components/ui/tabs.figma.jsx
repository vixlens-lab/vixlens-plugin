// Code Connect — Vixlens DS · Luma
// Gerado como pré-trabalho. Publica com: npx figma connect publish (requer plano Org/Enterprise).
import figma from "@figma/code-connect"
import { Tabs } from "./tabs"

figma.connect(Tabs, "https://www.figma.com/design/xVXZpMF3PY5khaGElq0Mvz/Vixlens-DS-Luma?node-id=17-21", {
  props: {
    
  },
  example: () => <Tabs defaultValue="a"><TabsList><TabsTrigger value="a">Cooking</TabsTrigger></TabsList></Tabs>,
})
