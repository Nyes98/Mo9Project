import MainComp from "./Component";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "../login/Container";

const MainContainer = () => {
  return (
    <Routes>
      <Route path="*" element={<MainComp></MainComp>}></Route>
      <Route path="/login" element={<LoginContainer></LoginContainer>}></Route>
    </Routes>
  );
};

export default MainContainer;
