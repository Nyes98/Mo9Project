import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

export const userRegist = async (registInfo: object) => {
  return await request.post("/user/regist", { registInfo: registInfo });
};

export const userLogin = async (inputId: string, inputPw: string) => {
  return await request.post("/user/login", {
    inputId: inputId,
    inputPw: inputPw,
  });
};

export const autoLogin = async () => {
  return await request.post("/user/autologin");
};

export const logout = async () => {
  return await request.post("/user/logout");
};
