const numbers = /(?=.*[\d])/g;
const name = /(.[a-z]*)/gi;
const special = /(?=.*\W)/g;
const upperCase = /(?=.*[A-Z])/g;
const lowerCase = /(?=.*[a-z])/g;
const sequenceNumber = /[0-9]{2,}/g;
const sequenceName = /[A-Za-z]{2}/g;
const email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;

export const validateNumbers = (text: string) => numbers.test(text);

export const validateName = (text: string) => name.test(text);

export const validateSpecial = (text: string) => special.test(text);

export const validateLowerCase = (text: string) => lowerCase.test(text);

export const validateUpperCase = (text: string) => upperCase.test(text);

export const validadeCharSequence = (text: string) => !sequenceName.test(text);

export const validadeNumberSequence = (text: string) => !sequenceNumber.test(text);

export const validateLength = (text: string) =>
  text.length >= 8 && text.length <= 18;

export const validatePassword = (password: string) => {
  if (password === "") return false;
  return (
    validateNumbers(password) &&
    validateName(password) &&
    validateSpecial(password) &&
    validateLowerCase(password) &&
    validateUpperCase(password) &&
    validadeCharSequence(password) &&
    validadeNumberSequence(password) &&
    validateLength(password)
  );
};

export const validateEmail = (e_mail: string) => {
  if (e_mail === "") return false;
  return email.test(e_mail);
};
