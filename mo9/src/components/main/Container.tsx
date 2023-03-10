import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { move } from "../../redux/move";
import MainComp from "./Component";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";

const MainContainer = () => {
  const moveAd = useAppSelector((state) => state.move.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const moveTo = (where: string) => {
    navigate(`/${where}`);
  };

  const test = async () => {
    dispatch(move("hi"));
    console.log(moveAd);
  };

  useEffect(() => {
    test();
  });

  return <MainComp moveTo={moveTo}></MainComp>;
};

export default MainContainer;
