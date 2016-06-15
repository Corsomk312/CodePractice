var funcCaller = function(function(x){}, arg){
  return function(arg);
};




var firstVal = function(obj, func, key){
  return func(obj, key)
};

var indexer = function(object, key){
  return object[key]
};

