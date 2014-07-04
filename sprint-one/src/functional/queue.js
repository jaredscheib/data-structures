var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var bottom = 0;
  var top = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance[top] = value;
    top++;
  };

  someInstance.dequeue = function(){
    if( this.size() < 1 ) return;
    var result = someInstance[bottom];
    delete someInstance[bottom];
    bottom++;
    return result;
  };

  someInstance.size = function(){
    return top - bottom;
  };

  return someInstance;
};