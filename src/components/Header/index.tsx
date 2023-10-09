import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome, AiOutlineHistory, AiOutlineGlobal } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'
import { IoSettingsSharp, IoLogOutSharp } from 'react-icons/io5'
import teste from '../../assets/react.svg'

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    min-width: 250px;
    height: 100vh;
    padding: 15px 0px 0px 15px;
    margin-right: 15px;
    background-color: #363636;
    font-size: 18px;
    

    .userPerfil {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        
    }


    .userPerfil figcaption {
        margin-left: 10px;
    }

    .userPerfil figcaption span {
        font-size: 14px;
        color: #9b9b9b;
    }

    .userPhoto {
        width: 50px;
        height: 50px;
        border: 2px solid #bf4343;
        background-color: #9b9b9b;
        border-radius: 50%;
    }

    nav {
        display: flex;
        flex-direction: column;
    }

    nav a {
        color: white;
        text-decoration: none;
        margin-top: 15px;
        width: 100%;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
        padding: 10px;
    }

    .icons {
        width: 32px;
        height: 32px;
        margin-right: 20px;
        vertical-align: middle;
        color: #9b9b9b;
    }

    .active {
        color: #bf4343;
        background-color: #303030;
    }

    .active .icons {
        color: #bf4343;
    }

`

function Header() {
    return(
        <HeaderStyled>
            <figure className="userPerfil">  {/* img de perfil do usuario */}
                <img src={teste} alt="perfil" className="userPhoto" />
                <figcaption><span>Welcome</span> <br /> Marcos Antunes! {/* Nome do usuario */}</figcaption>
            </figure>
            
            <br />

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

            

        </HeaderStyled>
    )
}

export default Header