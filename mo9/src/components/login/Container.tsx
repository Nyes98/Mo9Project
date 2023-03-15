import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../api";
import { registDropdown, registMordal } from "../../redux/click";
import { useAppSelector } from "../../redux/hooks";
import { ErrorMsg } from "../../redux/mordal";
import LoginComp from "./Component";

const LoginContainer = () => {
  const [remember, setRemember] = useState(false);
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

  const login = async () => {
    const data = await userLogin(inputId, inputPw);
    console.log(data.data);
    if (data.data.status == 200) {
      navigate(`/`);
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

  return (
    <LoginComp
      onChange={onChange}
      RegistDropdownFunc={RegistDropdownFunc}
      RegistDropdown={RegistDropdown}
      RegistMordal={RegistMordal}
      setId={setId}
      setPw={setPw}
      login={login}
    ></LoginComp>
  );
};

export default LoginContainer;
