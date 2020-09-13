#!/usr/bin/env node
'use strict'
function insertShiftArray1() {
  let a = ['a', 'b', 'c', 'd'];
  a[Math.floor(a.length / 2)] = 'e';
  console.log(a)
}

insertShiftArray1()

function insertShiftArray(arr, val) {
  let index = Math.ceil(arr.length / 2);
  arr.splice(index, 0, val);
  return arr;
}

let numArr = [1, 2, 3, 4];

console.log('before ', numArr);
console.log('after ', insertShiftArray(numArr, 1));