import { ContainerCentralizado } from "../../components/Containers/ContainerDiv"
import { InputStyled } from "../../components/Form/Input"
import Form from "../../components/Form"
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import useAuth from "../../hooks/useAuth"
import ErrorMessage from "../../components/Form/ErrorMessage"

function Login() {
  const { login }: any = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()
    if(!email || !password) {
      setError('Fill in all fields')
      return
    }
    const res = login(email, password)

    if(res) {
      setError(res)
      return
    }
    navigate('/home')
    window.location.reload()
  }

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
            onClick={(e) => handleLogin(e)}
            
          />

          <ErrorMessage>{error}</ErrorMessage>

          <p style={{textAlign: 'center'}}>Don't have account? <Link to={'/register'}>Click here</Link> and create an account!</p>
        </Form>

      </ContainerCentralizado>
    </>
  )
}

export default Login