/* eslint-disable no-useless-escape */
const isEmailValidate = (email: string) => {
  const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
};

export default isEmailValidate;
