import * as yup from "yup";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

// export const signUpValidation = yup.object({
//   userId: yup
//     .string()
//     .required("아이디를 입력해주세요.")
//     .max(12, "아이디는 12자리 이하여야 합니다.")
//     .min(4, "아이디는 4자리 이상이어야 합니다."),

//   password: yup
//     .string()
//     .required("비밀번호를 입력해주세요.")
//     .max(15, "비밀번호는 15자리 이하여야 합니다.")
//     .min(4, "비밀번호는 4자리 이상이어야 합니다."),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
//   email: yup
//     .string()
//     .email("이메일 형식에 맞지 않습니다.")
//     .required("이메일을 입력해주세요."),
// });
