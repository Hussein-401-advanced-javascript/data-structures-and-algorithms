#!/usr/bin/env node
'use strict';
function BinarySearch(array, searchKey, start, end) {

  if (start > end) return false; 
 
  let mid=Math.floor((start + end)/2); 
 
  if (array[mid]===searchKey) return array[mid]; 
        
  if(array[mid] > searchKey)  
    return BinarySearch(array, searchKey, start, mid-1); 
  else

    return BinarySearch(array, searchKey, mid+1, end); 
} 
console.log(BinarySearch);
// 

