import styled from "styled-components"

const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 50%;
    width: 800px;
    height: 400px;
    background-color: #9b9b9b;
    border-radius: 15px;
    padding: 50px 0 50px 50px;
    

    button {
        width: 150px;
        height: 50px;
        border: none;
        border-radius: 10px;
        color: white;
        background-color: #d63837;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            transform: translate(3px, 3px);
            transition: 0.3s;
        }
    }
`

function Banner() {
    return(
        <>
            {/* Banner que irá gerar um filme aleatório a cada refresh da página */}
            <SectionStyled>
                <h1>teste</h1>
                <button>Watch now</button>
            </SectionStyled>     
        </>           
    )
}

export default Banner