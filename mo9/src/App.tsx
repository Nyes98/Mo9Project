import { Route, Routes } from "react-router-dom";
import LoginContainer from "./components/login/Container";
import MainContainer from "./components/main/Container";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainContainer></MainContainer>}></Route>
        <Route
          path="/login"
          element={<LoginContainer></LoginContainer>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
