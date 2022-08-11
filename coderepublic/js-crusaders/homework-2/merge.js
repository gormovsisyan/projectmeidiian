function mergeTwoSortedArrays(arr1, arr2) {
  let mergedArr = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] <= arr2[index2]) {
      mergedArr.push(arr1[index1]);
      index1++;
    } else {
      mergedArr.push(arr2[index2]);
      index2++;
    }
  }

  while (index1 < arr1.length) {
    mergedArr.push(arr1[index1]);
    index1++;
  }

  while (index2 < arr2.length) {
    mergedArr.push(arr2[index2]);
    index2++;
  }

  return mergedArr;
}

function mergeSortedArrays(arr1, arr2, arr3, arr4, arr5) {
  let mergedArr1 = mergeTwoSortedArrays(arr1, arr2);
  let mergedArr2 = mergeTwoSortedArrays(mergedArr1, arr3);
  let mergedArr3 = mergeTwoSortedArrays(mergedArr2, arr4);

  return mergeTwoSortedArrays(mergedArr3, arr5);
}

console.log(mergeSortedArrays([3, 9, 19], [1, 15, 19, 31], [1, 2, 15, 26], [-10, 3, 4, 10], [1, 9, 10]));