const LinkedList = require('../linked-list/linked-list');

function zipLists(l1, l2) {

  if (l1 && l2) {
    let resultedList = new LinkedList();
    resultedList = l1.head;
    let p1 = resultedList.head;

    while (p1.next) {
      p1 = p1.next;
    }
    p1.next = l2.head;

    return resultedList;
  }

  else {
    return 'nothing happened';
  }

}


module.exports = zipLists;