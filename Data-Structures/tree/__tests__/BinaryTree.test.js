'use strict';

const Node = require('../tree.js').Node;
const BinaryTree = require('../tree.js').BinaryTree;

describe('Binary Tree', ()=> {
    let tree; 
    beforeAll(()=> {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        
        one.right = two;
        one.left = three;
        two.left = four;
        three.left =five,
        four.right = six;

        tree = new BinaryTree(one);

    });
    // Root - Left - Right
    it('preOrder()', ()=> {
        let expected = [1, 3, 5, 2, 4, 6];
        let preOrderOutput = tree.preOrder();
        expect(preOrderOutput).toEqual(expected);
    });
    // Left - Root - Right
    it('inOrder()', ()=> {
        let expected = [5, 3, 1, 4, 6, 2];
        let inOrderOutput = tree.inOrder();
        expect(inOrderOutput).toEqual(expected);
    });
    // Left - Right - Root
    it('postOrder()', ()=> {
        let expected = [5, 3, 6, 4, 2, 1];
        let postOrderOutput = tree.postOrder();
        expect(postOrderOutput).toEqual(expected);
    }); 
});