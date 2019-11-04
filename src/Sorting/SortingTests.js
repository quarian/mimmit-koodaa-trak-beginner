import { generateRandomArray } from "./sortingUtils";
import { testSorting } from "../TestFrameWork/testFunctions";

export const testSortingFunction = (sortingFunction, functionName) => {
  const arrayToSort = generateRandomArray(1000, 0, 1000);
  const sortedArray = sortingFunction(arrayToSort);
  return testSorting(sortedArray, `Testing ${functionName}`);
};
