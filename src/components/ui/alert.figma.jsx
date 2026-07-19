// Code Connect — Vixlens DS · Luma
// Gerado como pré-trabalho. Publica com: npx figma connect publish (requer plano Org/Enterprise).
import figma from "@figma/code-connect"
import { Alert } from "./alert"

figma.connect(Alert, "https://www.figma.com/design/xVXZpMF3PY5khaGElq0Mvz/Vixlens-DS-Luma?node-id=18-3", {
  props: {
    
  },
  example: () => <Alert><AlertTitle>Cadastro em análise</AlertTitle><AlertDescription>Retornamos em 1 dia útil.</AlertDescription></Alert>,
})
