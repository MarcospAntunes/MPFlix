import { useAuth } from "../hooks";
import { Login } from "../pages";

interface PrivateProps {
  Item: any
  themeToggler: () => void
}

function Private({ Item, themeToggler }: PrivateProps): JSX.Element {
  const { signed }: any = useAuth();

  return signed > 0 ? <Item themeToggler={themeToggler} /> : <Login />;
}

export default Private