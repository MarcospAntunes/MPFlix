import { LoadSpinnerStyled } from "./LoadSpinner.style"

function LoadSpinner(): JSX.Element {
  return(
    <LoadSpinnerStyled>
      <circle cx="70" cy="70" r="70"></circle>
    </LoadSpinnerStyled>
  )
}

export default LoadSpinner