const numbers = /(?=.*[\d])/g;
const name = /(.[a-z]*)/gi;
const special = /(?=.*\W)/g;
const upperCase = /(?=.*[A-Z])/g;
const lowerCase = /(?=.*[a-z])/g;
const sequenceNumber = /(?=[0-9]{2,})/g;
const sequenceName = /(?= [a-z]{2,})/gi;
const email = /^[\w.]+\@[\w.]+\.[a-z]{1,}$/gi;
export const validateNumbers = (text: string) => numbers.test(text);

export const validateName = (text: string) => name.test(text);

export const validateSpecial = (text: string) => special.test(text);

export const validateLowerCase = (text: string) => lowerCase.test(text);

export const validateUpperCase = (text: string) => upperCase.test(text);

export const validadeSequence = (text: string) => {
  return !sequenceNumber.test(text) && !sequenceName.test(text);
};

export const validateLength = (text: string) =>
  text.length >= 8 && text.length <= 18;

export const validateLowerUpperNumber = (value: string) =>
  numbers.test(value) && lowerCase.test(value) && upperCase.test(value);

export const validatePassword = (password: string) => {
  if (password === "") return false;
  return (
    validateLength(password) &&
    validateLowerUpperNumber(password) &&
    validateSpecial(password) &&
    validadeSequence(password)
  );
};

export const validateEmail = (eMail: string) => {
  if (eMail === "") return false;
  return email.test(eMail);
};
