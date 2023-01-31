import { validateEmail, validateName, validatePassword } from './validators';

describe('validateName', () => {
  it('should show alert text if too short', () => {
    const answer = validateName('a');
    expect(answer).toEqual('Name length should be 2-50 characters!');
  });
  it('should show alert text if contain non letter characters', () => {
    const answer = validateName('asdas1');
    expect(answer).toEqual('Name must contain only letters!');
  });
  it('should show alert text if too short', () => {
    const answer = validateName('Jony');
    expect(answer).toEqual(true);
  });
});

describe('validateEmail', () => {
  it('should validate a valid email address', () => {
    const answer = validateEmail('example@example.com');
    expect(answer).toEqual(true);
  });

  it('should show an alert text for an invalid email address', () => {
    const answer = validateEmail('not-an-email');
    expect(answer).toEqual('Email must be in proper format');
  });
  it('should show an alert text if @ missing', () => {
    const answer = validateEmail('emailemail.com');
    expect(answer).toEqual('Email must be in proper format');
  });

  it('should convert non-string inputs to a string', () => {
    const answer = validateEmail(12345);
    expect(answer).toEqual('Email must be in proper format');
  });
});

describe('validatePassword', () => {
  it('should retrun alert text if too short', () => {
    const answer = validatePassword('qwe12#');
    expect(answer).toEqual('Password must be at least 8characters long!');
  });

  it('should return alert text if dont conain number', () => {
    const answer = validatePassword('qwertyyui##');
    expect(answer).toEqual('Password must contain at least 1 number and 1 special character (!, @, #, $, %, ^, &, *)!');
  });

  it('should return alert text if dont conain special character', () => {
    const answer = validatePassword('qwertyyui11123');
    expect(answer).toEqual('Password must contain at least 1 number and 1 special character (!, @, #, $, %, ^, &, *)!');
  });
  it('should return true if valid password', () => {
    const answer = validatePassword('qwertyyui111#$23');
    expect(answer).toEqual(true);
  });
});
