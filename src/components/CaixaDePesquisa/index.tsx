import { BiSearch } from 'react-icons/bi'
import { DivBusca } from './styles'

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