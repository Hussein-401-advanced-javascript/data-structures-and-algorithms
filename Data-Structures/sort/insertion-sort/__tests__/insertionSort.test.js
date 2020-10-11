const insertionSort = require('../insertion-sort');
const array1 = [20,18,12,8,5,-2];
const array2 = [5,12,7,5,5,7];
const array3 = [2,3,5,7,13,11];


describe('iteration Sorting for arrays',()=>{
  it('the iteration sort algoritm return the array sorted incremently',()=>{
    expect(insertionSort(array1)).toEqual([-2,5,8,12,18,20]);
    expect(insertionSort(array2)).toEqual([5,5,5,7,7,12]);
    expect(insertionSort(array3)).toEqual([2,3,5,7,11,13]);
  });
});
