import { NavigateFunction } from "react-router-dom";

interface functionsProps {
  event?: React.ChangeEvent<HTMLInputElement>;
  setUser?: React.Dispatch<
    React.SetStateAction<{
      name: any;
      email: any;
      password: any;
      photoUrl: any;
    }>
  >;
  user?: {
    name: any;
    email: any;
    password: any;
    photoUrl: any;
  };
  navigate?: NavigateFunction;
}

export default functionsProps;
