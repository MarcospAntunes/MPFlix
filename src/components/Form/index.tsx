import { ContainerForm, FormStyled } from "./Form.style"


function Form({ children }: any): JSX.Element {
  return(
    <ContainerForm>
      <FormStyled className="formulario">{children}</FormStyled>
    </ContainerForm>
  )
}

export default Form