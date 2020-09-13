#!/usr/bin/env node
'use strict'
const allLists = { // storing the lists inside.

};

class Node {
  constructor(value) {
    this.value = value;
    this.nextVal = null;
  }
}


class Linkedlist {
  constructor() {
    this.head = null;

  }
  insert(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let node2 = this.head;
    this.head = node;
    this.head.nextVal = node2;

  }


  includes(val) {
    let nodeVal = this.head;
    while (nodeVal) {
      if (nodeVal.value == val) {
        return true;
      }
      nodeVal = nodeVal.next;
    }
    return false;
  }


  toString() {
    let stringVal = this.head;
    let allVal = `{ ${stringVal.value} }`;
    while (stringVal.next) {
      stringVal = stringVal.next;
      allVal += ` -> { ${stringVal.value} }`;
    }
    return `${allVal} -> null`;

  }
}

allLists.Node = Node;
allLists.LinkedList = Linkedlist; // inserting inside the empty obj.


module.exports = allLists;
