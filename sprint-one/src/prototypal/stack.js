var makeStack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance._storage = {};
  someInstance._size = 0;
  return someInstance;
};

var stackMethods = {
  push: function(value){
    this._storage[this._size] = value;
    this._size++;
    return this.size();
  },

  pop: function(){
    if( this.size() < 1 ) return;
    this._size--;
    var result = this._storage[this._size];
    delete this._storage[this._size];
    return result;
  },

  size: function(){
    return this._size;
  }
};


var myStack = makeStack();
console.log(myStack.push(3));
console.log(myStack.push(7));
console.log(myStack.push(2));
console.log(myStack.pop());
console.log(myStack.push(9));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
