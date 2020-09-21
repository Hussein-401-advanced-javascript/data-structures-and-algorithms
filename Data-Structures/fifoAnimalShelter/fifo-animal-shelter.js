'use strict';

class AnimalShelter {
  constructor(){
    this.storage = [];
  }
  
  enqueue(animal){
    if(animal){
      if(animal.type === 'cat' || animal.type === 'dog'){
        this.storage.push(animal);
      }
    }else{
      return 'please add a cat or dog';
    }
  
  }
  dequeue(pref){
    if(pref){
      while(this.storage.length != 0){
        
        if(this.peek().type === pref.type &&  this.peek().name === pref.name){
          return this.peek();
        }else{
          this.storage.shift();
        }
      }
      return null;
    }else{
      return 'please enter your preffered animal';
    }
  }
  peek(){
    return this.storage[0];
  }
}
  
let shelter = new AnimalShelter();
shelter.enqueue({type : 'cat' , name : 'cat1'});
shelter.enqueue({type : 'dog' , name : 'dog1'});
shelter.enqueue({type : 'dog' , name : 'dog3'});
shelter.enqueue({type : 'cat' , name : 'cat2'});
// shelter.dequeue({type : 'dog' , name : 'dog3'});
shelter.dequeue({type : 'cat' , name : 'cat2'});