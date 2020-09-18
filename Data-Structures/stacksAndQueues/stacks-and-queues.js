'use strict';
// node class\\
class Node {
  constructor(node){
    this.node = node;
    this.next = null;
  }
}
// Stack \\
class Stack{
  constructor(){
    this.top = null;
  }

  push(value){
    let newNode = new Node(value);
    if (this.top === null){
      this.top = newNode;
    }else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop(){
    if (this.top !== null){
      let item = this.top.value;
      this.top = this.top.next;
      return item;
    }else{
      return null;
    }
  }

  peek(){
    
    return this.top;
  }

  isEmpty(){
    if(this.top === null){
      return true;

    }else{
      return false;
    }

  }

}

// Queue \\

class Queue{
  constructor(){
    this.front = null;
    this.back = null;

  }

  enqueue(value){
    let newNode = new Node(value);
    if(this.front === null){
      this.back = newNode;
    }else{
      this.back.next = newNode;
      this.back = newNode;
      return this;
    }
    
  }

  dequeue(){
    if (this.front === null){
      this.back = null;
    }else{
      this.front = this.front.next;
      return this;
    }

  } 
  peek(){
    return this.front;
  }

  isEmpty(){
    if(this.top === null){
      return true;
  
    }else{
      return false;
    }
  }
}

module.exports ={ Stack, Queue }; 