import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./GlobalStyles"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./themes"
import { AuthProvider, FavoritesProvider, CardDataProvider } from "./contexts"
import { useAuth } from "./hooks"
import { 
  Browse, 
  Favorites, 
  Home, 
  Login, 
  Register, 
  Settings, 
  Start, 
  Error404 
} from "./pages"

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
                  <Route path="*" element={<Error404 />}></Route>
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
