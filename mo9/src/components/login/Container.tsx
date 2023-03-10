import { useState } from "react";
import LoginComp from "./Component";

const LoginContainer = () => {
  const [remember, setRemember] = useState(false);

  const onChange = () => {
    setRemember(!remember);
    console.log(remember);
  };

  return <LoginComp onChange={onChange}></LoginComp>;
};

export default LoginContainer;
