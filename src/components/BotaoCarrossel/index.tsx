import { ButtonCarrossel, ButtonCarrosselOff } from './BotaoCarrossel.style'
import BotaoCarrosselProps from './BotaoCarrosselProps.type'
 
function BotaoCarrossel({ children, onClick, larguraDaTela }: BotaoCarrosselProps): JSX.Element  {
  const estilo = larguraDaTela <= 984 ?  <ButtonCarrosselOff /> : <ButtonCarrossel onClick={onClick}>{children}</ButtonCarrossel>

  return (
    estilo
  )
}

export default BotaoCarrossel