import { NavigateFunction } from "react-router-dom"

interface handleRegisterOrLoginProps {
    e: React.MouseEvent<HTMLInputElement, MouseEvent> 
    email: string
    emailConf?: string
    password: string
    passwordConf?: string
    name?: string
    setError: React.Dispatch<React.SetStateAction<string>>
    register?: any
    login?: any
    navigate: NavigateFunction
}

export default handleRegisterOrLoginProps;