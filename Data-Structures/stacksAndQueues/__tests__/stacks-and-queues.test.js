'use strict';

const StacksQueue = require('../stacks-and-queues');

let stack = new StacksQueue.Stack();
let queue = new StacksQueue.Queue();

describe('Stack Model', () => {
  it('create an empty stack', () => {
    expect(stack.top).toBeNull;
  });

  it('push()', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.top.node).toEqual(2);
  });

  it('pop()', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.top.node).toEqual(1);
  });

  it('pop()', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.top.node).toEqual(1);
    stack.pop();
    expect(stack.top).toBeNull;
  });
  it('peek()', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(stack.top);
  });
  
  it('isEmpty()', () => {
    expect(stack.isEmpty()).toBeTruthy;
  });

  it('isEmpty()', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.isEmpty()).toBeFalse;
  });
});

// Queue \\
describe('Queue model', () => {
  it('create an empty Queue', () => {
    expect(queue.front).toBeNull;
  });

  it('dequeue()', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue(1);
    queue.dequeue(2);
    expect(queue.front).toBeNull;
  });

  it('peek() ', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(queue.front);
  });

  it('isEmpty()', () => {
    expect(queue.isEmpty()).toBeTruthy;
  });

  it('isEmpty()', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).toBeFalse;
  });
});