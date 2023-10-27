import { Link } from "react-router-dom"
import { ContainerCentralizado } from "../../components/Containers/ContainerDiv"
import Form from "../../components/Form"  
import { InputStyled } from "../../components/Form/Input"


function Register() {
  return (
    <>
      <ContainerCentralizado>
        <Form action="" method="post">
          <h1>Register</h1> <br />

          <InputStyled type="text" placeholder="Nome Completo" required minLength={4} />
          <InputStyled type="email" placeholder="Seu Email" required />
          <InputStyled type="email" placeholder="Confirme seu Email" required />
          <InputStyled type="password" placeholder="Senha" required minLength={8} />
          <InputStyled type="password" placeholder="Confirme sua Senha" required minLength={8} />
          <br />
          <InputStyled type="submit" value="Registrar" />
          <p>Already have an account? <Link to={'/login'}>Click here</Link> and login!</p>
        </Form>

      </ContainerCentralizado>
    </>
  )
}

export default Register