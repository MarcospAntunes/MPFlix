import { FormStyled } from "./styles"


function Form({ children }: any): JSX.Element {
    return(
        <FormStyled>
            
            {children}
        
        </FormStyled>
        
    )
}

export default Form