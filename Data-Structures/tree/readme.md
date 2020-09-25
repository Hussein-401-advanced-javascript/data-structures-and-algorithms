## Problem Domain:
 - Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
 - Create a BinaryTree class
 - Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
 - Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
 - Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
## Input/Output:
 - **add()**: 
    - input ----> number
    - output ----> new node added to the BinaryTree class- 
 - **contains()**: 
    - input ----> number
    - output ----> 
        1. **true** if the number exsist
        2. **fales** if the number not exsist or the user hadn't pass any number
## Algoriathem 
 1. create a node class has three properties **right** **left** and a **value** 
 2. createa Binary Tree class has root property 
    -  **preOrder()**:push the root value in an array, create a traversal methode to itirate over the current node and its left nodes then is right nodes the storing beggin with the **root**---->**left**---->**right** 
    - **inOrder()**: push the root value in an array, create a traversal methode to itirate over the current node and its left nodes then it's right node sthe storing beggin with the **left**----> **root** ---->**right**  
    - **postOrder():** push the root value in an array, create atraversal method to itirate over the current node and its left nodes then is right nodes the storing beggin with the **left**---->**right**->----> **root**  
 3. **add(value)**: create a new node with the value then check if there is a root if not add the value into the root else itirate over the subtrees if the value greater than the node go to right else go left until the current reach the null value then add the node to the parent if the value greater than the parent store on the right else store it on the left
 4. **contains(value)**: itirate over the nodes starting from the root as same as add method and check if the current value of the node equals the input value, if the value exsit return true if not exsit return false and also we check for the value if it initaly added to the contains in the first place.
## verification
 - repl.it


 
