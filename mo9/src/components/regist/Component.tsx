import styled from "styled-components";
import * as yup from "yup";
import { ErrorMsg } from "../../redux/mordal";
import { useForm, FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegist } from "../../api";
import RegistErrorMordalContainer from "../mordal/RegistError/Container";
import RegistPassMordalContainer from "../mordal/RegistPass/Container";
import { useDispatch } from "react-redux";

type Props = {
  RegistDropdownFunc: () => void;
  RegistMordalFunc: () => void;
  RegistPassFunc: () => void;
  RegistMordal: boolean;
  RegistPass: boolean;
};

const RegistComp: React.FC<Props> = ({
  RegistMordalFunc,
  RegistDropdownFunc,
  RegistPassFunc,
  RegistMordal,
  RegistPass,
}) => {
  const dispatch = useDispatch();

  const formSchema = yup.object({
    userId: yup
      .string()
      .required("아이디를 입력해주세요.")
      .max(12, "아이디는 12자리 이하여야 합니다.")
      .min(4, "아이디는 4자리 이상이어야 합니다.")
      .matches(/^[A-Za-z\d]{4,15}$/, "영문 또는 숫자만 사용 가능합니다."),
    userPw: yup
      .string()
      .required("비밀번호를 입력해주세요.")
      .max(15, "비밀번호는 15자리 이하여야 합니다.")
      .min(4, "비밀번호는 4자리 이상이어야 합니다.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,15}$/,
        "영문과 숫자를 반드시 포함해주세요."
      ),
    userPwRepeat: yup
      .string()
      .oneOf([yup.ref("userPw")], "비밀번호가 일치하지 않습니다."),
    email: yup
      .string()
      .email("이메일 형식에 맞지 않습니다.")
      .required("이메일을 입력해주세요."),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  }: {
    register: any;
    handleSubmit: any;
    watch: any;
    formState: { errors: any };
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    const user = await userRegist(data);
    console.log(user.data.msg);
    if (user.data.status != 200) {
      RegistMordalFunc();
      dispatch(ErrorMsg(user.data.msg));
    } else {
      RegistPassFunc();
    }
  };
  return (
    <Root>
      <Background></Background>
      <Triangle></Triangle>
      <RegistBox>
        <Formbox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputTitle>ID</InputTitle>
            <InputBox>
              <div>
                <input
                  type="text"
                  {...register("userId")}
                  onInput={(e: any) => {}}
                />
              </div>
              {errors.userId && (
                <ErrorMsgBox>{errors.userId.message}</ErrorMsgBox>
              )}
            </InputBox>
            <InputTitle>Password</InputTitle>
            <InputBox>
              <div>
                <input type="password" {...register("userPw")} />
              </div>
              {errors.userPw && (
                <ErrorMsgBox>{errors.userPw.message}</ErrorMsgBox>
              )}
            </InputBox>
            <InputTitle>Password repeat</InputTitle>
            <InputBox>
              <input type="password" {...register("userPwRepeat")} />
              {errors.userPwRepeat && (
                <ErrorMsgBox>{errors.userPwRepeat.message}</ErrorMsgBox>
              )}
            </InputBox>
            <InputTitle>E-mail</InputTitle>
            <InputBox>
              <input type="text" {...register("email")} />
              {errors.email && (
                <ErrorMsgBox>{errors.email.message}</ErrorMsgBox>
              )}
            </InputBox>
            <RegistBtn>Regist</RegistBtn>
          </form>
          <BackBtn onClick={RegistDropdownFunc}>Cancle</BackBtn>
        </Formbox>
      </RegistBox>
      {RegistMordal ? <RegistErrorMordalContainer /> : <></>}
      {RegistPass ? <RegistPassMordalContainer /> : <></>}
    </Root>
  );
};

export default RegistComp;

const Mordal = styled.div``;
const ErrorMsgBox = styled.div`
  position: absolute;
`;

const Formbox = styled.div`
  width: 80%;
  margin: 40px auto;
`;

const InputTitle = styled.div`
  color: white;
  font-size: 0.9rem;
  margin: 2px 0;
`;
const InputBox = styled.div`
  color: red;
  margin-bottom: 30px;
  input {
    padding: 10px 5px;
    width: 96%;
    border-radius: 10px;
  }
  input:focus {
    outline: none;
  }
`;

const Root = styled.div`
  display: flex;
`;

const RegistBtn = styled.button`
  color: white;
  margin: 20px auto 0 auto;
  width: 100%;
  padding: 13px;
  text-align: center;
  border-radius: 10px;
  background-color: #6256f2;
  border: none;
`;
const BackBtn = styled.div`
  border-radius: 10px;
  padding: 10px;

  text-align: center;
  margin: 10px auto 0 auto;
  background-color: #ff0000;
`;
const Triangle = styled.div`
  position: absolute;
  top: 5vh;
  left: 17.4vw;
  width: 0;
  height: 0;
  border-bottom: 30px solid transparent;
  border-top: 30px solid transparent;
  border-right: 50px solid #17181f;
`;

const Background = styled.div`
  width: 50%;
  height: 60vh;
  background-image: url("/imgs/regist.webp");
  background-size: cover;
`;
const RegistBox = styled.div`
  width: 50%;

  background-color: #17181f;
`;
