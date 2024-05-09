import { useAuth } from "../contexts";
import "./Home.css";

export const Home = () => {
  const { user } = useAuth();
  return <div>{user && <h1>Hola que tal {user.name}</h1>}</div>;
};
