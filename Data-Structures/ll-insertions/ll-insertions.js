#!/usr/bin/env node
'use strict';
let LinkedList = require('../linked-list/linked-list')
class Llinsertions extends LinkedList {
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

    insertBefore(value, newVal) {
        let newNode = new Node(newVal);
        let node1 = this.head;
        if (node1.value === value) {
            return this.insertBefore(newVal);

        } while (node1.next) {
            if (node1.next === value) {
                newNode.next = node1.next;
            }
            node1.next = newNode;
            return this;
        }


    }
    insertAfter(value, newVal) {
        let newNode = new Node(newVal);
        let node1 = this.head;
        while (node1.value === value) {
            newNode.next = node1.next;
            node1.next = newNode;
            return this;
        }
        node1 = node1.next
    }

}

module.exports = Llinsertions;