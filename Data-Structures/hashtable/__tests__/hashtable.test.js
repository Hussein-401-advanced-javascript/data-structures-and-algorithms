'use strict';

const HashTable = require('../hashtable');


describe('hashtable challenge', () => {
  it('hash()', () => {
    let testHash = new HashTable(1024);
    expect(testHash.hash('Car')).toBeTruthy();
  });

  it('get()', () => {
    let testHash = new HashTable(1024);
    testHash.add('Car', 'Tesla');
    testHash.add('testKey', 'Test Value');
    expect(testHash.get('Car')).toEqual('Tesla');
  });

  it('contain()', () => {
    let testHash = new HashTable(1024);
    testHash.add('Car', 'Tesla');
    testHash.add('testKey', 'Test Value');
    expect(testHash.contains('Car')).toBeTruthy();
  });

});