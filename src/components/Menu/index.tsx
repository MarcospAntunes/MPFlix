import { NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineHistory, AiOutlineGlobal } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'
import { SlOptionsVertical } from 'react-icons/sl'
import { IoSettingsSharp, IoLogOutSharp } from 'react-icons/io5'
import teste from '../../assets/react.svg'
import { MenuStyled } from "./styles";

function Menu(): JSX.Element {
    return(
        <MenuStyled>
            <li>
                <figure className="userPerfil">  {/* img de perfil do usuario */}
                    <img src={teste} alt="perfil" className="userPhoto" />
                    <figcaption>
                        <span>Welcome</span> <br /> Marcos Antunes! {/* Nome do usuario */}
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
                    <NavLink to={'/watch-List'}><MdFavorite className="icons" activeclassname={CSSMathValue.toString()} />Watch List</NavLink>
                    <NavLink to={'/history'}><AiOutlineHistory className="icons" activeclassname={CSSMathValue.toString()} />History</NavLink>
                    <br />
                    <p>General</p>
                    <br />
                    <NavLink to={'/setting'}><IoSettingsSharp className="icons" activeclassname={CSSMathValue.toString()} />Setting</NavLink>
                    <NavLink to={'/start'}><IoLogOutSharp className="icons" activeclassname={CSSMathValue.toString()} />Logout</NavLink>
                </nav>
            </li>

            

        </MenuStyled>
    )
}

export default Menu