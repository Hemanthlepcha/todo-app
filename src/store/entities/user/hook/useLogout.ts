import { useRecoilCallback, useResetRecoilState } from "recoil";
import { todosState } from "../../todo/atom";
import { useNavigate } from "react-router-dom";
const useLogout = () => {
  const resetUserState = useResetRecoilState(todosState);
  const navigate = useNavigate();
  const logout = useRecoilCallback(({ reset }) => async () => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    resetUserState();
    reset(todosState);

    // Redirect to login page
    navigate("/");
  });

  return logout;
};

export default useLogout;
