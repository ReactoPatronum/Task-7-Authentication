const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const usernameValidation = {
  required: "Username is required",
  minLength: {
    value: 3,
    message: "Username must be at least 3 characters",
  },
  maxLength: {
    value: 20,
    message: "Username cannot exceed 20 characters",
  },
};

export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address",
  },
};

export const passwordValidation = {
  required: "Password is required",
  pattern: {
    value: passwordRegex,
    message:
      "Password must be at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number",
  },
};
