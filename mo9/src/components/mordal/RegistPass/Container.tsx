import { useDispatch } from "react-redux";
import { registPass } from "../../../redux/click";
import RegistPassMordalComp from "./Component";

const RegistPassMordalContainer = ({}) => {
  const dispatch = useDispatch();

  const CloseMordal = () => {
    dispatch(registPass());
  };
  return (
    <RegistPassMordalComp CloseMordal={CloseMordal}></RegistPassMordalComp>
  );
};

export default RegistPassMordalContainer;
