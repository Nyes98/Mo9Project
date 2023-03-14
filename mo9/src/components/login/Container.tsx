import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../api";
import { registDropdown } from "../../redux/click";
import { useAppSelector } from "../../redux/hooks";
import LoginComp from "./Component";

const LoginContainer = () => {
  const [remember, setRemember] = useState(false);
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const RegistDropdown = useAppSelector(
    (state) => state.registDropdown.registDropdown
  );
  const dispatch = useDispatch();

  const setId = (e: any) => {
    setInputId(e.target.value);
  };

  const setPw = (e: any) => {
    setInputPw(e.target.value);
  };

  const login = async () => {
    const data = await userLogin(inputId, inputPw);
    console.log(data);
  };

  const RegistDropdownFunc = () => {
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
      RegistDropdownFunc={RegistDropdownFunc}
      RegistDropdown={RegistDropdown}
      setId={setId}
      setPw={setPw}
      login={login}
    ></LoginComp>
  );
};

export default LoginContainer;
