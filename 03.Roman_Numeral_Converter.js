// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.


function convertToRoman(num) {
  var roman = ["I","IV","V","IX","X","XL","L","XC","C","CD","D", "CM","M"];
  var decimals = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var answer = "";
  for(var i = decimals.length; i >=0;i--){
    while(num%decimals[i]<num){
      answer+=roman[i];
      num-=decimals[i];
    }
  }
  return answer;
}

convertToRoman(4);


//ES6 Code

const convertToRoman = num=>{
	const	roman 	 = 	["I","IV","V","IX","X","XL","L","XC","C","CD","D", "CM","M"];
  	const 	decimals = 	[1,4,5,9,10,40,50,90,100,400,500,900,1000];
  	let 	answer 	 = 	"";

  	for (let i = decimals.length; i>=0; i--){
  		while(num%decimals[i]<num){
  			answer+=roman[i];
  			num-=decimals[i];
  		}
  	}
  	return answer;
}