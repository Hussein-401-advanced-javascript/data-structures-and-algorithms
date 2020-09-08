'use strict'
function BinarySearch  (arr, key){
    for (let i =0 ; i<= arr.lengt ; i++){
        if (arr[i] === key){
            return 1;
        } 
       
    }
     return -1;
}
let array =[1,2,3,4,5,6]
console.log(BinarySearch([1,2,3,4,5,6],54))