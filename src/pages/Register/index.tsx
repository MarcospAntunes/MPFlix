import { Link, useNavigate } from "react-router-dom"
import { ContainerCentralizado } from "../../components/Containers/ContainerDiv"
import Form from "../../components/Form"  
import { InputStyled } from "../../components/Form/Input"
import { ParagraphError } from "./styles"
import { useState } from 'react'
import useAuth from "../../hooks/useAuth"
import ErrorMessage from "../../components/Form/ErrorMessage"
import { handleRegister } from "../../utils/validaFormFunctions"

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [emailConf, setEmailConf] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConf, setPasswordConf] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const { register }: any = useAuth()
  
  return (
    <>
      <ContainerCentralizado>
        <Form action="" method="post">
          <h1>Register</h1> <br />

          <label htmlFor="nome">Full Name</label>
          <InputStyled 
            type="text" 
            placeholder="Full name" 
            required 
            minLength={4} 
            onChange={(e) => [setName(e.target.value), setError("")]}
          />
          <label htmlFor="nome">E-mail</label>
          <InputStyled 
            id="email" 
            type="email" 
            placeholder="Your email" 
            required 
            onChange={(e) => [setEmail(e.target.value), setError("")] } 
          />
          <InputStyled 
            id="confirmaEmail" 
            type="email" 
            placeholder="Confirm your Email" 
            required 
            onChange={(e) => [setEmailConf(e.target.value), setError("")] } 
          />

          <ParagraphError id="errorEmail">The emails are not the same, check and try again.</ParagraphError>
          
          <label htmlFor="nome">Password</label>
          <InputStyled 
            id="senha" 
            type="password"
            placeholder="Password" 
            required 
            minLength={8} 
            onChange={(e) => [setPassword(e.target.value), setError("")] } 
          />
          <InputStyled 
            id="confirmaSenha" 
            type="password" 
            placeholder="Confirm your password" 
            required 
            minLength={8} 
            onChange={(e) => [setPasswordConf(e.target.value), setError("")] } 
          />

          <ErrorMessage>{error}</ErrorMessage>
          <br />
          <InputStyled 
            type="submit" 
            value="Register"
            onClick={(e) => handleRegister({e, email, emailConf, password, passwordConf, name, setError, register, navigate})}
          />
          <p style={{textAlign: "center"}}>Already have an account? <Link to={'/login'}>Click here</Link> and login!</p>
        </Form>
      </ContainerCentralizado>
    </>
  )
}

export default Register