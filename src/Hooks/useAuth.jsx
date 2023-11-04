import { useContext } from "react";
import { AuthContext } from "../Context/Context";


const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;