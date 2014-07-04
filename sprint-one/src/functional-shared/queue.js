var makeQueue = function(){
  var queueInstance = {
    _storage: {},
    _top: 0,
    _bottom: 0,
    enqueue: queueMethods.enqueue,
    dequeue: queueMethods.dequeue,
    size: queueMethods.size
  };
  return queueInstance;
};

var queueMethods = {
  //enqueue
  enqueue: function(value){
    //adds item to top
    this._storage[this._top] = value;
    //incremements top
    this._top++;
    return this.size();
  },

  //dequeue
  dequeue: function(){
    if( this.size() < 1 ) return;
    //removes item from bottom
    var result = this._storage[this._bottom];
    delete this._storage[this._bottom];
    //increments bottom
    this._bottom++;
    //returns item
    return result;
  },

  size: function(){
    return this._top - this._bottom;
  }
};