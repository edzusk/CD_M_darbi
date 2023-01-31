/* eslint-disable no-undef */
import {
  validateEmail, validatePassword, validateName, handleValidator,
} from './utils/validators/validators';

$(document).ready(() => {
  $('.inputForm').submit((event) => {
    const name = $('.js-name-input').val();
    const email = $('.js-email-input').val();
    const password = $('.js-password-input').val();

    if (!handleValidator(validateName(name))
    || !handleValidator(validateEmail(email))
    || !handleValidator(validatePassword(password))) {
      event.preventDefault();
    }
  });
});
