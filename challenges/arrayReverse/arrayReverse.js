#!/usr/bin/env node
'use strict'
function reverseArray(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}
let arr1 = [1, 2, 3, 4, 5, 6, 7]
reverseArray(arr1);