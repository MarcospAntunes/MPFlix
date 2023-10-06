
import styled from 'styled-components'
import { FaLessThan } from 'react-icons/fa'
import { FaGreaterThan } from 'react-icons/fa6'

const BotaoCarrosselStyled = styled.button`
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 8px;
    margin-right: 20px;
    color: #bf4343;
    background-color: #353535;
    cursor: pointer;
` 

function BotaoCarrossel() {
  return (
    <>
        <BotaoCarrosselStyled><FaLessThan/></BotaoCarrosselStyled>
        <BotaoCarrosselStyled><FaGreaterThan/></BotaoCarrosselStyled>
    </>
    
  )
}

export default BotaoCarrossel