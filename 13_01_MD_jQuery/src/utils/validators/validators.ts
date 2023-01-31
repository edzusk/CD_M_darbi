/* eslint-disable no-useless-escape */
const validateName = <Type>(name:Type) => {
  const nameToValidate = String(name);
  const nameRegEx = /^[a-zA-Z]+$/;
  if (nameToValidate.length < 2 || nameToValidate.length > 50) {
    return ('Name length should be 2-50 characters!');
  }
  if (!nameRegEx.test(nameToValidate)) {
    return ('Name must contain only letters!');
  }
  return true;
};
const validateEmail = <Type>(email:Type) => {
  const emailToValidate = String(email);
  const emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!emailRegEx.test(emailToValidate)) {
    return ('Email must be in proper format');
  }
  return true;
};
const validatePassword = <Type>(password: Type) => {
  const passwordTovalidate = String(password);
  const passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  if (passwordTovalidate.length < 8) {
    return ('Password must be at least 8characters long!');
  }
  if (!passwordRegEx.test(passwordTovalidate)) {
    return ('Password must contain at least 1 number and 1 special character (!, @, #, $, %, ^, &, *)!');
  }
  return true;
};

// eslint-disable-next-line consistent-return
const handleValidator = (answer: boolean | string):void | boolean => {
  if (typeof answer === 'string') {
    alert(answer);
  } else {
    return answer;
  }
};

export {
  validateEmail,
  validatePassword,
  validateName,
  handleValidator,
};
