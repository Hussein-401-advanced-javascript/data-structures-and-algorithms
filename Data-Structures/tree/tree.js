'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    
    constructor(root = null) {
        this.root = root;
    }
    // Root - Left - Right
    preOrder() {
        let output = [];
        let _traverse = (node) => {
            output.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        }
        _traverse(this.root);
        return output;
    }

    // Left - Root - Right
    inOrder() {
        let output = [];
        let _traverse = (node) => {
            if (node.left) _traverse(node.left);
            output.push(node.value);
            if (node.right) _traverse(node.right);
        }

        _traverse(this.root);
        return output;
    }

    // Left - Right - Root
    postOrder() {
        let output = [];
        let _traverse = (node) => {
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
            output.push(node.value);
        }
        _traverse(this.root);
        return output;
    }
    add(value){
        if(value){
          const node = new Node(value);
          if(!this.root){
            this.root = node;
            return this.root;
          }
          let current = this.root;
          let parent  = null;
          while(current != null){
            parent = current;
            if(current.value < node.value){
              current = current.right;
            }else{
              current = current.left;
            }
          }
          if(parent.value < node.value){
            parent.right = node;
          }else{
            parent.left = node;
          }
          return this.root;
        }else{
          return 'you should pass a value to add it in the tree';
        }
      }
      contains(value){
        if(value){
          if(this.root.value === value ){
            return true;
          }
          let current = this.root;
          while(current != null){
            if(current.value < value){
              current = current.right;
              if(current && current.value === value){
                return true;
              }
            }else{
              current = current.left;
              if(current &&  current.value === value){
                return true;
              }
            }
          }
          return false;
        }else{
          return 'you should pass a value';
        }
      }
    }

module.exports = {
    BinaryTree,
    Node
}
;