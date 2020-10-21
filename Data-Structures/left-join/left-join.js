const HashTable = require ('../hashtable/hashtable.js')
let map1 = new HashTable(300);
map1.add('name' , 'Hussein');
map1.add('age' , '25');
map1.add('city' , 'Amman');

let map2 = new HashTable(300);
map2.add('name' , 'HellBoy');
map2.add('age' , '33');
map2.add('city' , 'sinCity');
function liftJoin (map1 , map2){
    let arr1 = [];
    let arr2 = [];
    for(let i = 0; i < map1.entries.length ; i++){
      if(map1.entries[i]){
        let key = Object.keys(map1.entries[i].head.value)[0];
        arr1.push(key);
        arr1.push(map1.entries[i].head.value[key]);
        arr1.push(map2.get(key));
        arr2.push(arr1);
        arr1 = [];
      }
    }
    return arr2;
  }
    console.log(liftJoin(map1 , map2));
  liftJoin(map1 , map2);