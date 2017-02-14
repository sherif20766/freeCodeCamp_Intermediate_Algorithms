/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 

In other words, return the symmetric difference of the two arrays.*/


function diffArray(arr1, arr2) {
  var answer = [];
  var newArr = arr1.concat(arr2).sort();

  newArr.map(function(x){
    newArr.indexOf(x)===newArr.lastIndexOf(x)?answer.push(x): "";
  });
  
  return answer;
}
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);



//ES6 Code

const diffArray=(arr1,arr2)=>{
	let answer = [];
	let newArr = arr1.concat(arr2).sort();

	newArr.map(x=>newArr.indexOf(x)===newArr.lastIndexOf(x)?answer.push(x):"");
	return answer;
}