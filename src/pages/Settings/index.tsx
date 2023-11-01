import {useState} from 'react'
import { SettingsContent } from './style'
import { AiOutlineRight } from 'react-icons/ai'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import General from './settingsComponents/General'
import Account from './settingsComponents/Account'

function Settings(): JSX.Element {
    const [window, setWindow] = useState<JSX.Element>()
    return (
        <>
            <SettingsContent>
                <menu className='configMenu'>
                    <IoChevronBackCircleOutline onClick={() => history.back()} />
                    <li onClick={() => setWindow(<General />)}>General<AiOutlineRight/></li>
                    <li onClick={() => setWindow(<Account />)}>Account<AiOutlineRight/></li>    
                </menu>
                <section className='configWindow'>
                    {window}
                </section>
            </SettingsContent>
        </>
    )
}


export default Settings