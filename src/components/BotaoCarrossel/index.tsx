import { ReactNode } from 'react'
import { ButtonCarrossel, ButtonCarrosselOff } from './BotaoCarrossel.style'
 

interface BotaoCarrosselProps {
  children: ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  larguraDaTela: number
}
function BotaoCarrossel( {children, onClick, larguraDaTela}: BotaoCarrosselProps ): JSX.Element  {
  const estilo = larguraDaTela <= 984 ?  <ButtonCarrosselOff /> : <ButtonCarrossel onClick={onClick}>{children}</ButtonCarrossel>

  return (
    estilo
  )
}

export default BotaoCarrossel