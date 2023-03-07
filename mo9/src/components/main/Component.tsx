import styled from "styled-components";

const MainComp = () => {
  return (
    <>
      <Background></Background>
      <HeaderLine>
        <Header>
          <img src="/imgs/logo.png" alt="logo" />
          <div>Log in</div>
        </Header>
      </HeaderLine>

      <MainBoard>
        <img src="/imgs/main.jpg" alt="main" />
      </MainBoard>
      <MainText>사람을 모아요</MainText>
      <MainText2>모아모아</MainText2>
      <MainText3>빨리모아</MainText3>
    </>
  );
};

export default MainComp;

const MainText = styled.div`
  position: absolute;
  top: 50px;
  background-color: white;
  padding: 50px;
  border-radius: 10px;
`;

const MainText2 = styled.div`
  position: absolute;
  top: 200px;
  background-color: white;
  padding: 50px;
  border-radius: 10px;
`;

const MainText3 = styled.div`
  position: absolute;
  top: 350px;
  background-color: white;
  padding: 50px;
  border-radius: 10px;
`;
const MainBoard = styled.div`
  position: absolute;
  top: 50px;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;

const Header = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  img {
    width: 80px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

const HeaderLine = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  border-bottom: 1px solid red;
`;
