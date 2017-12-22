var code = (function($){
	function getRepeatedCharacter(string='') {
		var repeat = {};
		for (var i=0; i<string.length;i++) {
		    var character = string.charAt(i);
		    if (repeat[character]) {
		       repeat[character]++;
		    } else {
		       repeat[character] = 1;
		    }
		}
		return repeat;
	}
	function isPrimeNumber(param = 0){
		if(param == 1){
			return false;
		}
		if(param == 2){
			return true;
		}
		for(var i=2;i<param;i++){
			if(param % i == 0){
				return false;
			}else{
				return true;
			}
		}
	}
	function isDistictAndPrime(param = {}){
		if(isPrimeNumber(Object.values(param).length)){
			return true;
		}else{
			return false;
		}
	}
	return {
		isPrimeString: function(string = ''){
			if(string == '' || string == 'undefind'){
				console.log('Invalid String');
				return;
			}
			var primeString = getRepeatedCharacter(string);
			for(i in primeString){
				if(isPrimeNumber(primeString[i]) && isDistictAndPrime(primeString)){
					console.log('PrimeString');
				}else{
					console.log('Not a PrimeString');
				}
			}
		}
	}
})(code);
