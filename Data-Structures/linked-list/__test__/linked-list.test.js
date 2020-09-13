'use strict';

const lists = require('../linked-list.js');

describe ('my linked list', ()=>{
  it(' checks the Constructer', () => {
    let conList = new lists();
    expect(conList.head).toBeNull();
  });

  it('check if inserted', ()=>{
    let inList = new lists();
    inList.insert('linked list test');
    expect(inList.head.value).toEqual('linked list test');
  });
  it('check if true or false', ()=> {
    let list = new lists();
    list.insert('the test value');
    expect(list.include('the test value')).toBeTruthy();
  });
});