import styled from "styled-components";

export const SignInHeader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SignInPhrases = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const SignInInput = styled.input`
  width: 380px;
  height: 40px;
  margin-top: 15px;
  border-radius: 10px;
  text-indent: 20px;
`;

export const SignInButton = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 10px;
  background-color: blue;
  opacity: 0.5;
  color: white;
  border-radius: 10px;
  border-color: blue;
`;

export const SignInFooter = styled.div`
  margin-top: 30px;
`;

export const SignInContents = styled.div`
  color: red;
`;
