import { ContainerDiv } from "../../components/Containers/ContainerDiv"
import Header from "../../components/Header"


function Home() {
  return (
    <>
      <ContainerDiv>
        <Header />
        <main>
          <section></section> {/* Seção do banner */}
          <section></section> {/* Seção dos filmes */}
        </main>
        <footer>
          <h2>Desenvolvidor por Marcos Antunes</h2>
          <h2>Design feito por <a href="https://dribbble.com/apurple" target="_blank">aPurple</a></h2>
        </footer>
      </ContainerDiv>
    </>
  )
}

export default Home