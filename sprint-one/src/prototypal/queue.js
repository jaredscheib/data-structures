var makeQueue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance._storage = {};
  someInstance._top = 0;
  someInstance._bottom = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this._storage[this._top] = value;
    this._top++;
    return this.size();
  },

  dequeue: function(){
    if( this.size() < 1 ) return;
    var result = this._storage[this._bottom];
    delete this._storage[this._bottom];
    this._bottom++;
    return result;
  },

  size: function(){
  return this._top - this._bottom;
  }
};