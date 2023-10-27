import { ContainerCentralizado } from "../../components/Containers/ContainerDiv"
import { InputStyled } from "../../components/Form/Input"
import Form from "../../components/Form"
import { Link } from "react-router-dom"


function Login() {
  return (
    <>
      <ContainerCentralizado>
        <Form action="" method="post">
          <h1>Login</h1> <br />

          <InputStyled type="email" placeholder="Seu Email" required  />
          <InputStyled type="password" placeholder="Senha" required minLength={8} />
          <br />
          <InputStyled type="submit" value="Login" />

          <p>Don't have account? <Link to={'/register'}>Click here</Link> and create an account!</p>
        </Form>

      </ContainerCentralizado>
    </>
  )
}

export default Login