import { GeneralMenuStyled } from "./style"

interface GeneralProps {
    themeToggler: (target: string) => void
}

function General({ themeToggler }: GeneralProps) {
    const handleThemeToggle = (target: string) => {
        themeToggler(target)
    }

    return(
        <>
            <GeneralMenuStyled>
                <li>
                        <h2>Change Theme</h2>
                        <div className="radioButtons">
                            <div className="radio-container">
                                <label htmlFor="radio">
                                    <span>Dark</span>
                                    <input type="radio" id="radio" name="radio" onChange={() => handleThemeToggle('dark')} />
                                    <div className="custom-radio">
                                    <span></span>
                                    </div>
                                </label>
                            </div>
                            <div className="radio-container">
                                <label htmlFor="radio1">
                                    <span>Light</span>
                                    <input type="radio" id="radio1" name="radio" onChange={() => handleThemeToggle('light')} />
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