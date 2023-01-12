/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import * as style from "./SignUp.styles";
import { Link, useNavigate } from "react-router-dom";
import { SignUpController } from "../../api/SignUp";
import { useMutation } from "react-query";
import { SignUpForm } from "../../types/signUp";

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

  const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const isEmailValid = emailRegex.test(email);
  const ispasswordValid = passwordRegex.test(password);
  const isPasswordCheckValid = passwordRegex.test(passwordCheck);

  const handleClickUserInfo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    postUserInfo.mutate(userInfo);
  };

  const postUserInfo: SignUpForm = useMutation(SignUpController, {
    onMutate: () => {},
    onSuccess: (data) => {
      const [err, result] = data;
      if (!err) {
        if (result.data[0] === true) {
          navigate("/LogIn");
        } else {
          console.log(result);
        }
      }
    },
  });

  console.log(postUserInfo);
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

        {isEmailValid || email.length === 0 || (
          <style.SignUpContents>"이메일 형식에 맞게 입력해 주세요"</style.SignUpContents>
        )}
        {ispasswordValid || password.length === 0 || (
          <style.SignUpContents>"비밀번호는 8자리 이상 입력해 주세요"</style.SignUpContents>
        )}
        {isPasswordCheckValid || passwordCheck.length === 0 || (
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
