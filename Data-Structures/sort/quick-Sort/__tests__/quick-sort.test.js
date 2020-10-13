const quickSort = require('../quick-Sort');
const array1 = [5,7,8,2,1,4,9,10,3,6];
const array2 = [5,12,7,5,5,7];
const array3 = [2,3,5,7,13,11,-1];


describe('iteration Sorting for arrays',()=>{
  it('the iteration sort algoritm return the array sorted incremently',()=>{
    expect(quickSort(array1,  0 , 9)).toEqual([1,2,3,4,5,6,7,8,9,10]);
    expect(quickSort(array2, 0, 5)).toEqual([5,5,5,7,7,12]);
    expect(quickSort(array3, 0, 6)).toEqual([-1,2,3,5,7,11,13]);
  });
});
