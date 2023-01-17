/* eslint-disable no-useless-escape */
const isPasswordCheckValid = (passwordCheck: string) => {
  const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return passwordRule.test(passwordCheck);
};

export default isPasswordCheckValid;
