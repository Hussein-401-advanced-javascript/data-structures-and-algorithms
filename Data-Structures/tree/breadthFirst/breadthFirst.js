'use strict';

const Tree = require('../tree').BinaryTree;


class breadthFirst extends Tree {
    
    findBreadthFirst(){
    let results = [];
    let array = [];

    if(!this.root){
      return 'empty tree';
    }

    array.push(this.root);
    while(array.length){
      let node = array.shift();
      results.push(node.value);
      if(node.left !==null) array.push(node.left);
      if (node.right !== null) array.push(node.right);
    }
    return results;
  }
}
module.exports = breadthFirst;