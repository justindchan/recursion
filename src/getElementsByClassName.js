// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document.body) {
  // your code here
  // returns an array with all elements matching className
  // select each element in <body> of HTML
  // IF each element has a class and the class is the same as 'className', it is added to an array
  // check if each element has a child Node
  // if it has, check if child Node has a class and the class is the same as className.(recursion)
  // IF childNode has, add it to an array
 
  var elementsWithClass = [];
  if (node.classList && node.classList.contains(className)) {
  	elementsWithClass.push(node);
  }
  if (node.children) {
  	for (var i = 0; i < node.children.length; i++) {
  		elementsWithClass = elementsWithClass.concat(getElementsByClassName(className, node.children[i]));
  	}
  }
  return elementsWithClass;
};

