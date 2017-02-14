/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.*/


function sumAll(arr) {
  var array = arr.sort(function(a,b){return a-b;});
  var values = [];
  for(var i = array[0]; i<=array[1];i++){
    values.push(i);
  }
  return values.reduce(function(x,y){return x+y;});
}

sumAll([1, 4]);



// ES6 Code

const sumAll = arr=>{
	let values = [];
	let array = arr.sort((a,b)=>a-b);
	for(let i=array[0]; i<=array[1];i++){
		values.push(i);
	}
	return values.reduce((x,y)=>x+y)
}