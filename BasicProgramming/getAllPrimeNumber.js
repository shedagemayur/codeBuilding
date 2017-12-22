var code = (function($){
	let isPrimeNumber = function(number = 0){
		if(number == 2){
			return true;
		}
		for(var i=2;i<=Math.sqrt(number);i++){
			if(number % i == 0){
				return false;
			}
		}
		return true;
	}
	return{
		getAllPrimeNumbers:  function(number = 0){
			var primenumber = [];
			if(number == 1){
				return 0;
			}
			for(var i=2; i<=number; i++){
				if(isPrimeNumber(i)){
					primenumber.push(i);
				}
			}
			console.log(primenumber);
		}
	}
})(code);