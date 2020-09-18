class Node{
  constructor(value){
    this.value = value;
    this.nextVal = null;
  }
}
  
  
class Linkedlist{
  constructor(){
    this.head = null;
  
  }
  insert(val){
    let node = new Node(val);
    if(!this.head){
      this.head = node;
      return this;
    }
    let node2 = this.head;
    this.head= node;
    this.head.nextVal = node2;
  
  }
  
  
  includes(val){
    let nodeVal = this.head;
    while (nodeVal !== null) {
      if (nodeVal.val === val) {
        return true;
      }
      nodeVal = nodeVal.next;
    }
    return false;
  }
  //   if(nodeVal.value === val ){
  //     return true;
  //   }else if (nodeVal.next === val){
  //     return false;
  //   }else{
  //     return false;
  //   }
  // }
  
  
  toString(){
    let stringVal = this.head;
    let allVal = `{ ${stringVal.value} }`;
    while(stringVal.next){
      stringVal = stringVal.next;
      allVal += ` -> { ${stringVal.value} }`;
    }
    return `${allVal} -> null`;
  
  }
}
module.exports = Linkedlist;