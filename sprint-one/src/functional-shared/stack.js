var makeStack = function() {
  var stackInstance = {
    _storage: {},
    _size: 0,
    push: stackMethods.push,
    pop: stackMethods.pop,
    size: stackMethods.size
  }
  return stackInstance;
};

var stackMethods = {
  push: function(value){
    this._storage[this._size++] = value;
    return this._size;
  },

  pop: function(){
    if( this._size < 1 ) return;
    var result = this._storage[--this._size];
    delete this._storage[this._size];
    return result;
  },
  
  size: function(){
    return this._size;
  }
};