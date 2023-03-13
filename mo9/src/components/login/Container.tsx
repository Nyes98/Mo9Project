import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registDropdown } from "../../redux/click";
import { useAppSelector } from "../../redux/hooks";
import LoginComp from "./Component";

const LoginContainer = () => {
  const [remember, setRemember] = useState(false);
  const RegistDropdown = useAppSelector((state) => state.registDropdown.value);
  const dispatch = useDispatch();

  const RegistMordal = () => {
    dispatch(registDropdown());
    console.log(RegistDropdown);
  };

  const onChange = () => {
    setRemember(!remember);
    console.log(remember);
  };

  return (
    <LoginComp
      onChange={onChange}
      RegistMordal={RegistMordal}
      RegistDropdown={RegistDropdown}
    ></LoginComp>
  );
};

export default LoginContainer;
