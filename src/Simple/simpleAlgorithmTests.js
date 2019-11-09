import { testEquality } from "../TestFrameWork/testFunctions";
import { findMax } from "./simpleAlgorithms";

export const testFindMaxAlgorithm = findMaxAlgorithm => [
  testEquality(findMax([]), undefined, "Test on empty array"),
  testEquality(findMax([1]), 1, "Test on one element array"),
  testEquality(findMax([1, 3, 4, 2]), 4, "Test max value in the middle"),
  testEquality(findMax([10, 3, 4, 2]), 10, "Test max value in the beginning"),
  testEquality(findMax([1, 3, 4, 3, 10]), 10, "Test max value in the end")
];
