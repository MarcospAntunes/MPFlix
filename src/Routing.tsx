import { BrowserRouter, Routes, Route } from "react-router-dom"
import Start from "./pages/Start"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import GlobalStyles from "./GlobalStyles"


function Routing() {
  

  return (
    <>
      <BrowserRouter>
      <GlobalStyles />
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing
