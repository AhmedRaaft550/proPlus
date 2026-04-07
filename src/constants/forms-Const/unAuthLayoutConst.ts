export const unAuthInputs = [
  {
    key: "email",
    type: "email",
    label: "Email Address",
    placeholder: "john@example.com",
  },
  {
    key: "password",
    type: "password",
    label: "Password",
    placeholder: "••••••••",
  },
];

// CREATE AN ACCOUNT CONSTANTS

export const createAccount = [
  { key: "name", type: "text", label: "Full name", placeholder: "John Doe" },
  ...unAuthInputs,
  {
    key: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "••••••••",
  },
];
