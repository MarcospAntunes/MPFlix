import { Link } from "react-router-dom"
import { ContainerCentralizado } from "../../components/Containers/ContainerDiv"
import Form from "../../components/Form"  
import { InputStyled } from "../../components/Form/Input"
import { VerificaSeCampoEmailEhIgual, VerificaSeCampoSenhaEhIgual } from "../../utils/validaForm"
import { ParagraphError } from "./styles"


function Register() {
  return (
    <>
      <ContainerCentralizado>

        <Form action="" method="post">
          <h1>Register</h1> <br />

          <label htmlFor="nome">Full Name</label>
          <InputStyled type="text" placeholder="Nome Completo" required minLength={4} />
          <label htmlFor="nome">E-mail</label>
          <InputStyled id="email" type="email" placeholder="Seu Email" required onChange={() => VerificaSeCampoEmailEhIgual()} />
          <InputStyled id="confirmaEmail" type="email" placeholder="Confirme seu Email" required onChange={() => VerificaSeCampoEmailEhIgual()} />
          <ParagraphError id="errorEmail">Os e-mails não estão iguais, verifique e tente novamente.</ParagraphError>
          <label htmlFor="nome">Password</label>
          <InputStyled id="senha" type="password" placeholder="Senha" required minLength={8} onChange={() => VerificaSeCampoSenhaEhIgual()} />
          <InputStyled id="confirmaSenha" type="password" placeholder="Confirme sua Senha" required minLength={8} onChange={() => VerificaSeCampoSenhaEhIgual()} />
          <ParagraphError id="errorSenha">As senhas não estão iguais, verifique e tente novamente.</ParagraphError>
          <br />
          <InputStyled type="submit" value="Registrar" />
          <p>Already have an account? <Link to={'/login'}>Click here</Link> and login!</p>
        </Form>

      </ContainerCentralizado>
    </>
  )
}

export default Register