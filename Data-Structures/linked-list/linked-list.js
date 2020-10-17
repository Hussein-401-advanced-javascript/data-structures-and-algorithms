#!/usr/bin/env node
'use strict';
// const allLists = { // storing the lists inside.

// };

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
  getBykeyName(val) {
    let currentNode = this.head;
    while (currentNode) {
      if (Object.keys(currentNode.value)[0] == val) {
        return currentNode.value[val]
      }
      currentNode = currentNode.next
    }
    return { 'Error': 'NotExist' }
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
    let currentNode = this.head;
    while (currentNode) {
      if (typeof currentNode.value === 'object') {
        if (Object.keys(currentNode.value)[0] == val) {
          return true
        }
      } else if (currentNode.value == val) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let node1 = this.head;
    while (node1.next) {
      node1 = node1.next;
    }
    node1.next = newNode;
    return this;
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

// allLists.Node = Node;
// allLists.LinkedList = Linkedlist; // inserting inside the empty obj.


module.exports = {
  Node: Node,
  Linkedlist: Linkedlist,
};
