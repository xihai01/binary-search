import { render, screen } from "@testing-library/react";
import App from "./App";
import generateNumbers from "./helpers/generateNumbers";

test("generate array of random numbers", () => {
  // dut === function to generate random sorted array of numbers
  // input === none;
  // output === sorted array of rand. numbers
  // assert === array type
  // assert === 56 numbers in array
  // assert === numbers are sorted
  let sorted = true;
  const result = generateNumbers();
  expect(typeof(result)).toBe("array");
  expect(result).toHaveLength(56);
  for (let i = 1, j = 0; i < result.length; i++, j++) {
    if (result[i] - result[j] < 0) {
      sorted = false;
      return;
    }
  }
  expect(sorted).toBeTruthy();
});
