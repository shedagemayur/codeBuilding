/**
	Optimized method for checking if provided number is prime
**/

var code = (function(){
	var isPrime = function(number) {

		if(number < 2){
			return false;
		}

		if(number % 2 === 0){
			return false;
		}

		if(number % 3 === 0){
			return false;
		}

		var sqrtOfNumber = Math.floor(Math.sqrt(number));
		var factor = 5;

		while(factor <= sqrtOfNumber){

			if(number % factor === 0){
				return false;
			}

			if(number % (factor + 2) === 0){
				return false;
			}

			factor += 6;
		}
		return true;
   	};

	return{

		/**
		 * isPrimeNumber: check whether number is prime
		 * @params: {Number} number - Number that code can check on prime
		 * @return: {Boolean} Will return true if provided number is prime
		 * @methods:
		 	1. Math.floor : The pop() method removes the last element from an array and returns that element.
		 	2. Math.sqrt: The push() method adds one or more elements to the end of an array and returns the new length of the array.length of the array.
		 * @example
		 *
		 * code.isPrimeNumber(7); // true
		 * code.isPrimeNumber(18); // false
		*/

		isPrimeNumber: function(num = 0) {
			if(isNaN(num)){
				return 'Enter valid number';
			}
		    return isPrime(num);
		}
	}
})();