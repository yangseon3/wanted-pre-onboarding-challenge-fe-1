/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as style from "./SignIn.styles";
import { handleSignIn } from "../../apis/apis";
import { useMutation } from "react-query";
import { LOCAL_ERROR } from "../../lib/error";
import isEmailValidate from "../../utils/isEmailValid";
import isPasswordValidate from "../../utils/isPasswordValid";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInfo;

  const userInfoHandler = (e: { target: { name: any, value: any } }) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const formValidator = () => {
    const isEmailValid = isEmailValidate(email);
    const isPasswordValid = isPasswordValidate(password);
    setErrorMessage("email", isEmailValid ? "" : LOCAL_ERROR.EMAIL);
    setErrorMessage("password", isPasswordValid ? "" : LOCAL_ERROR.PASSWORD);
    return ![isEmailValid, isPasswordValid].includes(false);
  };

  const navigate = useNavigate();

  const handleClickUserInfo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    postUserInfo.mutate(userInfo);
  };

  const postUserInfo = useMutation(handleSignIn, {
    onSuccess: () => {
      navigate("/Main");
    },
    onError: () => {
      alert(LOCAL_ERROR.SIGN_IN);
      formValidator();
    },
  });

  return (
    <style.SignInHeader>
      <style.SignInPhrases>로그인</style.SignInPhrases>
      <style.SignInForm>
        <style.SignInInput type="text" name="email" value={email} placeholder="User Email" onChange={userInfoHandler} />
        <style.SignInInput
          type="password"
          name="password"
          value={password}
          placeholder="User Password"
          onChange={userInfoHandler}
        />
        <style.SignInButton onClick={handleClickUserInfo}>Sign In</style.SignInButton>
        {isEmailValidate(email) || email.length === 0 || (
          <style.SignInContents>"이메일 형식에 맞게 입력해 주세요"</style.SignInContents>
        )}
        {isPasswordValidate(password) || password.length === 0 || (
          <style.SignInContents>"비밀번호는 8자리 이상 입력해 주세요"</style.SignInContents>
        )}
      </style.SignInForm>
      <div>아직 계정이 없나요?</div>
      <Link to="/SignUp">회원가입</Link>
      <style.SignInFooter>Ⓒ 2023. To Become A Front-End Developer</style.SignInFooter>
    </style.SignInHeader>
  );
};

export default SignIn;
function setErrorMessage(arg0: string, arg1: any) {
  throw new Error("Function not implemented.");
}
