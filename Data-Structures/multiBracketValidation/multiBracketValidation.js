'use strict';


let multiBracketValidation = function (input) {
    let bracketRegex = /[{}()[\]*]/g
    let bracketArr = input.match(bracketRegex);
    let arr = [];
    let obj = {
      '[': ']',
      '{': '}',
      '(': ')',
    };
    for (let i = 0; i < bracketArr.length; i++) {
      if (bracketArr[i] === '(' || bracketArr[i] === '{' || bracketArr[i] === '[' ) {
        arr.push(bracketArr[i]);
      } else {
        let last = arr.pop();
        if (bracketArr[i] !== obj[last]) {
          return false;
        }
      }
    }
    if (arr.length !== 0) {
      return false;
    }
    return true;
  };

module.exports = multiBracketValidation