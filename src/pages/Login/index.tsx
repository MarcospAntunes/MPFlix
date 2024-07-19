import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { useAuth } from "../../hooks"
import { handleLogin } from "../../utils"
import { 
  ContainerCentralizado, 
  Form, 
  InputStyled, 
  ErrorMessage 
} from "../../components"

function Login() {
  const { login }: any = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  return (
    <>
      <ContainerCentralizado>
        <Form method="post">
          <h1>Login</h1> <br />

          <InputStyled 
            type="email" 
            placeholder="Your email" 
            required 
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}  
          />
          <InputStyled 
            type="password" 
            placeholder="Password" 
            required 
            minLength={8} 
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]} 
          />
          <br />
          <InputStyled 
            type="submit" 
            value="Login" 
            onClick={(e) => handleLogin({ e, setError, email, password, login, navigate })}
          />

          <ErrorMessage>{error}</ErrorMessage>

          <p style={{textAlign: 'center'}}>Don't have account? <Link to={'/register'}>Click here</Link> and create an account!</p>
        </Form>
      </ContainerCentralizado>
    </>
  )
}

export default Login