import { Link } from 'react-router-dom'
import { Botao, ContainerMain } from '../../components'
import { Section } from './Start.style'

function Start(): JSX.Element {
  return(
    <ContainerMain>
      <Section>
        <h1>Welcome!</h1>

        <p>This is a website where you can get knowledge about different films. Log in to access our systems!</p>

        <Link to={'/login'}><Botao>Login</Botao></Link>
      </Section>
    </ContainerMain>
  )
}

export default Start