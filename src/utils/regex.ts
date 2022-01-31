/**
 * @summary
 * Regex for password with at least
 * one uppercase letter, one lowercase letter,
 * one number and one special character.
 */
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{0,}$/;
