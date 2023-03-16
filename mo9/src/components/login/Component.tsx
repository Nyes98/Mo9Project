import styled from "styled-components";
import RegistErrorMordalContainer from "../mordal/RegistError/Container";
import RegistContainer from "../regist/Container";

type Props = {
  onChange: () => void;
  RegistDropdownFunc: () => void;
  RegistDropdown: boolean;
  setId: (e: any) => void;
  setPw: (e: any) => void;
  login: () => void;
  RegistMordal: boolean;
  inputId: string;
};

const LoginComp: React.FC<Props> = ({
  onChange,
  RegistDropdownFunc,
  RegistDropdown,
  setId,
  setPw,
  login,
  RegistMordal,
  inputId,
}) => {
  return (
    <Root>
      <Background>
        <img src="/imgs/login-back.jpg" alt="" />
      </Background>
      <LoginBox>
        <LoginWrap>
          <img src="/imgs/desktop.svg" alt="desktop" />
          <TitleBox>
            <div>Sign In</div>
            <div>Log in with your credentials.</div>
          </TitleBox>
          <InputTitle>ID</InputTitle>
          <InputBox>
            <div>
              <img src="/imgs/letter.svg" alt="letter" />
            </div>

            <input type="text" onChange={setId} defaultValue={inputId} />
          </InputBox>
          <InputTitle>Password</InputTitle>
          <InputBox>
            <div>
              <img src="/imgs/lock.svg" alt="letter" />
            </div>
            <input type="password" onChange={setPw} />
            <div>
              <img src="/imgs/eye-slash.svg" alt="letter" />
            </div>
          </InputBox>
          <ForgotBtn>Forgot Password ?</ForgotBtn>
          <CheckBox>
            <input type="checkbox" onClick={onChange} />
            Remember Me
          </CheckBox>
          <LoginBtn onClick={login}>Sign in</LoginBtn>
          <AgreeBox>
            By logging in, you agree to all
            <div>our Terms & Conditions</div>
          </AgreeBox>
        </LoginWrap>
        <SignUp>
          Not a member?
          <div onClick={RegistDropdownFunc}>Register</div>
        </SignUp>
        {RegistMordal ? (
          <RegistErrorMordalContainer></RegistErrorMordalContainer>
        ) : (
          <></>
        )}
      </LoginBox>

      <RegistBox RegistDropdown={RegistDropdown}>
        <RegistContainer />
      </RegistBox>
    </Root>
  );
};

export default LoginComp;

const LoginBtn = styled.div`
  background-color: #6256f2;
  color: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
`;

const SignUp = styled.div`
  display: flex;
  justify-content: center;
  color: #c3c5cc;

  div {
    color: #6256f2;
    margin-left: 5px;
  }
`;
const AgreeBox = styled.div`
  display: flex;
  margin: 70px 0 5px 0;
  justify-content: center;
  color: #c3c5cc;

  div {
    color: #6256f2;
    margin-left: 5px;
  }
`;
const TitleBox = styled.div`
  color: white;
  div:first-child {
    font-size: 2rem;
    margin: 10px 0;
  }
  div:last-child {
    color: lightgray;
  }
`;
const CheckBox = styled.div`
  color: white;
  margin: 20px 0;
`;

const Root = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
`;
const LoginBox = styled.div`
  width: 30vw;
  background-color: #332b3f;
  z-index: 2;
`;

const ForgotBtn = styled.div`
  display: flex;
  flex-direction: row-reverse;
  color: #6256f2;
  margin: 10px 0;
`;

const InputTitle = styled.div`
  margin-top: 40px;
  color: #c3c5cc;
`;
const InputBox = styled.div`
  display: flex;
  border: 3px solid gray;
  border-radius: 10px;
  margin: 10px 0;

  div:nth-child(3) img {
    margin-top: 12px;
    filter: invert(56%) sepia(7%) saturate(160%) hue-rotate(191deg)
      brightness(92%) contrast(90%);
  }

  div > img {
    margin: 9px 5px 5px 8px;
    width: 20px;
  }

  input {
    border: none;
    width: 83%;
    background-color: #332b3f;
    color: white;
  }

  input:focus {
    outline: none;
  }
`;

const LoginWrap = styled.div`
  width: 25vw;
  padding: 20px;
  img {
    width: 40px;
    margin: 90px 0 30px 0;
    filter: invert(98%) sepia(0%) saturate(0%) hue-rotate(115deg)
      brightness(109%) contrast(102%);
  }
`;
const Background = styled.div`
  width: 80;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
  }
`;

const RegistBox = styled.div<{ RegistDropdown: boolean }>`
  position: absolute;
  transition: 1s;
  top: 20vh;
  right: 0;
  background-color: white;
  width: 40vw;
  height: 60vh;
  z-index: 1;
  margin-right: ${({ RegistDropdown }) => (RegistDropdown ? "27vw" : "-20vw")};
`;
