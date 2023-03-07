import LoginComp from "./Component";

const LoginContainer = () => {
  const [remember, setRemember] = useState(false);

  const onChange = (e) => {
    if (e.target.checked) {
      setRemember(!remember);
    }
  };

  return <LoginComp onChange={onChange}></LoginComp>;
};

export default LoginContainer;
