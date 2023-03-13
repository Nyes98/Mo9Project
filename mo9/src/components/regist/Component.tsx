import styled from "styled-components";
import * as yup from "yup";
import { useForm, FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {
  RegistMordal: () => void;
  //   InputId: (e: any) => void;
  //   InputPw: (e: any) => void;
  //   InputPwRepeat: (e: any) => void;
  //   InputEmail: (e: any) => void;
};

const RegistComp: React.FC<Props> = ({
  RegistMordal,
  // InputId,
  // InputPw,
  // InputPwRepeat,
  // InputEmail,
}) => {
  const formSchema = yup.object({
    userId: yup
      .string()
      .required("아이디를 입력해주세요.")
      .max(12, "아이디는 12자리 이하여야 합니다.")
      .min(4, "아이디는 4자리 이상이어야 합니다."),
    userPw: yup
      .string()
      .required("비밀번호를 입력해주세요.")
      .max(15, "비밀번호는 15자리 이하여야 합니다.")
      .min(4, "비밀번호는 4자리 이상이어야 합니다."),
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

  const onSubmit = (data: any) => console.log(data);
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
                <input type="text" {...register("userId")} />
              </div>
              {errors.userId && <div>{errors.userId.message}</div>}
            </InputBox>
            <InputTitle>PassWord</InputTitle>
            <InputBox>
              <div>
                <input type="password" {...register("userPw")} />
              </div>
              {errors.userPw && <div>{errors.userPw.message}</div>}
            </InputBox>
            <InputTitle>PassWord Repeat</InputTitle>
            <InputBox>
              <input type="password" {...register("userPwRepeat")} />
              {errors.userPwRepeat && <div>{errors.userPwRepeat.message}</div>}
            </InputBox>
            <InputTitle>E-mail</InputTitle>
            <InputBox>
              <input type="text" {...register("email")} />
              {errors.email && <div>{errors.email.message}</div>}
            </InputBox>
          </form>
          <RegistBtn>Sign in</RegistBtn>
          <BackBtn onClick={RegistMordal}>Cancle</BackBtn>
        </Formbox>
      </RegistBox>
    </Root>
  );
};

export default RegistComp;

const Formbox = styled.div`
  width: 80%;
  margin: 40px auto;
`;

const InputTitle = styled.div`
  color: white;
  font-size: 1.1rem;
  margin: 10px 0;
`;
const InputBox = styled.div`
  color: red;
  input {
    padding: 10px 0;
    width: 99%;
    border-radius: 10px;
  }
  input:focus {
    outline: none;
  }

  p {
    font-size: 1rem;
    color: pink;
  }
`;

const Root = styled.div`
  display: flex;
`;

const RegistBtn = styled.div`
  color: white;
  margin: 30px auto 10px auto;
  padding: 8px 0;
  text-align: center;
  border-radius: 10px;
  background-color: #6256f2;
`;
const BackBtn = styled.div`
  padding: 8px 0;
  border-radius: 10px;
  text-align: center;
  margin: 10px auto;
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
