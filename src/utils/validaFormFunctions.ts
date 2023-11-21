import { NavigateFunction } from "react-router-dom"

interface handleLoginProps {
    e: React.MouseEvent<HTMLInputElement, MouseEvent> 
    setError: React.Dispatch<React.SetStateAction<string>>
    email: string
    password: string
    login: any
    navigate: NavigateFunction
}

interface handleRegisterProps {
    e: React.MouseEvent<HTMLInputElement, MouseEvent> 
    email: string
    emailConf: string
    password: string
    passwordConf: string
    name: string
    setError: React.Dispatch<React.SetStateAction<string>>
    register: any
    navigate: NavigateFunction
}

export const handleLogin = ({ e, setError, email, password, login, navigate }: handleLoginProps) => {
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

  export const handleRegister = ({ e, email, emailConf, password, passwordConf, name, setError, register, navigate }: handleRegisterProps) => {
    e.preventDefault()
    
    if(!email || !emailConf || !password || !passwordConf || !name) {
      setError("Fill in all fields")
      return
    } else if (email !== emailConf) {
      setError("Emails are not the same")
      return
    } else if (password !== passwordConf) {
      setError("Passwords are not the same")
      return
    }

    const res = register(name, email, password)

    if (res) {
      setError(res)
      return
    }

    alert("User registered successfully!")
    navigate("/login")
  }
