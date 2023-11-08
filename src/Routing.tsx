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

const Private = ({ Item }: any): JSX.Element => {
  const { signed }: any = useAuth();

  return signed > 0 ? <Item /> : <Login />;
}

function Routing() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <FavoritesProvider>
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<Start />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/home" element={<Private Item={Home} />} />
              <Route path="/settings" element={<Private Item={Settings} />} />
            </Routes>
          </FavoritesProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default Routing
