'use strict'
function BinarySearch  (arr, key){
    for (let i =0 ; i<= arr.length ; i++){
        if (arr[i] === key){
            return i;
        } 
       
    }
     return -1;
}
console.log(BinarySearch([1,2,3,4,5,6],6))
console.log(BinarySearch([1,2,3,4,5,6],54))