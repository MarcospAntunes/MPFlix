import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { InputStyled } from '../../../../components/Form/Input';
import { Botao } from '../../../../components/Botao';
import useAuth from '../../../../hooks/useAuth';
import { AccountMenuStyled } from './style';
import { useNavigate } from 'react-router-dom'; 
import defaultPhoto from '../../../../assets/user.png'

function Account(): JSX.Element {
  const userData: any = useAuth();
  const { name, password, email, photoUrl } = userData.user;
  const archive: any = document.querySelector("#archive")!;
  const navigate = useNavigate();

  function enableEdition(target: HTMLInputElement) {
    target.disabled = false;
    target.focus();
  }

  const [user, setUser] = useState({
    name,
    email,
    password,
    photoUrl,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const photoUrl = e.target!.result;
        setUser({ ...user, photoUrl });

        const usersDb = JSON.parse(localStorage.getItem('users_db')!) || [];
        const updatedUsers = usersDb.map((u: any) =>
          u.email === user.email ? { ...u, photoUrl } : u
        );
        localStorage.setItem('users_db', JSON.stringify(updatedUsers));
      };

      reader.readAsDataURL(file);
    }
  };

  const saveChanges = () => {
    const usersDb = JSON.parse(localStorage.getItem('users_db')!) || [];
    const updatedUsers = usersDb.map((u: any) =>
      u.email === user.email ? user : u
    );
    localStorage.setItem('users_db', JSON.stringify(updatedUsers));
    window.location.reload();
  };

  const deleteAccount = () => {
    const usersDb = JSON.parse(localStorage.getItem('users_db')!) || [];
    const updatedUsers = usersDb.filter((u: any) => u.email !== user.email);
    localStorage.setItem('users_db', JSON.stringify(updatedUsers));
    navigate('/login'); 

  };

  return (
    <>
      <AccountMenuStyled>
        <li>
          <h2>Edit account details</h2>
          <p>Photo:</p> <br />
          <span className="containerPhotoUser">
            <img id="userPhoto" src={photoUrl ? photoUrl : defaultPhoto} alt="User Photo" />
            <label htmlFor="archive" id="labelArchive">
              Add new photo
            </label>
            <InputStyled
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              name="archive"
              id="archive"
            />
            <p>{archive != null ? archive.value : ""}</p>
            <Botao onClick={saveChanges}>Upload photo</Botao>
          </span>
          <p>Name:</p>
          <span className="containerInput">
            <InputStyled
              id="name"
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
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
              onChange={handlePasswordChange}
              required
            />
            <AiOutlineEdit
              className="editButton"
              onClick={() => enableEdition(document.querySelector("#password")!)}
            />
          </span>
          <br />
          <input type="submit" value="Change" onClick={saveChanges} />
        </li>
        <li>
          <h2>Delete Account</h2>
          <Botao onClick={deleteAccount}>Delete account</Botao>
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
