import { ReactNode } from "react";

interface BotaoCarrosselProps {
  children: ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  larguraDaTela: number
}

export default BotaoCarrosselProps;