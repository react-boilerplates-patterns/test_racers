export const compose = (...functions) => (value) =>
  functions.reduceRight((arg, fn) => fn(arg), value);
