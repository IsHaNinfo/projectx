import { useAuthContext } from "./useAuthContext";

import { useNavigate } from "react-router-dom";
import { useProjectContext } from "./useProjectContext";
export const useLogout = () => {
  const history = useNavigate();
  const { dispatch } = useAuthContext();
  const { dispatch: projectDispatch } = useProjectContext();
  const logout = () => {
    // remove user from local
    history("/");
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
    projectDispatch({ type: "SHOW_PROJECT", payload: null });
  };

  return { logout };
};

export default useLogout;
