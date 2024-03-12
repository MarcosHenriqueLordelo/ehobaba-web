export const hasMinimunLenght = (password: string): boolean =>
  password.trim().length >= 8;

export const hasNoSpaces = (password: string): boolean =>
  !password.includes(' ');

export const hasOneUpperCase = (password: string): boolean => {
  const regex = /(?=.*?[A-Z])/;

  return regex.test(password);
};

export const hasOneLowerCase = (password: string): boolean => {
  const regex = /(?=.*?[a-z])/;

  return regex.test(password);
};

export const hasOneDigit = (password: string): boolean => {
  const regex = /(?=.*?[0-9])/;

  return regex.test(password);
};

export const hasOneSpecialCharacter = (password: string): boolean => {
  const regex = /(?=.*?[#?!@$%^&*-])/;

  return regex.test(password);
};
