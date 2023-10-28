import { ContainerForm, FormStyled } from "./styles"


function Form({ children }: any): JSX.Element {
    return(
        <ContainerForm>
            <FormStyled>
            
                {children}
            
            </FormStyled>
        </ContainerForm>
        
    )
}

export default Form