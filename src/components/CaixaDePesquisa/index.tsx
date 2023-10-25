import { BiSearch } from 'react-icons/bi'
import styled from 'styled-components'

const DivBusca = styled.div`
    width: 300px;
    height: 40px;
    background-color: #363636;
    border-radius: 50px;
    margin: 10px 10px 10px 0px;

    input {
        float: right;
        background-color: transparent;
        padding-right: 5px;
        font-style: italic;
        border: none;
        height: 100%;
        width: 260px;
        border-radius: 50px;
        color: white;

        &:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        }
    }

    svg {
        width: 20px;
        height: 20px;
        margin: 10px;
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {
        width: 250px;
        height: 40px;
        background-color: #363636;
        border-radius: 50px;
        margin: 20px 10px 10px 80px;

        input {
            float: right;
            background-color: transparent;
            padding-right: 5px;
            font-style: italic;
            border: none;
            height: 100%;
            width: 200px;
            border-radius: 50px;
            color: white;

            &:focus {
                box-shadow: 0 0 0 0;
                border: 0 none;
                outline: 0;
            }
        }

        svg {
            width: 20px;
            height: 20px;
            margin: 10px;
            cursor: pointer;
        }
  }
`

function chamarInput(): void {
    const chamarInput: HTMLInputElement = document.querySelector('#textBusca')!
    chamarInput.focus()
}

function CaixaDePesquisa(): JSX.Element {
    return(
        <DivBusca>
            <BiSearch className="btnBusca" onClick={() => chamarInput()}/>
          <input type="text" id="textBusca" placeholder="Search here" />

        </DivBusca>
    )

}


export default CaixaDePesquisa