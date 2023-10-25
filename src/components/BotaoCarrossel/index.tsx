
import styles from './BotaoCarrossel.module.css'
import { ReactNode } from 'react'
 

interface BotaoCarrosselProps {
  children: ReactNode
  onClick: any
  larguraDaTela: number
}
function BotaoCarrossel( {children, onClick, larguraDaTela}: BotaoCarrosselProps ): JSX.Element  {
  const estilo = larguraDaTela <= 984 ?  styles.botaoOff : styles.botaoCarrossel

  return (
    <button className={estilo} onClick={onClick}>{children}</button>
    
    
  )
}

export default BotaoCarrossel