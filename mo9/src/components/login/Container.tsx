import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { rememberID, rememberIdInput, userLogin } from "../../api";
import { registDropdown, registMordal } from "../../redux/click";
import { useAppSelector } from "../../redux/hooks";
import { ErrorMsg } from "../../redux/mordal";
import LoginComp from "./Component";

const LoginContainer = () => {
  const [remember, setRemember] = useState(false);
  const [autoInput, setAutoInput] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const navigate = useNavigate();

  const RegistDropdown = useAppSelector(
    (state) => state.registDropdown.registDropdown
  );

  const RegistMordal = useAppSelector(
    (state) => state.registMordal.registMordal
  );

  const dispatch = useDispatch();

  const setId = (e: any) => {
    setInputId(e.target.value);
  };

  const setPw = (e: any) => {
    setInputPw(e.target.value);
  };

  const checkCookie = async () => {
    const data = await rememberIdInput();
    console.log("이게데이타", data);
    setAutoInput(data.data.userId);
  };

  const login = async () => {
    const data = await userLogin(inputId, inputPw);
    console.log(data.data);
    if (data.data.status == 200) {
      navigate(`/`);
      if (remember) {
        rememberID(inputId);
      }
    } else {
      dispatch(registMordal());
      dispatch(ErrorMsg(data.data.msg));
    }
  };

  const RegistDropdownFunc = () => {
    dispatch(registDropdown());
    console.log(RegistDropdown);
  };

  const onChange = () => {
    setRemember(!remember);
    console.log(remember);
  };

  useEffect(() => {
    checkCookie();
  }, []);

  return (
    <LoginComp
      onChange={onChange}
      RegistDropdownFunc={RegistDropdownFunc}
      RegistDropdown={RegistDropdown}
      RegistMordal={RegistMordal}
      setId={setId}
      setPw={setPw}
      login={login}
      autoInput={autoInput}
    ></LoginComp>
  );
};

export default LoginContainer;
