import { useDispatch } from "react-redux";
import { registDropdown, registMordal, registPass } from "../../redux/click";
import { useAppSelector } from "../../redux/hooks";
import RegistComp from "./Component";

const RegistContainer = () => {
  const RegistMordal = useAppSelector(
    (state) => state.registMordal.registMordal
  );
  const RegistPass = useAppSelector((state) => state.registPass.registPass);

  const dispatch = useDispatch();

  const RegistDropdownFunc = () => {
    dispatch(registDropdown());
  };

  const RegistMordalFunc = () => {
    dispatch(registMordal());
    console.log(RegistMordal);
  };

  const RegistPassFunc = () => {
    dispatch(registPass());
    dispatch(registDropdown());
  };

  return (
    <RegistComp
      RegistDropdownFunc={RegistDropdownFunc}
      RegistMordalFunc={RegistMordalFunc}
      RegistPassFunc={RegistPassFunc}
      RegistMordal={RegistMordal}
      RegistPass={RegistPass}
    ></RegistComp>
  );
};

export default RegistContainer;
