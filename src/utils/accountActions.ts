import { NavigateFunction } from "react-router-dom";

interface functionsProps {
    event?: React.ChangeEvent<HTMLInputElement>
    setUser?: React.Dispatch<React.SetStateAction<{
        name: any;
        email: any;
        password: any;
        photoUrl: any;
    }>>
    user?: {
        name: any;
        email: any;
        password: any;
        photoUrl: any;
    }
    navigate?: NavigateFunction
    
}

export function enableEdition(target: HTMLInputElement) {
    target!.disabled = false;
    target!.focus();
}

export const handleInputChange = ({event, user, setUser}: functionsProps) => {
    const { name, value } = event!.target;
    setUser!({
      ...user!,
      [name]: value,
    });
  };

export const handlePhotoChange = ({event, user, setUser}: functionsProps) => {
    const file = event!.target.files![0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const photoUrl = e.target!.result;
        setUser!({ ...user!, photoUrl });

        const usersDb = JSON.parse(localStorage.getItem('users_db')!) || [];
        const updatedUsers = usersDb.map((u: any) =>
          u.email === user!.email ? { ...u, photoUrl } : u
        );
        localStorage.setItem('users_db', JSON.stringify(updatedUsers));
      };

      reader.readAsDataURL(file);
    }
  };

export const saveChanges = ({user}: functionsProps) => {
    const usersDb = JSON.parse(localStorage.getItem('users_db')!) || [];
    const updatedUsers = usersDb.map((u: any) =>
      u.email === user!.email ? user : u
    );
    localStorage.setItem('users_db', JSON.stringify(updatedUsers));
    window.location.reload();
  };

export const deleteAccount = ({user, navigate}: functionsProps) => {
    const usersDb = JSON.parse(localStorage.getItem('users_db')!) || [];
    const updatedUsers = usersDb.filter((u: any) => u.email !== user!.email);
    localStorage.setItem('users_db', JSON.stringify(updatedUsers));
    navigate!('/login'); 

  };
