import { generateNumbers } from "./helpers/generateNumbers";

test("generate array of objects", () => {
  // dut === function to generate random sorted array of objects
  // input === none;
  // output === [{number: 24, active: true}]
  // assert === array type
  // assert === 56 numbers in array
  // assert === numbers are sorted
  // assert === numbers are active
  let sorted = true;
  const result = generateNumbers();
  expect(typeof result).toBe("object");
  expect(result).toHaveLength(56);
  for (let i = 1, j = 0; i < result.length; i++, j++) {
    if (result[i].number - result[j].number < 0) {
      sorted = false;
      break;
    }
  }
  expect(sorted).toBeTruthy();
  for (let i = 0; i < result.length; i++) {
    if (!result[i].active) {
      sorted = false;
      break;
    }
  }
  expect(sorted).toBeTruthy();
});
