import styled from "styled-components";

const LoginComp = ({ onChange }) => {
  return (
    <Root>
      <Background>
        <img src="/imgs/login-back.jpg" alt="" />
      </Background>
      <LoginBox>
        <LoginWrap>
          <img src="/imgs/desktop.svg" alt="desktop" />
          <div>Sign in</div>
          <div>Log in with your credentials.</div>
          <InputTitle>Email</InputTitle>
          <InputBox>
            <div>
              <img src="/imgs/letter.svg" alt="letter" />
            </div>
            <input type="text" />
          </InputBox>
          <InputTitle>Password</InputTitle>
          <InputBox>
            <div>
              <img src="/imgs/lock.svg" alt="letter" />
            </div>
            <input type="text" />
            <div>
              <img src="/imgs/eye-slash.svg" alt="letter" />
            </div>
          </InputBox>
          <ForgotBtn>Forgot Password ?</ForgotBtn>
          <input type="checkbox" onClick={(e) => onChange(e)} />
        </LoginWrap>
      </LoginBox>
    </Root>
  );
};

export default LoginComp;

const Root = styled.div`
  display: flex;
  overflow: hidden;
`;
const LoginBox = styled.div`
  width: 30vw;
  background-color: #332b3f;
`;

const ForgotBtn = styled.div`
  color: purple;
  float: right;
`;

const InputTitle = styled.div``;
const InputBox = styled.div`
  display: flex;
  border: 3px solid gray;
  border-radius: 10px;

  div:nth-child(3) img {
    margin-top: 12px;
  }

  div > img {
    margin: 9px 5px 5px 8px;
    width: 20px;
    filter: invert(100%) sepia(1%) saturate(0%) hue-rotate(148deg)
      brightness(105%) contrast(101%);
  }

  input {
    border: none;
    width: 83%;
    background-color: #332b3f;
  }
`;

const LoginWrap = styled.div`
  width: 25vw;
  margin: auto;
  padding: 20px;
  img {
    width: 40px;
  }
`;
const Background = styled.div`
  width: 70vw;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
  }
`;
