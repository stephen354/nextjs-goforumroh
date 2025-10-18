const allRules = {
  length: {
    label: "Use at least 10 characters",
    test: (pw) => pw.length >= 10,
  },
  uppercase: {
    label: "Include an uppercase letter (A-Z)",
    test: (pw) => /[A-Z]/.test(pw),
  },
  lowercase: {
    label: "Include a lowercase letter (a-z)",
    test: (pw) => /[a-z]/.test(pw),
  },
  number: {
    label: "Include a number (0-9)",
    test: (pw) => /[0-9]/.test(pw),
  },
  symbol: {
    label: "Include a special character (!@#$%)",
    test: (pw) => /[^A-Za-z0-9]/.test(pw),
  },
 
};

export function getPasswordRules(keys = []) {
  return keys.map((key) => ({
    key,
    ...allRules[key]
  }));
}

