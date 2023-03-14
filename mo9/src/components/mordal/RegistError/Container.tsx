import { useDispatch } from "react-redux";
import { registMordal } from "../../../redux/click";
import { useAppSelector } from "../../../redux/hooks";
import RegistErrorMordalComp from "./Component";

const RegistErrorMordalContainer = ({}) => {
  const errorMsg = useAppSelector((state) => state.ErrorMsg.msg);
  const dispatch = useDispatch();

  const CloseMordal = () => {
    dispatch(registMordal());
  };
  return (
    <RegistErrorMordalComp
      CloseMordal={CloseMordal}
      errorMsg={errorMsg}
    ></RegistErrorMordalComp>
  );
};

export default RegistErrorMordalContainer;
