import { NavigateFunction } from "react-router-dom";

interface functionsProps<T> {
  event?: React.ChangeEvent<HTMLInputElement>;
  setUser?: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      password: string;
      photoUrl: T;
    }>
  >;
  user?: {
    name: string;
    email: string;
    password: string;
    photoUrl: T;
  };
  navigate?: NavigateFunction;
}

export default functionsProps;
