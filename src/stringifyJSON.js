// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // if 'function' - omit
  // if 'undefined' - omit 
  // if - return '' + obj
  // if 'number' - return '' + obj
  // if 'string' - return '"' + obj + '"'
  // if 'boolean' - return '' + obj
  // if 'array' - loop recursively for above base cases
  // if 'object' - loop recursively for above base cases
  // base cases will add result to an array, which we will finally convert to a string and return
  // '[' + ['hello' + ',' + 'world'] + ']' ====> " [hello,world]"
  // '{' + 'hello' + ':' + 'world' + '}' ====> "{hello: world}"
  // JSON.stringify({'hello': 'world'}) ===> "{"hello":"world"}"
  // 
  let stringified = [];
  if (obj === null || typeof obj === 'number' || typeof obj === 'boolean') {
  	return '' + obj;
  
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  
  } else if (Array.isArray(obj)) {
  	for (var i = 0; i < obj.length; i++) {
  		if (obj[i] === undefined || typeof obj[i] === 'function') {
  			return null;
  		} else {
  			stringified.push(stringifyJSON(obj[i]));
  		}
  	}
  	return '[' + stringified + ']';

  } else if (typeof obj === 'object') {
  	
  	Object.keys(obj).forEach(function(key) {
  		// var value = stringifyJSON(obj[key]) 
		if (obj[key] === undefined || typeof obj[key] === 'function') {
			return '{}';
		} else {
			stringified.push(stringifyJSON(key) + `:` + stringifyJSON(obj[key]))
		}
  	})
  	return '{' + stringified + '}';
  }

};
