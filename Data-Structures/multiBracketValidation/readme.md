# multi-bracket-validation
- Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. 

## Challenge

- create an array and keep the matching brackets and remove the unmatching ones

## Approach & Efficiency

- usig an if statemnent to compare the items inside the array.

## Big O

Time ==> O(n) because I used loops

Space ==> O(n) because I used loops

## Problem Domain:
 - Create a function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced.
## Algorthem
 1. use the regex to take the brackets only from the input and store it in array
 2. Create an  empty array.
 3. Create an objest to store the all the brackets items in.
 4. if the item is started with a bracket then push it. 
 5. if the item was a closing bracket then pop it. 
 6. if the item is mathcing bracket then keep it.

## Input: 
  - **String**
## Output:
 - **Boolean** 