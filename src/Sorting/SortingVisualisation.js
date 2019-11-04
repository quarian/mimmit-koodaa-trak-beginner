import React, { useState } from "react";
import { generateRandomArray } from "./sortingUtils";
import { testSortingFunction, testSortingPerformance } from "./sortingTests";
import { TestVisualisation } from "../TestFrameWork/TestVisualisation";
import { naiveSort, insertionSort, quickSort } from "./sortFunctions";

import "./SortingVisualisation.css";

export const SortingPage = () => {
  return (
    <div>
      <h1>Sorting is a common problem faced in all kinds of applications</h1>
      <h2>
        Here are 3 sorting methods to implement. Pay attention to the different
        performance of the implemented algorithms
      </h2>
      <SortingAlgorithmExample
        sortFunction={naiveSort}
        title="Bubble sort algotithm"
      />
      <SortingAlgorithmExample
        sortFunction={quickSort}
        title="Quicksort algotithm"
      />
      <SortingAlgorithmExample
        sortFunction={insertionSort}
        title="Insertion sort algotithm"
      />
    </div>
  );
};

const SortingAlgorithmExample = ({ sortFunction, title }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [arrayLength, setArrayLength] = useState(10);
  const [sortedArray, setSortedArray] = useState(
    generateRandomArray(10, 0, 10)
  );
  const [testResult, setTestResult] = useState(undefined);
  const [performanceTestResult, setPerfomanceTestResult] = useState(
    "No performance test run yet"
  );
  const setValue = (event, setFunction) => {
    const value = parseInt(event.target.value, 10);
    setFunction(value);
  };
  return (
    <div className="SortingExample">
      <h2>Explore {title} </h2>
      <div>
        <label htmlFor="minValue">
          Set the minimum value in the sortable array
        </label>
        <input
          type="number"
          id="minValue"
          value={minValue}
          onChange={event => setValue(event, setMinValue)}
        />
      </div>
      <div>
        <label htmlFor="maxValue">
          Set the maximum value in the sortable array
        </label>
        <input
          type="number"
          id="maxValue"
          value={maxValue}
          onChange={event => setValue(event, setMaxValue)}
        />
      </div>
      <div>
        <label htmlFor="length">Set the length of sortable array</label>
        <input
          type="number"
          id="lentgh"
          value={arrayLength}
          onChange={event => setValue(event, setArrayLength)}
        />
      </div>
      <button
        onClick={() =>
          setSortedArray(generateRandomArray(arrayLength, minValue, maxValue))
        }
      >
        Generate new array for sorting
      </button>
      <div>
        <div>Currently, your array looks like this:</div>
        <div>
          {sortedArray.map((item, index) => (
            <span key={index}> {item} </span>
          ))}
        </div>
      </div>
      <button onClick={() => setSortedArray(sortFunction(sortedArray))}>
        Sort your array with {title}
      </button>
      <div>
        <button
          onClick={() =>
            setTestResult(testSortingFunction(sortFunction, title))
          }
        >
          Run tests on {title}
        </button>
        <div>Test results:</div>
        <div>
          {testResult ? TestVisualisation([testResult]) : "No result yet"}
        </div>
      </div>
      <div>
        <h3>{`Run a performance test on your ${title} algorithm`}</h3>
        <button
          onClick={() =>
            setPerfomanceTestResult(testSortingPerformance(sortFunction, title))
          }
        >
          Test!
        </button>
        <div>{performanceTestResult}</div>
      </div>
    </div>
  );
};
