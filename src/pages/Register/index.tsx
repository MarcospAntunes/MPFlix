import { Link, useNavigate } from "react-router-dom"
import { ContainerCentralizado } from "../../components/Containers/ContainerDiv"
import Form from "../../components/Form"  
import { InputStyled } from "../../components/Form/Input"
import { ParagraphError } from "./styles"
import { useState } from 'react'
import useAuth from "../../hooks/useAuth"
import ErrorMessage from "../../components/Form/ErrorMessage"

const formulario:HTMLFormElement = document.querySelector('.formulario')!


function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [emailConf, setEmailConf] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConf, setPasswordConf] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  console.log(passwordConf)
  console.log(formulario)

  const { register }: any = useAuth()

  const handleRegister = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()
    
    if(!email || !emailConf || !password || !passwordConf || !name) {
      setError("Preencha todos os campos")
      return
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais")
      return
    } else if (password !== passwordConf) {
      setError("As senhas não são iguais")
    }

    const res = register(name, email, password)

    if (res) {
      setError(res)
      return
    }

    alert("Usuário cadastrado com sucesso!")
    navigate("/login")
  }

  return (
    <>
      <ContainerCentralizado>

        <Form action="" method="post">
          <h1>Register</h1> <br />

          <label htmlFor="nome">Full Name</label>
          <InputStyled 
            type="text" 
            placeholder="Nome Completo" 
            required 
            minLength={4} 
            onChange={(e) => [setName(e.target.value), setError("")]}
          />
          <label htmlFor="nome">E-mail</label>
          <InputStyled 
            id="email" 
            type="email" 
            placeholder="Seu Email" 
            required 
            onChange={(e) => [setEmail(e.target.value), setError("")] } 
          />
          <InputStyled 
            id="confirmaEmail" 
            type="email" 
            placeholder="Confirme seu Email" 
            required 
            onChange={(e) => [setEmailConf(e.target.value), setError("")] } 
          />

          <ParagraphError id="errorEmail">Os e-mails não estão iguais, verifique e tente novamente.</ParagraphError>
          
          <label htmlFor="nome">Password</label>
          <InputStyled 
            id="senha" 
            type="password"
            placeholder="Senha" 
            required 
            minLength={8} 
            onChange={(e) => [setPassword(e.target.value), setError("")] } 
          />
          <InputStyled 
            id="confirmaSenha" 
            type="password" 
            placeholder="Confirme sua Senha" 
            required 
            minLength={8} 
            onChange={(e) => [setPasswordConf(e.target.value), setError("")] } 
          />

          <ErrorMessage>{error}</ErrorMessage>
          <br />
          <InputStyled 
            type="submit" 
            value="Registrar"
            onClick={(e) => handleRegister(e)}
          />
          <p style={{textAlign: "center"}}>Already have an account? <Link to={'/login'}>Click here</Link> and login!</p>
        </Form>

      </ContainerCentralizado>
    </>
  )
}

export default Register