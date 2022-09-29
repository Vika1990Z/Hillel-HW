// IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

const isEqual = (firstArray, secondArray) => {
    if (firstArray.length != secondArray.length) return false;  
    else {
        for (let i = 0; i < firstArray.length; i++) {
            if (firstArray[i] !== secondArray[i]) return false;
        }
    }
    return true;
  }
  
  const arr1 = [1, 2, 3, 4];
  const arr2 = [1, 2, 3, 4];
  const arr3 = [1, 2, 3, 5];
  const arr4 = [1, 2, 3, 4, 5];
  console.log(isEqual(arr1, arr2)); // true
  console.log(isEqual(arr1, arr3)); // false
  console.log(isEqual(arr1, arr4)); // false