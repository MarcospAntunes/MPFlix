
import styles from './BotaoCarrossel.module.css'
import { ReactNode } from 'react'
 

interface BotaoCarrosselProps {
  children: ReactNode
  onClick: any
}
function BotaoCarrossel( {children, onClick}: BotaoCarrosselProps )  {
  

  return (
    <button className={styles.botaoCarrossel} onClick={onClick}>{children}</button>
    
    
  )
}

export default BotaoCarrossel