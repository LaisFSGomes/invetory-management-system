const numbers = /(?=.*[\d])/g;
const name = /(.[a-z]*)/gi;
const special = /?=.*\W/g;
const upperCase = /(?=.*[A-Z])/g;
const lowerCase = /(?=.*[a-z])/g;

export const validateNumbers = (text: string) => numbers.test(text);

export const validateName = (text: string) => name.test(text);

export const validateSpecial = (text: string) => special.test(text);

export const validateLowerCase = (text: string) => lowerCase.test(text);

export const validateUpperCase = (text: string) => upperCase.test(text);

export const validateLength = (text: string) => (text.length >= 8 ) && (text.length <= 18);

export const validateLowerUpperNumber = (value: string) =>
  numbers.test(value) && lowerCase.test(value) && upperCase.test(value);

export const validatePassword = (password: string) => {
  if (password === "") return false;
  return validateLength(password) && validateLowerUpperNumber(password) && validateSpecial(password);
};
