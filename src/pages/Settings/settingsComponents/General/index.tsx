import { GeneralMenuStyled } from "./style"

function General() {
    return(
        <>
            <GeneralMenuStyled>
                <li>
                        <h2>Change Theme</h2>
                        <span>Dark: <input type="radio" name="theme" id="darkTheme" value="Dark" /></span>
                        <span>light: <input type="radio" name="theme" id="lightTheme" value="light" /></span>
                    </li>
            </GeneralMenuStyled>
        </>
    )
}

export default General