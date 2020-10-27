
'use strict';

let Graph = require('./graph').Graph;


class Depthfirst extends Graph {

  constructor() {
    super();
  }

  dfs(node) {
    if (node.value == null || node == undefined) {

      return 'wrong input';
    }

    let arr = [];
    let complete = [];
    arr.push(node);


    while (arr.length > 0) {
      let current = arr.pop();
      
      complete.push(current.value);
      let ni = this.getNeighbours(current);

      for (let k of ni) {
        if (!arr.includes(k.vertex))
          arr.push(k.vertex);
      }
      console.log(arr);

    }
    return complete;

  }
}
module.exports = Depthfirst;
