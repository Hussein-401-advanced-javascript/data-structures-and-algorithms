'use strict';

const BinaryTreeMaximum = require('../find-maximum-binary-tree.js');
const Node = require('../../tree').Node;


describe('Maximum Binary Tree node value', () => {

  let tree = null;

  beforeAll(() => {
    // create my tree 
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTreeMaximum(one);
  });

  it('MaximumTree()', () => {
    let expected = 9;
    let preOrder = tree.find_maximum_value();
    expect(preOrder).toEqual(expected);
  });
});