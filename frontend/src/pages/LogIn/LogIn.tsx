/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as style from "./LogIn.styles";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const isEmailValid = emailRegex.test(email);
  const ispasswordValid = passwordRegex.test(password);
  return (
    <style.LogInHeader>
      <style.LogInPhrases>로그인</style.LogInPhrases>
      <style.LogInForm>
        <style.LogInInput
          type="text"
          placeholder="User Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <style.LogInInput
          type="password"
          placeholder="User Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <style.LogInButton>Sign In</style.LogInButton>
        {isEmailValid || email.length === 0 || (
          <style.LogInContents>"이메일 형식에 맞게 입력해 주세요"</style.LogInContents>
        )}
        {ispasswordValid || password.length === 0 || (
          <style.LogInContents>"비밀번호는 8자리 이상 입력해 주세요"</style.LogInContents>
        )}
      </style.LogInForm>
      <div>아직 계정이 없나요?</div>
      <Link to="/SignUp">회원가입</Link>
      <style.LogInFooter>Ⓒ 2023. To Become A Front-End Developer</style.LogInFooter>
    </style.LogInHeader>
  );
};

export default LogIn;
