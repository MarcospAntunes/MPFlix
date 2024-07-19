import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineGlobal } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'
import { SlOptionsVertical } from 'react-icons/sl'
import { IoSettingsSharp, IoLogOutSharp } from 'react-icons/io5'
import { MenuStyled } from "./Menu.style";
import { useAuth } from "../../hooks";
import { verificaFoto, verificaNome } from "../../utils/userFunctions";

function Menu(): JSX.Element {
  const { logOut }: any = useAuth()
  const navigate = useNavigate()
  const user = useAuth()
  
  return(
    <MenuStyled>
      <li>
        <figure className="userPerfil">  {/* img de perfil do usuario */}
          <img src={verificaFoto(user)} alt="perfil" className="userPhoto" />
          <figcaption>
            <span>Welcome</span> <br /> {verificaNome(user)}! {/* Nome do usuario */}
          </figcaption>
          <SlOptionsVertical />
        </figure>
      </li>
      
      <br />

      <li>
        <p>Menus</p>
        <br />
        <nav>
          <NavLink to={'/home'}>
            <AiFillHome className="icons" activeclassname={CSSMathValue.toString()}/>Home
          </NavLink>
          <NavLink to={'/browse'}>
            <AiOutlineGlobal className="icons" activeclassname={CSSMathValue.toString()} />Browse
          </NavLink>
          <NavLink to={'/favorites'}>
            <MdFavorite className="icons" activeclassname={CSSMathValue.toString()} />favorites
          </NavLink>
          
          <br />
          <p>General</p>
          <br />
          
          <NavLink to={'/settings'}>
            <IoSettingsSharp className="icons" activeclassname={CSSMathValue.toString()}/>Setting
          </NavLink>
          <span className="logout" onClick={() => [logOut(), navigate('/')] }>
            <IoLogOutSharp className="icons" activeclassname={CSSMathValue.toString()}/>Logout
          </span>
        </nav>
      </li>
    </MenuStyled>
  )
}

export default Menu