import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { move } from "../../redux/move";
import MainComp from "./Component";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { autoLogin, logout } from "../../api";
import { curUser } from "../../redux/user";

const MainContainer = () => {
  const loginedUser = useAppSelector((state) => state.curUser.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const moveTo = (where: string) => {
    navigate(`/${where}`);
  };

  const Logout = async () => {
    logout();
    dispatch(curUser(""));
  };

  const checkCookie = async () => {
    const data = await autoLogin();
    dispatch(curUser(data.data.userId));
  };

  useEffect(() => {
    checkCookie();
  }, [loginedUser]);

  return (
    <MainComp
      moveTo={moveTo}
      loginedUser={loginedUser}
      Logout={Logout}
    ></MainComp>
  );
};

export default MainContainer;
