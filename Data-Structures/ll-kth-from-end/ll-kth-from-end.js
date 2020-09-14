'use strict';

const LinkedList = require('../linkedList/linked-list.js');

class llkthfromend extends LinkedList{

  llkthFromEnd(k){
    let first = this.head;
    let listLength = 0;
    let second = 0;

    while (first) {
      listLength = listLength + 1;
      first = first.next;
    }

    second = listLength - 1 - k;
    if (0 > second || k < 0) {
      return 'Exception';
    }


    first = this.head;
    while (first) {
      first = first.next;
      first = first - 1;

    }


  }

}

module.exports = llkthfromend;