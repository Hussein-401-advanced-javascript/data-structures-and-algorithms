'use strict';

const lists = require('../linked-list.js');

describe ('my linked list', ()=>{
  it(' checks the Constructer', () => {
    let conList = new LinkedList();
    expect(conList.head).toBeNull();
  });

  it('check if inserted', ()=>{
    let inList = new LinkedList();
    inList.insert('linked list test');
    expect(inList.head.value).toEqual('linked list test');
  });
  it('check if true or false', ()=> {
    let list = new LinkedList();
    list.insert('the test value');
    expect(list.include('the test value')).toBeTruthy();
  });
});