'use strict';
const PseudoQueue = require('../queueWithStacks.js').PseudoQueue;

describe('PseudoQueue',()=>{
    it('can successfully enqueue a value into an empty PseudoQueue', () => {
        const pq = new PseudoQueue();
        pq.enqueue(5);
        expect(pq.stack1.peek()).toEqual(5);
      });
      it('can successfully dequeue a value from PseudoQueue in the correct order', () => {
        const pq = new PseudoQueue();
        pq.enqueue('salmon');
        pq.enqueue('mackerel');
        pq.enqueue('yellowtail');
        expect(pq.dequeue()).toBe('salmon');
      });
})