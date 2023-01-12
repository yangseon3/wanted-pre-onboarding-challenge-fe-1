import styled from "styled-components";

export const LogInHeader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LogInPhrases = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const LogInInput = styled.input`
  width: 380px;
  height: 40px;
  margin-top: 15px;
  border-radius: 10px;
  text-indent: 20px;
`;

export const LogInButton = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 10px;
  background-color: blue;
  opacity: 0.5;
  color: white;
  border-radius: 10px;
  border-color: blue;
`;

export const LogInFooter = styled.div`
  margin-top: 30px;
`;

export const LogInContents = styled.div`
  color: red;
`;
