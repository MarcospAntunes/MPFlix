import { Link } from 'react-router-dom'
import { Botao } from '../../components/Botao'
import { ContainerMain } from '../../components/Containers/ContainerMain'
import { Section } from './styles'

function Start() {
    return(
        <>
            <ContainerMain>
                <Section>
                    <h1>Seja-bem vindo (a)!</h1>

                    <p>Este é um site em que você irá poder ter conhecimento sobre diversos filmes. Faça login para acessar nossos sistemas!</p>

                    <Link to={'/login'}><Botao>Acessar</Botao></Link>
                </Section>
            </ContainerMain>
        </>
    )
}

export default Start