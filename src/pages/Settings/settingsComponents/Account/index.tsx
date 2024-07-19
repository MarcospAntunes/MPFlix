import { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { InputStyled, Botao } from '../../../../components';
import { useAuth } from '../../../../hooks';
import { AccountMenuStyled } from './Account.style';
import { useNavigate } from 'react-router-dom'; 
import defaultPhoto from '../../../../assets/user.png'
import { deleteAccount, enableEdition, handleInputChange, handlePhotoChange, saveChanges } from '../../../../utils';

function Account(): JSX.Element {
  const userData: any = useAuth();
  const { name, password, email, photoUrl } = userData.user;
  const archive: any = document.querySelector("#archive")!;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name,
    email,
    password,
    photoUrl,
  });

  return (
    <>
      <AccountMenuStyled>
        <li>
          <h2>Edit account details</h2>
          <p>Photo:</p> <br />
          <span className="containerPhotoUser">
            <img id="userPhoto" src={photoUrl ? photoUrl : defaultPhoto} alt="User Photo" />
            <div id='ContainerButton'>
              <label htmlFor="archive" id="labelArchive">
                Add new photo
              </label>
              <InputStyled
                type="file"
                accept="image/*"
                onChange={(event) => handlePhotoChange({event, user, setUser})}
                name="archive"
                id="archive"
              />
              <Botao onClick={() => saveChanges({user})}>Upload photo</Botao>
              <p>{archive != null ? archive.value : ""}</p>
            </div>
          </span>
          <p>Name:</p>
          <span className="containerInput">
            <InputStyled
              id="name"
              type="text"
              name="name"
              value={user.name}
              onChange={(event) => handleInputChange({event, user, setUser})}
              required
              disabled
            />
            <AiOutlineEdit
              className="editButton"
              onClick={() => enableEdition(document.querySelector("#name")!)}
            />
          </span>

          <p>Password:</p>
          <span className="containerInput">
            <InputStyled
              id="password"
              type="password"
              name="password"
              value={user.password}
              minLength={8}
              onChange={(event) => handleInputChange({event, user, setUser})}
              required
              disabled
            />
            <AiOutlineEdit
              className="editButton"
              onClick={() => enableEdition(document.querySelector("#password")!)}
            />
          </span>
          <br />
          <input className='edit' type="submit" value="Change" onClick={() => saveChanges({user})} />
        </li>
        <li>
          <h2>Delete Account</h2>
          <Botao className='edit' onClick={() => deleteAccount({user, navigate})}>Delete account</Botao>
          <p id="attention">
            ATTENTION: after deleting the account, it will not be possible to
            recover it!
          </p>
        </li>
      </AccountMenuStyled>
    </>
  );
}

export default Account;
