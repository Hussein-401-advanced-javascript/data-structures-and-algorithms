'use strict';

const Tree = require('../tree').BinaryTree;


class MaximumTree extends Tree {

    find_maximum_value(){
        let maxValue = 0;
        if(this.root){
          const traversal = (node) =>{
            if (maxValue < node.value) {
              maxValue = node.value;
            }
            if(node.left) traversal (node.left);
            if(node.right) traversal (node.right);
          };
          traversal(this.root);
          return maxValue;
        }else{
          return 'the tree is empty';
        }
      }
    }
module.exports = MaximumTree;