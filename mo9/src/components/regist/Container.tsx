import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registDropdown } from "../../redux/click";
import { useAppSelector } from "../../redux/hooks";
import RegistComp from "./Component";
// import { signUpValidation } from "../../yup";

const RegistContainer = () => {
  const dispatch = useDispatch();

  const RegistMordal = () => {
    dispatch(registDropdown());
  };

  return <RegistComp RegistMordal={RegistMordal}></RegistComp>;
};

export default RegistContainer;
