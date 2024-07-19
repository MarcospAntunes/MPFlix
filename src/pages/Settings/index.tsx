import { useState } from 'react'
import { SettingsContent } from './Settings.style'
import { AiOutlineRight } from 'react-icons/ai'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { General, Account } from './settingsComponents'
import settingsProps from './Settings.type'

function Settings({ themeToggler }: settingsProps): JSX.Element {
  const [window, setWindow] = useState<JSX.Element>()
  return (
    <SettingsContent>
      <menu className='configMenu'>
        <IoChevronBackCircleOutline onClick={() => history.back()} />
        <li onClick={() => setWindow(<General themeToggler={themeToggler} />)}>General<AiOutlineRight/></li>
        <li onClick={() => setWindow(<Account />)}>Account<AiOutlineRight/></li>    
      </menu>
      <section className='configWindow'>
        {window}
      </section>
    </SettingsContent>
  )
}


export default Settings