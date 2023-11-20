import { BiSearch } from 'react-icons/bi'
import { DivBusca } from './styles'

interface CaixaDePesquisaProps {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

function chamarInput(): void {
    const chamarInput: HTMLInputElement = document.querySelector('#textBusca')!
    chamarInput.focus()
}

function CaixaDePesquisa({ search, setSearch }: CaixaDePesquisaProps): JSX.Element {
    
    return(
        <DivBusca>
            <BiSearch className="btnBusca" onClick={() => chamarInput()}/>
            <input 
                type="text" 
                id="textBusca" 
                placeholder="Search here"
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
        </DivBusca>
    )

}


export default CaixaDePesquisa