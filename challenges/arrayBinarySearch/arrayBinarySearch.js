'use strict'
function BinarySearch(arr, x) {

    let start = 0, end = arr.length - 1;



    while (start <= end) {
        for (let i = 0; i <= arr.length; i++) {

            let mid = Math.floor((start + end) / 2);

            if (arr[mid] === x) return arr[mid];

            else if (arr[mid] < x)
                start = mid + 1;
            else
                end = mid - 1;
        }
    }

    return -1;

}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


BinarySearch(arr, 1)
BinarySearch(arr, 111)

// Time Complexity: O(logN)