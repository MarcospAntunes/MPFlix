import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineHistory, AiOutlineGlobal } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'
import { SlOptionsVertical } from 'react-icons/sl'
import { IoSettingsSharp, IoLogOutSharp } from 'react-icons/io5'
import defaultPhoto from '../../assets/user.png'
import { MenuStyled } from "./styles";
import useAuth from "../../hooks/useAuth";

function Menu(): JSX.Element {
    const { logOut }: any = useAuth()
    const navigate = useNavigate()
    const user: any = useAuth()
    function verificaNome() {
        let partsOfNameUser: string[]
        let firstAndLastName: string
        if(user.user.name) {
            partsOfNameUser = user.user.name.split(' ')
            firstAndLastName = `${partsOfNameUser[0]} ${partsOfNameUser[partsOfNameUser.length - 1]}`
        } else {
            firstAndLastName = 'Sem nome'
        }
        return firstAndLastName
    }
    function verificaFoto() {
        let photo: string
        if(user.user.photoUrl) {
            photo = user.user.photoUrl
        } else {
            photo = defaultPhoto
        }
        return photo
    }
    

    

    return(
        <MenuStyled>
            <li>
                <figure className="userPerfil">  {/* img de perfil do usuario */}
                    <img src={verificaFoto()} alt="perfil" className="userPhoto" />
                    <figcaption>
                        <span>Welcome</span> <br /> {verificaNome()}! {/* Nome do usuario */}
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
                    <NavLink to={'/favorites'}><MdFavorite className="icons" activeclassname={CSSMathValue.toString()} />favorites</NavLink>
                    <NavLink to={'/history'}><AiOutlineHistory className="icons" activeclassname={CSSMathValue.toString()} />History</NavLink>
                    <br />
                    <p>General</p>
                    <br />
                    <NavLink to={'/settings'}><IoSettingsSharp className="icons" activeclassname={CSSMathValue.toString()} />Setting</NavLink>
                    <span className="logout" onClick={() => [logOut(), navigate('/')] }><IoLogOutSharp className="icons" activeclassname={CSSMathValue.toString()}  />Logout
                    </span>
                </nav>
            </li>

            

        </MenuStyled>
    )
}

export default Menu