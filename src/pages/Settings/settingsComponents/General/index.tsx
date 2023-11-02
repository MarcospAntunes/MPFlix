import { GeneralMenuStyled } from "./style"

function General() {
    return(
        <>
            <GeneralMenuStyled>
                <li>
                        <h2>Change Theme</h2>
                        <div className="radioButtons">
                            <div className="radio-container">
                                <label htmlFor="radio">
                                    <span>Dark</span>
                                    <input type="radio" id="radio" name="radio" />
                                    <div className="custom-radio">
                                    <span></span>
                                    </div>
                                </label>
                            </div>
                            <div className="radio-container">
                                <label htmlFor="radio1">
                                    <span>Light</span>
                                    <input type="radio" id="radio1" name="radio" />
                                    <div className="custom-radio">
                                    <span></span>
                                    </div>  
                                </label>
                            </div>
                        </div>
                    </li>
            </GeneralMenuStyled>
        </>
    )
}

export default General