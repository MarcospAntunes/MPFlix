import { ErrorContainer } from "./404.style"

function Error404() {
  return (
    <ErrorContainer>
      <h1>404! <br/> Page Not Found :(</h1>
      <p>It looks like you are trying to access a non-existent page. If you are sure you are trying to access an existing page, try again later and, if the error persists, contact support.</p>
    </ErrorContainer>
  )
}


export default Error404