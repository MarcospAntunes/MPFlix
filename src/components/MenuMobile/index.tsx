import { AiFillHome, AiOutlineGlobal } from "react-icons/ai"
import { IoLogOutSharp, IoSettingsSharp } from "react-icons/io5"
import { MdFavorite } from "react-icons/md"
import { SlOptionsVertical } from "react-icons/sl"
import { NavLink, useNavigate } from "react-router-dom"
import { MenuMobileStyled } from "./styles"
import useAuth from "../../hooks/useAuth"
import { verificaFoto, verificaNome } from "../../utils/userFunctions"

interface MenuMobileProps {
    menuIsVisible: boolean
    setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function MenuMobile({ menuIsVisible, setMenuIsVisible }: MenuMobileProps) {

    const { logOut }: any = useAuth()
    const navigate = useNavigate()
    const user: any = useAuth()
    
    return(
        <MenuMobileStyled isvisible={menuIsVisible ? menuIsVisible.toString() : undefined}>
            <li>
                <figure className="userPerfil">  {/* img de perfil do usuario */}
                    <img src={verificaFoto(user)} alt="perfil" className="userPhoto" onClick={() => setMenuIsVisible(false)} />
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
                    <NavLink to={'/home'}><AiFillHome className="icons" activeclassname={CSSMathValue.toString()}/>Home</NavLink>
                    <NavLink to={'/browse'}><AiOutlineGlobal className="icons" activeclassname={CSSMathValue.toString()} />Browse</NavLink>
                    <NavLink to={'/favorites'}><MdFavorite className="icons" activeclassname={CSSMathValue.toString()} />Favorites</NavLink>
                    
                    <br />

                    <p>General</p>

                    <br />
                    
                    <NavLink to={'/settings'}><IoSettingsSharp className="icons" activeclassname={CSSMathValue.toString()} />Setting</NavLink>
                    <span className="logout" onClick={() => [logOut(), navigate('/')] }><IoLogOutSharp className="icons" activeclassname={CSSMathValue.toString()}  />Logout
                    </span>
                </nav>
            </li>
        </MenuMobileStyled>
    )
}

export default MenuMobile