import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<any>()

    useEffect(() => {
        const userToken = localStorage.getItem('user_token')
        const usersStorage = localStorage.getItem('users_db')

        if(userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter((user: any) => user.email === JSON.parse(userToken).email)

            if(hasUser) setUser(hasUser[0])
        }
    }, [])

    const login = (email: string, password: any) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db')!)
        
        const hasUser = usersStorage?.filter((user: any) => user.email === email)

        if(hasUser?.length) {
            if(hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(26).substring(2)
                localStorage.setItem('user_token', JSON.stringify({email, token}))
                return
            } else {
                return "E-mail ou senha incorretos"
            }
        } else {
            return "usuário não cadastrado"
        }
    }

    const register = (email: string, password: any) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db')!)
        const hasUser = usersStorage?.filter((user: any) => user.email === email)

        if(hasUser?.length) {
            return "Já tem uma conta com esse endereço de E-mail!"
        }

        let newUser

        if(usersStorage) {
            newUser = [...usersStorage, {email, password}]
        } else {
            newUser = [{email, password}]
        }

        localStorage.setItem('users_db', JSON.stringify(newUser))

        return
    }

    const logOut = () => {
        setUser(null)
        localStorage.removeItem('user_token')
    }

    return( 
        <AuthContext.Provider value={{user, signed: !!user, login, register, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}