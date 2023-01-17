/* eslint-disable no-useless-escape */
const isPasswordValidate = (password: string) => {
  const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return passwordRule.test(password);
};

export default isPasswordValidate;
