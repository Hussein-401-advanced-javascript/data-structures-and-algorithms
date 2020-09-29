const Tree = require('../tree').BinaryTree;

class FizzBuzzTree extends Tree {
  if(tree){
    if(tree.root){
      const result = tree;
      const _traversal = (node)=>{
        if(!(node.value % 5) && !(node.value % 3)){
          node.value = 'FizzBuzz';
        }else if (!(node.value % 5)){
          node.value = 'Buzz';
        }else if(!(node.value % 3)){
          node.value = 'Fizz';
        }else{
          node.value = `${node.value}`;
        }
        if(node.left) _traversal (node.left);
        if(node.right) _traversal (node.right);    
      };
      _traversal(result.root);
      return result;
    }else{
      return 'the tree is empty';
    }
  }
  }
  