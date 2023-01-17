/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import * as style from "./SignUp.styles";
import { Link, useNavigate } from "react-router-dom";
import { handleSignUp } from "../../apis/apis";
import { useMutation } from "react-query";
import { LOCAL_ERROR } from "../../lib/error";
import isEmailValidate from "../../utils/isEmailValid";
import isPasswordValidate from "../../utils/isPasswordValid";
import isPasswordCheckValid from "../../utils/isPasswordValid";

const SignUp = () => {
  const [passwordCheck, setPasswordCheck] = useState("");

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const passwordCheckHandler = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPasswordCheck(e.target.value);
  };

  const userInfoHandler = (e: { target: { name: any, value: any } }) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const { email, password } = userInfo;

  const formValidator = () => {
    const isEmailValid = isEmailValidate(email);
    const isPasswordValid = isPasswordValidate(password);
    const isPasswordCheck = isPasswordCheckValid(password);
    setErrorMessage("email", isEmailValid ? "" : LOCAL_ERROR.EMAIL);
    setErrorMessage("password", isPasswordValid ? "" : LOCAL_ERROR.PASSWORD);
    setErrorMessage("passwordCheck", isPasswordCheck ? "" : LOCAL_ERROR.PASSWORD_MATCH);
    return ![isEmailValid, isPasswordValid, isPasswordCheck].includes(false);
  };

  const handleClickUserInfo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    postUserInfo.mutate(userInfo);
  };

  const postUserInfo = useMutation(handleSignUp, {
    onSuccess: () => {
      alert("회원가입이 완료되었습니다");
      navigate("/SignIn");
    },
    onError: () => {
      alert(LOCAL_ERROR.SIGN_UP);
      formValidator();
    },
  });

  return (
    <style.SignUpHeader>
      <style.SignUpPhrases>회원가입</style.SignUpPhrases>
      <style.SignUpForm>
        <style.SignUpInput
          type="text"
          title="Email"
          name="email"
          value={email}
          placeholder="User Email"
          onChange={userInfoHandler}
        />
        <style.SignUpInput
          type="password"
          title="Password"
          name="password"
          value={password}
          placeholder="User Password"
          onChange={userInfoHandler}
        />
        <style.SignUpInput
          type="password"
          title="PasswordCheck"
          name="passwordCheck"
          value={passwordCheck}
          placeholder="User Password (Check)"
          onChange={passwordCheckHandler}
        />
        <style.SignUpButton onClick={handleClickUserInfo}>SignUp</style.SignUpButton>
        {isEmailValidate(email) || email.length === 0 || (
          <style.SignUpContents>"이메일 형식에 맞게 입력해 주세요"</style.SignUpContents>
        )}
        {isPasswordValidate(password) || password.length === 0 || (
          <style.SignUpContents>"비밀번호는 8자리 이상 입력해 주세요"</style.SignUpContents>
        )}
        {isPasswordCheckValid(passwordCheck) || passwordCheck.length === 0 || (
          <style.SignUpContents> "비밀번호가 서로 맞지 않습니다."</style.SignUpContents>
        )}
      </style.SignUpForm>
      <div>이미 계정이 있나요?</div>
      <Link to="/SignIn">로그인</Link>
      <style.SignInFooter>Ⓒ 2023. To Become A Front-End Developer</style.SignInFooter>
    </style.SignUpHeader>
  );
};

export default SignUp;
function setErrorMessage(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}
