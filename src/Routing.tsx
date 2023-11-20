import { BrowserRouter, Routes, Route } from "react-router-dom"
import Start from "./pages/Start"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import GlobalStyles from "./GlobalStyles"
import { AuthProvider } from "./contexts/auth"
import useAuth from "./hooks/useAuth"
import Settings from "./pages/Settings"
import FavoritesProvider from "./contexts/Favorites"
import { CardDataProvider } from "./contexts/CardData"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./themes"
import Favorites from "./pages/Favorites"
import Browse from "./pages/Browse"

interface PrivateProps {
  Item: any
  themeToggler: () => void
}

const Private = ({ Item, themeToggler }: PrivateProps): JSX.Element => {
  const { signed }: any = useAuth();

  return signed > 0 ? <Item themeToggler={themeToggler} /> : <Login />;
}

function Routing() {
  const [theme, setTheme] = useState('dark')
  const themeToggler = (target?: string) => {
    target === 'dark' ? setTheme('dark') : setTheme('light')
  }
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <BrowserRouter>
            <FavoritesProvider>
              <CardDataProvider>
                <GlobalStyles />
                <Routes>
                  <Route path="/" element={<Start />}></Route>
                  <Route path="/register" element={<Register />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/home" element={<Private Item={Home} themeToggler={themeToggler} />}></Route>
                  <Route path="/browse" element={<Private Item={Browse} themeToggler={themeToggler} />}></Route>
                  <Route path="/favorites" element={<Private Item={Favorites} themeToggler={themeToggler} />}></Route>
                  <Route path="/settings" element={<Private Item={Settings} themeToggler={themeToggler} />}></Route>
                </Routes>
              </CardDataProvider>
            </FavoritesProvider>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default Routing
