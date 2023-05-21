import { gen_pass } from "../scripts/generate";

test("assert password lenght", () => {
  const password = gen_pass(4, true, true, true, true);
  expect(password.length).toBe(4);
});

test("password include capital letters", () => {
  const password = gen_pass(4, true, true, true, true);
  expect(/[A-Z]/.test(password)).toBe(true);
});

test("password does not contain capital letters", () => {
  const password = gen_pass(4, false, true, true, true);
  expect(/[A-Z]/.test(password)).toBe(false);
});
