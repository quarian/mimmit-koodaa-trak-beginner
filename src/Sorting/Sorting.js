import React, { useState } from "react";

export const SortingPage = () => {
  return (
    <div>
      <div>Text here about implementing different sorting algorithms</div>
      <SortingAlgorithmExample
        sortFunction={naiveSort}
        title="Naive sorting algotithm"
      />
      <SortingAlgorithmExample
        sortFunction={quickSort}
        title="Quicksort algotithm"
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
  const setValue = (event, setFunction) => {
    const value = parseInt(event.target.value, 10);
    setFunction(value);
  };
  return (
    <div>
      <div>Explore {title} </div>
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
          {sortedArray.map(item => (
            <span> {item} </span>
          ))}
        </div>
      </div>
      <button onClick={() => setSortedArray(sortFunction(sortedArray))}>
        Sort your array with {title}
      </button>
    </div>
  );
};

const cloneArray = array => {
  return array.slice(0);
};

const generateRandomArray = (length, minValue, maxValue) => {
  let array = new Array(length);
  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * (maxValue - minValue) + minValue);
  }
  return array;
};

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const naiveSort = array => {
  const newArray = cloneArray(array);
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (j > 0 && newArray[j] < newArray[j - 1]) {
        swap(newArray, j, j - 1);
      }
    }
  }
  console.log(newArray);
  return newArray;
};

const quickSort = array => {
  const newArray = cloneArray(array);
  const partition = (array, low, high) => {
    let pivot = array[high];
    let i = low;
    for (let j = low; j <= high; j++) {
      if (array[j] < pivot) {
        swap(array, i, j);
        i = i + 1;
      }
    }
    swap(array, i, high);
    return i;
  };
  const sort = (subArray, low, high) => {
    if (low < high) {
      const p = partition(subArray, low, high);
      sort(subArray, low, p - 1);
      sort(subArray, p + 1, high);
    }
  };
  sort(newArray, 0, newArray.length - 1);
  return newArray;
};
