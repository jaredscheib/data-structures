var Queue = function() {
  this._storage = {};
  this._top = 0;
  this._bottom = 0;
};

Queue.prototype.enqueue = function(value){
  this._storage[this._top] = value;
  this._top++;
  return this.size();
};

Queue.prototype.dequeue = function(){
  if( this.size() < 1 ) return;
  var result = this._storage[this._bottom];
  delete this._storage[this._bottom];
  this._bottom++;
  return result;
};

Queue.prototype.size = function(){
  return this._top - this._bottom;
};