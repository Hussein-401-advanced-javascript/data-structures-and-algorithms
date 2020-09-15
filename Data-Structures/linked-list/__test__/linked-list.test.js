'use strict';

const lists = require('../linked-list.js');

describe ('my linked list', ()=>{
  it(' checks the Constructer', () => {
    let conList = new lists.Linkedlist();
    expect(conList.head).toBeNull();
  });

  it('check if inserted', ()=>{
    let inList = new lists.Linkedlist();
    inList.insert('linked list test');
    expect(inList.head.value).toEqual('linked list test');
  });
  it('check if true or false', ()=> {
    let list = new lists.Linkedlist();
    list.insert('the test value');
    expect(list.includes('the test value')).toBeTruthy();
  });
});